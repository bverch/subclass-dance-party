window.ResizeDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.isBig = true;
    // this.$node.addClass('transition');
    // this.$node.css('transition-duration', timeBetweenSteps / 1000 + 's');
  }
  step() {
    super.step();
    this.isBig ? this.$node.addClass('enlarge') : this.$node.removeClass('enlarge');
    this.isBig = !this.isBig;
  }
};