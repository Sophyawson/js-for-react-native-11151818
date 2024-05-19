//Task ONE(1)
function processArray(numbers){
const endresult = [];


for(let i=0; i<numbers.length; i++){
    const num = numbers[i];
    if(num % 2 === 0){

        endresult.push(Math.pow(num,2));
} else {
    endresult.push(Math.pow(num,3));
}
}

 return endresult;  

}


