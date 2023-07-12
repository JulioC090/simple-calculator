import {BackspaceAction} from "./CalculatorActions/BackspaceAction.js";
import {BracketAction} from "./CalculatorActions/BracketAction.js";
import {ClearAction} from "./CalculatorActions/ClearAction.js";
import {DigitAction} from "./CalculatorActions/DigitAction.js";
import {PrimitiveOperationAction} from "./CalculatorActions/PrimitiveOperationAction.js";
import {ClassChangerForManyDigitsMiddleware} from "./CalculatorMiddlewares/ClassChangerForManyDigitsMiddleware.js";
import {ExpressionSizeLimiterMiddleware} from "./CalculatorMiddlewares/ExpressionSizeLimiterMiddleware.js";
export class CalculatorActionMapper {
  static create(expressionElement, expression) {
    const primitiveOperation = new PrimitiveOperationAction(expressionElement, expression);
    const digitAction = new DigitAction(expressionElement, expression);
    const bracketAction = new BracketAction(expressionElement, expression);
    const clearAction = new ClearAction(expressionElement, expression);
    const backspaceAction = new BackspaceAction(expressionElement, expression);
    const classChangerForManyDigitsMiddleware = new ClassChangerForManyDigitsMiddleware(expressionElement, expression);
    const expressionSizeLimiterMiddleware = new ExpressionSizeLimiterMiddleware(expressionElement, expression);
    return [
      {
        type: "digit",
        action: digitAction,
        middleware: [
          expressionSizeLimiterMiddleware,
          classChangerForManyDigitsMiddleware
        ]
      },
      {
        type: "operation",
        value: "divide",
        params: "/",
        action: primitiveOperation
      },
      {
        type: "operation",
        value: "multiply",
        params: "*",
        action: primitiveOperation
      },
      {
        type: "operation",
        value: "subtract",
        params: "-",
        action: primitiveOperation
      },
      {
        type: "operation",
        value: "addition",
        params: "+",
        action: primitiveOperation
      },
      {
        type: "operation",
        value: "percent",
        params: "%",
        action: primitiveOperation
      },
      {
        type: "operation",
        value: "bracket",
        action: bracketAction,
        middleware: [
          expressionSizeLimiterMiddleware,
          classChangerForManyDigitsMiddleware
        ]
      },
      {
        type: "function",
        value: "clear",
        action: clearAction
      },
      {
        type: "function",
        value: "backspace",
        action: backspaceAction,
        middleware: [classChangerForManyDigitsMiddleware]
      }
    ];
  }
}
