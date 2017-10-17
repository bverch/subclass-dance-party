// Creates and returns a new dancer object that can step
class Dancer {
  constructor(top, left, timeBetweenSteps) {
    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top;
    this.left = left;
    this.$node.css('transition-duration', timeBetweenSteps / 1000 + 's');
    this.step();
    
  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(() => this.step(), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    this.top = top;
    this.left = left;

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
}