
function forLoop(array){
  for(int i=0; i<25; i++){
    array.push(`I am ${i} strange loop${1 === 0 ? '':'s'}`)
  }
  return array;
}
