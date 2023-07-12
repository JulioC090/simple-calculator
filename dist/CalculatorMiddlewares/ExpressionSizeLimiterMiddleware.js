import {
  AbstractCalculatorMiddleware,
  Status
} from "./AbstractCalculatorMiddleware.js";
export class ExpressionSizeLimiterMiddleware extends AbstractCalculatorMiddleware {
  execute() {
    if (this.expression.listOfSymbols.length === 0)
      return Status.SUCESS;
    const lastExpression = this.expressionElement.innerHTML.split(" ").at(-1) || "";
    if (lastExpression?.length > 14)
      return Status.FAILED;
    return Status.SUCESS;
  }
}
