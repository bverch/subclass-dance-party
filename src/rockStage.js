window.RockStage = class extends Stage {
  constructor() {
    super();
    this.imgUrl = 'url("img/stage.JPG")';
    // $('#stage').css('background-image', this.imgUrl);
    // $('#stage').css('background-position', 'center bottom');
    // $('#stage').css('background-size', 'cover');

    this.stageName = 'rockStage';
  }

  lineUp() {
    const dancerCnt = dancers.length;
    const gap = $('#stage').width() / (dancerCnt + 1);
    let hpos = gap - 27;
    const deltaV = $('#stage').height() * 3 / 4;
    const hCenter = $('#stage').width() / 2;
    for (let i = 0; i < dancerCnt; i++) {
      const dancer = dancers[i];
      var vpos = (Math.pow(hpos - hCenter, 2)) * -(0.0003) + deltaV;
      
      dancer.setPosition(vpos, hpos);
      hpos += gap;
    }
  }
};