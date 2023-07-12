import { Expression } from '../Expression';

export abstract class AbstractCalculatorAction {
  protected expressionElement: HTMLElement;
  protected expression: Expression;

  constructor(expressionElement: HTMLElement, expression: Expression) {
    this.expressionElement = expressionElement;
    this.expression = expression;
  }

  abstract execute(symbol: string): void;
}
