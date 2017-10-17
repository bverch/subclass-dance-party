window.CuteKittyDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.css('background-image', 'url("img/catStandingUp.jpg")');
    this.$node.css('height', 80);
    this.$node.css('width', 53);
    this.$node.mouseover(() => {
      this.$node.css('background-image', 'url("img/dancers.png")');
      this.$node.css('height', 54);
      this.$node.css('width', 96);
    });
    this.$node.mouseleave(() => {
      this.$node.css('background-image', 'url("img/catStandingUp.jpg")');
      this.$node.css('height', 80);
      this.$node.css('width', 53);
    });
  }
};