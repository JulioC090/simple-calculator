import {AbstractCalculatorAction} from "./AbstractCalculatorAction.js";
export class DigitAction extends AbstractCalculatorAction {
  execute(symbol) {
    if (this.expression.listOfSymbols.length !== 0 && this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value === ")") {
      this.expression.listOfSymbols.push({
        value: "*",
        type: "operation"
      });
      this.expressionElement.innerHTML += " * ";
    }
    if (this.expression.listOfSymbols.length === 0 || this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type !== "number") {
      this.expression.listOfSymbols.push({
        value: "",
        type: "number"
      });
    }
    if (symbol === "." && this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value.includes("."))
      return;
    this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value += symbol;
    this.expressionElement.innerHTML += symbol;
  }
}
