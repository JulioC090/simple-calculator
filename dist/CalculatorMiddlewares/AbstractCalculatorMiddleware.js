export var Status;
(function(Status2) {
  Status2[Status2["FAILED"] = 1] = "FAILED";
  Status2[Status2["SUCESS"] = 0] = "SUCESS";
})(Status || (Status = {}));
export class AbstractCalculatorMiddleware {
  constructor(expressionElement, expression) {
    this.expressionElement = expressionElement;
    this.expression = expression;
  }
}
