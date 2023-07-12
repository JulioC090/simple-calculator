import {AbstractCalculatorAction} from "./AbstractCalculatorAction.js";
export class BracketAction extends AbstractCalculatorAction {
  execute(symbol) {
    if (this.expression.openBrackets === 0) {
      if (this.expression.listOfSymbols.length === 0) {
        this.expressionElement.innerHTML += "(";
        this.expression.listOfSymbols.push({value: "(", type: "bracket"});
      } else if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "operation") {
        this.expressionElement.innerHTML += " (";
        this.expression.listOfSymbols.push({value: "(", type: "bracket"});
      } else if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "number" || this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value === ")") {
        this.expressionElement.innerHTML += " * (";
        this.expression.listOfSymbols.push({value: "*", type: "operation"});
        this.expression.listOfSymbols.push({value: "(", type: "bracket"});
      }
      this.expression.openBrackets++;
    } else {
      if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "bracket" && this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].value === "(") {
        this.expressionElement.innerHTML += "(";
        this.expression.listOfSymbols.push({value: "(", type: "bracket"});
        this.expression.openBrackets++;
      } else if (this.expression.listOfSymbols[this.expression.listOfSymbols.length - 1].type === "operation") {
        this.expressionElement.innerHTML += " (";
        this.expression.listOfSymbols.push({value: "(", type: "bracket"});
        this.expression.openBrackets++;
      } else if (this.expression.openBrackets > 0) {
        this.expressionElement.innerHTML += ")";
        this.expression.listOfSymbols.push({value: ")", type: "bracket"});
        this.expression.openBrackets--;
      }
    }
  }
}
