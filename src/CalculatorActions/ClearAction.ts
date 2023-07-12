import { AbstractCalculatorAction } from './AbstractCalculatorAction';

export class ClearAction extends AbstractCalculatorAction {
  execute(symbol: string): void {
    this.expressionElement.innerHTML = '';
    this.expression.listOfSymbols = [];
    this.expression.openBrackets = 0;
  }
}
