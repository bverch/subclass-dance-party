window.BlinkyDancer = class extends CuteKittyDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.fourthStep = 0;
  }

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  step() {
    super.step();
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if (this.fourthStep < 2) {
      this.left = this.left + 10;
    } else {
      this.left = this.left - 10;
    }
    this.setPosition(this.top, this.left, this.timeBetweenSteps);

    this.fourthStep = (this.fourthStep + 1) % 4;

    this.$node.toggle();
  }
};