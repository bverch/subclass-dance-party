window.FadeInDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.isVanished = true;
  }
  step() {
    super.step();

    this.isVanished ? this.$node.addClass('disappear') : this.$node.removeClass('disappear');

    this.isVanished = !this.isVanished;

    // this.$node.fadeToggle(this.timeBetweenSteps);
  }
};
