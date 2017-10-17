window.lineUp = () => {
  const dancerCnt = dancers.length;
  const gap = $('body').width() / (dancerCnt + 1);
  let hpos = gap - 27;
  let deltaV = $('body').height() * 3 / 4;
  let hCenter = $('body').width() / 2;
  for (let i = 0; i < dancerCnt; i++) {
    const dancer = dancers[i];
    var vpos = (Math.pow(hpos - hCenter, 2)) * -(0.0003) + deltaV;
    
    dancer.setPosition(vpos, hpos);
    hpos += gap;
  }
};