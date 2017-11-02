
function forLoop(array){
  for(var i=0; i<25; i++){
    array.push(`I am ${i} strange loop${1 === 0 ? '':'s'}`)
  }
  return array;
}

function whileLoop(n){
while (n-- > 0) {
  console.log(n);
}
return 'done';
}

function doWhileLoop(array){
  do{
    console.log(array);;
  }
  while(array-- > 0 && maybeTrue());
}
function maybeTrue(){
  return Math.random > 0.5;
}
var array = [];
forLoop(array);
while(array.length > 0){
  console.log(array.pop());
}
