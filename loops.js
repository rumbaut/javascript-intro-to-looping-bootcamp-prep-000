
function forLoop(array){
  for(var i=0; i<25; i++){
    array.push(`I am ${i} strange loop${1 === 0 ? '':'s'}`)
  }
  return array;
}
var array = [];
forLoop(array);
while(array.length > 0){
  console.log(array.pop());
}
