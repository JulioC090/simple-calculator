import { Expression } from '../Expression';

export enum Status {
  FAILED = 1,
  SUCESS = 0,
}

export abstract class AbstractCalculatorMiddleware {
  protected expressionElement: HTMLElement;
  protected expression: Expression;

  constructor(expressionElement: HTMLElement, expression: Expression) {
    this.expressionElement = expressionElement;
    this.expression = expression;
  }

  abstract execute(): Status;
}
