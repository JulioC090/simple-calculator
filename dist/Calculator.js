import {CalculatorActionMapper} from "./CalculatorActionMapper.js";
export class Calculator {
  constructor() {
    this.expressionElement = document.querySelector(".calculator__expression");
    this.resultViewElement = document.querySelector(".calculator__result-view");
    this.buttonElements = document.querySelectorAll(".calculator__button");
    if (!this.expressionElement) {
      throw new Error(`Calculator: no element was found'`);
    }
    if (!this.resultViewElement) {
      throw new Error(`Calculator: no element was found'`);
    }
    if (!this.buttonElements) {
      throw new Error(`Calculator: no element was found'`);
    }
    this.expressionElement.innerHTML = "";
    this.resultViewElement.innerHTML = "";
    this.expression = {
      listOfSymbols: [],
      openBrackets: 0
    };
    const actions = CalculatorActionMapper.create(this.expressionElement, this.expression);
    this.buttonElements.forEach((button) => {
      const action = actions.find((action2) => action2.type === button.dataset.type && (action2.value === void 0 || action2.value === button.dataset.value));
      const actionToExecute = action?.params === void 0 ? () => action?.action.execute(button.dataset.value) : () => action?.action.execute(action.params);
      const actionWithMiddleware = () => {
        if (action?.middleware) {
          for (let middleware of action?.middleware) {
            if (middleware.execute()) {
              return;
            }
          }
        }
        actionToExecute();
      };
      button.addEventListener("click", actionWithMiddleware);
    });
  }
}
