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

//Task TWO(2)
function formatArrayStrings(strings,numbers) {
    for (let i = 0; i < strings.length; i++) {
        if (numbers[i] % 2 === 0) {
            
            strings[i] = strings[i].toUpperCase();
        } else {
           
            strings[i] = strings[i].toLowerCase();
        }
    }
    return strings;
}

const testOne = ["nhyira", "yooku", "agape", "cornelius", "evelyn", "catherine"];
const testTwo = [1, 2, 3, 4, 5, 6];

// To modify the names for test0ne;
const modifiedNames = formatArrayStrings([...testOne], testTwo); // Spread test into a new array

if (require.main === module) { 
    console.log( modifiedNames); 
  }

module.exports = { 
  testOne, 
  modifiedNames 
};




