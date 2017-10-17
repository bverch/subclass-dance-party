window.SpookyKitty = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.css('background-image', 'url("img/spookyKitty.png")');
    this.$node.css('height', 60);
    this.$node.css('width', 75);
    this.isVanished = false;
    this.mouseHovering = false;
    this.$node.mouseover(() => {
      this.mouseHovering = true;
      this.$node.removeClass('disappear');
    });
    this.$node.mouseleave(() => {
      this.mouseHovering = false;
      this.$node.addClass('disappear');
    });
  }

  step() {
    super.step();
    
    this.isVanished ? this.$node.addClass('disappear') : this.$node.removeClass('disappear');

    this.isVanished = !this.isVanished;
    
    if (this.mouseHovering) {
      this.isVanished = false;
    }
  }
};