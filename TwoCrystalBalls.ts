export default function TwoCrystalBalls(breaks):number {
    
    const jmpAmount =Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for(;i<breaks.length;i+= jmpAmount){
        if(breaks[i]) break;
    }
    i -= jmpAmount;
    for(let j=0;j< jmpAmount && i < breaks.length;++j ,++i){
        if(breaks[i]) 
        return i ;
    }
    return  -1;
}
let list = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
console.log(list.length);
console.log(TwoCrystalBalls(list))