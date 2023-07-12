import { Expression } from './Expression';

import { BackspaceAction } from './CalculatorActions/BackspaceAction';
import { BracketAction } from './CalculatorActions/BracketAction';
import { AbstractCalculatorAction } from './CalculatorActions/AbstractCalculatorAction';
import { ClearAction } from './CalculatorActions/ClearAction';
import { DigitAction } from './CalculatorActions/DigitAction';
import { PrimitiveOperationAction } from './CalculatorActions/PrimitiveOperationAction';

import { ClassChangerForManyDigitsMiddleware } from './CalculatorMiddlewares/ClassChangerForManyDigitsMiddleware';
import { AbstractCalculatorMiddleware } from './CalculatorMiddlewares/AbstractCalculatorMiddleware';
import { ExpressionSizeLimiterMiddleware } from './CalculatorMiddlewares/ExpressionSizeLimiterMiddleware';

type Action = {
  type: 'digit' | 'operation' | 'function';
  value?: string;
  params?: string;
  action: AbstractCalculatorAction;
  middleware?: AbstractCalculatorMiddleware[];
};

export class CalculatorActionMapper {
  static create(
    expressionElement: HTMLElement,
    expression: Expression,
  ): Action[] {
    const primitiveOperation = new PrimitiveOperationAction(
      expressionElement,
      expression,
    );
    const digitAction = new DigitAction(expressionElement, expression);
    const bracketAction = new BracketAction(expressionElement, expression);
    const clearAction = new ClearAction(expressionElement, expression);
    const backspaceAction = new BackspaceAction(expressionElement, expression);
    const classChangerForManyDigitsMiddleware =
      new ClassChangerForManyDigitsMiddleware(expressionElement, expression);
    const expressionSizeLimiterMiddleware = new ExpressionSizeLimiterMiddleware(
      expressionElement,
      expression,
    );

    return [
      {
        type: 'digit',
        action: digitAction,
        middleware: [
          expressionSizeLimiterMiddleware,
          classChangerForManyDigitsMiddleware,
        ],
      },
      {
        type: 'operation',
        value: 'divide',
        params: '/',
        action: primitiveOperation,
      },
      {
        type: 'operation',
        value: 'multiply',
        params: '*',
        action: primitiveOperation,
      },
      {
        type: 'operation',
        value: 'subtract',
        params: '-',
        action: primitiveOperation,
      },
      {
        type: 'operation',
        value: 'addition',
        params: '+',
        action: primitiveOperation,
      },
      {
        type: 'operation',
        value: 'percent',
        params: '%',
        action: primitiveOperation,
      },
      {
        type: 'operation',
        value: 'bracket',
        action: bracketAction,
        middleware: [
          expressionSizeLimiterMiddleware,
          classChangerForManyDigitsMiddleware,
        ],
      },
      {
        type: 'function',
        value: 'clear',
        action: clearAction,
      },
      {
        type: 'function',
        value: 'backspace',
        action: backspaceAction,
        middleware: [classChangerForManyDigitsMiddleware],
      },
    ];
  }
}
