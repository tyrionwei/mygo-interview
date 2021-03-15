/**
 * Please use TypeScript/JS to answer question
 * Welcome to answer with unit testing code if you can
 *
 * After you finish coding, please push to your GitHub account and share the link with us.
 */
 
// Please write a function to reverse the following nested input value into output value
 

var reverseObject = (input) => {
  let inputStr
  let originArr, reverseArr, targetArr
  let output
  //input to string
  inputStr = JSON.stringify(input);
  //find out words and turn into array
  originArr = inputStr.split(/\W+/).filter(item => item);
  //reverse
  reverseArr = originArr.reverse()
  //take words out and turn into array
  targetArr = inputStr.split(/\w+/)
  //combine two arrays
  reverseArr.reduce((accumulator, item, idx, array) => {
    targetArr.splice(idx*2+1, 0, item)
  },
  0
  )
  //turn target to string then output object
  output = JSON.parse(targetArr.join(''))
  return output
}

module.exports = reverseObject


/*
let array = [];
let output = {};

var getKey = (key) => {
  if(Object.keys(key)[0] !== "0"){
    array.push(Object.keys(key)[0])
    getKey(key[Object.keys(key)]);
  }else{
    array.push(key[0])
  }
}

getKey(inputValue)


var insertKey = (arr) => {
  let jsonString = '{'
  for(let i=0;i<arr.length-1;i++){
    jsonString += `"${arr[i]}":`;
    if(arr[i+2]) jsonString+="{"
  }
  jsonString += `"${arr[arr.length-1]}"`
  for(let i=0;i<arr.length-1;i++){
    jsonString += `}`;
  }
}

insertKey(array)
*/