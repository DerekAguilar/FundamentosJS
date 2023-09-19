const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);

function wrapping(gifts) {
    const envueltos=[];
    for(const gift of gifts){
      const tapa='*'.repeat(gift.length+2);
      envueltos.push(`${tapa}\n*${gift}*\n${tapa}`);
    }
    return envueltos;
  }  