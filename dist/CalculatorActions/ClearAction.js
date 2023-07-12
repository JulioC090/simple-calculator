import {AbstractCalculatorAction} from "./AbstractCalculatorAction.js";
export class ClearAction extends AbstractCalculatorAction {
  execute(symbol) {
    this.expressionElement.innerHTML = "";
    this.expression.listOfSymbols = [];
    this.expression.openBrackets = 0;
  }
}
