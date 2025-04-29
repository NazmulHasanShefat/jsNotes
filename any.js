// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function findpos(){
  for(let x of myNumbers){
    let pos = x;
    if(pos <= 0){
      console.log(pos);
    }
  }
}
findpos();