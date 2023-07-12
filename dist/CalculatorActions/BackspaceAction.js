import {AbstractCalculatorAction} from "./AbstractCalculatorAction.js";
export class BackspaceAction extends AbstractCalculatorAction {
  execute(symbol) {
    if (this.expression.listOfSymbols.length === 0)
      return;
    if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "number") {
      if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value.length > 1) {
        this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value = this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value.slice(0, -1);
        this.expressionElement.innerHTML = this.expressionElement.innerHTML.slice(0, -1);
      } else {
        this.expression.listOfSymbols.pop();
        this.expressionElement.innerHTML = this.expressionElement.innerHTML.slice(0, -1);
      }
    } else if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "operation") {
      this.expression.listOfSymbols.pop();
      this.expressionElement.innerHTML = this.expressionElement.innerHTML.slice(0, -3);
    } else if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "bracket") {
      if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value === "(") {
        this.expression.openBrackets--;
      } else {
        this.expression.openBrackets++;
      }
      this.expression.listOfSymbols.pop();
      this.expressionElement.innerHTML = this.expressionElement.innerHTML.slice(0, -1);
    }
  }
}
