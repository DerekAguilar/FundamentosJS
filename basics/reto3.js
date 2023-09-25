const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
    const giftNum=packOfGifts.map(gift=>gift.length);
    const giftWeight=giftNum.reduce((a,b)=>a+b);
    const reinNum=reindeers.map(reindeer=>reindeer.length*2);
    const reinWeight=reinNum.reduce((a,b)=>a+b);
    console.log(packOfGifts);
    console.log(giftNum);
    console.log(giftWeight);
    console.log(reindeers);
    console.log(reinNum);
    console.log(reinWeight);

    return Math.floor(reinWeight/giftWeight);
  }