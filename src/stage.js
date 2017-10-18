window.Stage = class {
  constructor() {
    this.imgUrl = '';
  }

  pairUp() {
    const dancerCnt = dancers.length;
    for (let i = 0; i < dancerCnt; i++) {    
      let minDistSoFar = Number.MAX_VALUE;
      let minNodeSoFar;  
      const dancer = dancers[i];
      const pairMap = new Map();
      if (pairMap.has(dancer)) {
        continue;
      }
      for (let j = 0; j < dancerCnt; j++) {
        const dancerPair = dancers[j];
        if (dancer === dancerPair || pairMap.has(dancerPair)) {
          continue;
        }
        let distanceBetweenPairs = Stage.distance(dancer.left, dancerPair.left, dancer.top, dancerPair.top);
        if (distanceBetweenPairs < minDistSoFar) {
          minDistSoFar = distanceBetweenPairs;
          minNodeSoFar = dancerPair;
        }
      }
      pairMap.set(dancer, true);
      if (minNodeSoFar !== undefined) {
        pairMap.set(minNodeSoFar, true);
        Stage.pairDancers(dancer, minNodeSoFar);
      }
    }
  }

  lineUp() {
    const dancerCnt = dancers.length;
    const gap = $('#stage').width() / (dancerCnt + 1);
    let hpos = gap;
    const vpos = $('#stage').height() * 3 / 4;
    for (let i = 0; i < dancerCnt; i++) {
      const dancer = dancers[i];
      
      dancer.setPosition(vpos, hpos);
      hpos += gap;
    }
  }

  static distance(x1, x2, y1, y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  }

  static pairDancers(dancer1, dancer2) {
    let newX = (dancer1.left + dancer2.left) / 2;
    let newY = (dancer1.top + dancer2.top) / 2;
    dancer1.setPosition(newY, newX - 20);
    dancer2.setPosition(newY, newX + 20);
  }

  static setStage() {
    for (let i = 0; i < stages.length; i++) {
      if ($('#stageSelect').val() === stages[i].stageName) {
        currentDanceFloor = stages[i];
        $('#stage').css('background-image', currentDanceFloor.imgUrl);
        $('#stage').css('background-position', 'center bottom');
        $('#stage').css('background-size', 'cover');
      }
    }
  }
};