import { AbstractCalculatorAction } from './AbstractCalculatorAction';

export class PrimitiveOperationAction extends AbstractCalculatorAction {
  execute(symbol: string): void {
    if (this.expression.listOfSymbols.length === 0) return;

    if (
      this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1]
        .type === 'operation'
    ) {
      this.expression.listOfSymbols.pop();
      this.expressionElement!.innerHTML =
        this.expressionElement!.innerHTML.slice(0, -3);
    }

    if (
      this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1]
        .type === 'bracket' &&
      this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1]
        .value === '(' &&
      symbol !== '+' &&
      symbol !== '-'
    )
      return;

    this.expression.listOfSymbols.push({ value: symbol, type: 'operation' });
    this.expressionElement!.innerHTML += ` ${symbol} `;
  }
}
