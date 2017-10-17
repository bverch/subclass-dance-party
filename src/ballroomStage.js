window.BallroomStage = class extends Stage {
  constructor() {
    super();
    this.imgUrl = 'url("img/ballroom.tif")';
    $('body').css('background-image', this.imgUrl);
    $('body').css('background-position', 'center bottom');
    $('body').css('background-size', 'cover');

    this.stageName = 'ballroomStage';
  }
};