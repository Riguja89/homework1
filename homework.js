'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array=num.split("");
  var dec=0;
  
  for (let i = array.length-1; i >= 0; i--) {
    if (array[i]=='1'){
      dec= Math.pow(2,array.length-i-1)+dec;
    }
}
return dec;
}

function DecimalABinario(num) {
  // tu codigo aca
  var array=[];
  var i=0;
  while(num>=1){
    array[i]=String(num%2);
    num=Math.trunc(num/2);
    i++;
  }
   return (array.reverse()).join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}