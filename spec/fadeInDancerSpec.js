describe('fadeInDancer', function() {

  var fadeInDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeInDancer = new FadeInDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadeInDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(fadeInDancer.$node, 'addClass');
    fadeInDancer.step();
    expect(fadeInDancer.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadeInDancer, 'step');
      expect(fadeInDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeInDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadeInDancer.step.callCount).to.be.equal(2);
    });
  });
});