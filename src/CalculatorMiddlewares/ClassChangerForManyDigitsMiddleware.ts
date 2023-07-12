import {
  AbstractCalculatorMiddleware,
  Status,
} from './AbstractCalculatorMiddleware';

export class ClassChangerForManyDigitsMiddleware extends AbstractCalculatorMiddleware {
  execute(): Status {
    if (
      this.expressionElement.innerHTML
        .split(' ')
        .filter((expression) => expression.length >= 9).length > 0
    ) {
      this.expressionElement.classList.add(
        'calculator__expression--more-10-digits',
      );
    } else {
      this.expressionElement.classList.remove(
        'calculator__expression--more-10-digits',
      );
    }

    return Status.SUCESS;
  }
}
