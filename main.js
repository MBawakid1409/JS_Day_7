console.log('#####################################################');
console.log('Week 2 - Day 3')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');



//The Homework & Activities


const arr1 = ['Homba', 'Gomba', 'Domba']
const arr2 = [20, 45, 10, 9, 4]


// function recieve array and return this array after adding new text 
const function1 = arr => {
  arr.push('Bonga');
  return arr1;
}
function1(arr1);
console.log(arr1)


// function recieve array and return this array after deleting the last element
const function2 = arr => {
  arr.pop();
  return arr1;
}
function2(arr1);
console.log(arr1)


// Yes or No if element available in our array
const function3 = () => {
  if (arr1.indexOf("Gomba") !== -1) {
    return "Yes"
  } else {
    return "No"
  }
}
console.log(function3(arr1))


// function recieve array has numbers and returned this array after multiplying each element by 2
const function4 = () => {
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 2;
  }
}
function4(arr2);
console.log(arr2)


// function recieve string with space between them and and returned it as array 
let string1 = "How are you?"
const function5 = () => {
  string1 = string1.split(" ");
  return string1;
}
function5(string1)
console.log(string1)
