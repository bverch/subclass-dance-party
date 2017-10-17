window.pairUp = () => {
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
      let distanceBetweenPairs = distance(dancer.left, dancerPair.left, dancer.top, dancerPair.top);
      if (distanceBetweenPairs < minDistSoFar) {
        minDistSoFar = distanceBetweenPairs;
        minNodeSoFar = dancerPair;
      }
    }
    pairMap.set(dancer, true);
    if (minNodeSoFar !== undefined) {
      pairMap.set(minNodeSoFar, true);
      pairDancers(dancer, minNodeSoFar);
    }
    
    
  }
};

window.distance = function(x1, x2, y1, y2) {
  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
};

window.pairDancers = function(dancer1, dancer2) {
  let newX = (dancer1.left + dancer2.left) / 2;
  let newY = (dancer1.top + dancer2.top) / 2;
  dancer1.setPosition(newY, newX - 20);
  dancer2.setPosition(newY, newX + 20);
};