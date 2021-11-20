console.log('#####################################################');
console.log('Week 2 - Day 3')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');



// Exercises

const arr1 = ['Homba', 'Gomba', 'Domba']
const arr2 = [20, 45, 10, 9, 4]

// 1
// مثال بسيط على اللوب وإنقاص خمسة مع كل لفة
// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] = arr2[i] - 5
// }
// console.log(arr2)

// 2
// دالة تستقبل مصفوفة وتطبع كل العناصر بداخلها
function fun1(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
fun1(arr1)



// 3
// دالة تستقبل مصفوفة وتطبع رسالة ترحيب باسم كل طالب
function fun2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('Welcome '+arr[i])
  }
}
fun2(arr1)


// 4
// دالة تستفبل مصقوقة وتطبع العناصر التي تقبل القسمة على 3
let exer_3 = [17, 15, 8, 12, 7, 25, 24]
function fun3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      console.log(arr[i])
    }
  } 
}
fun3(exer_3);


// 5
// دالة تستقبل مصفوفة من نصوص وتطبع طول كل عنصر داخلها
console.log('## exercise 5 ##');
function fun4(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length)
  }
}
fun4(arr1)

// 6 
// تغيير قيمة عناصر داخل المصفوفة
console.log('## exercise 6 ##');
function fun5(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 'Wecome ' + arr[i]
  }
}
fun5(arr1)
console.log(arr1)


// ###################################################
// Array methods
// للمصفوفات دوال كثير لها فوائد مختلفة
// concat: لدمج مصفوفتين لتصبح مصفوفة جديدة
// reverse: لعكس عناصر المصفوفة نفسها دون انشاء مصفوفة
// includes: للبحث عن عنصر ما إن كان متواجد في تلك المصفوفة أم لا
// join: لإنشاء وإرجاع نص جديد يتكون من عناصر المصفوفة مفصولة بفاصلة او رمز آخر
// split: لتقسيم النص على عدة أقسام نصية مرتبة وتخزينها في مصفوفة جديدة
// ###################################################
let array_1 = ['Ali', 'Amr']
let array_2 = ['Homba', 'Gomba']

console.log('-- Concat method --')
let array_3 = array_1.concat(array_2)
console.log(array_3)
console.log('-- Reverse method --')
array_3.reverse()
console.log(array_3)
console.log('-- includes method --')
let output1 = array_1.includes('Amr')
let output2 = array_2.includes('Amr')
console.log(output1)
console.log(output2)
console.log('-- join method --')
let join1 = array_1.join()
// "Ali,Amr"
let join2 = array_2.join('')
// "HombaGomba"
let join3 = array_3.join(' # ')
// "Gomba # Homba # Amr # Ali"
let join4 = array_3.join('a')
// GombaaHombaaAmraAli

console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)

console.log('-- split method --')
let split1 = join1.split()
// [ 'Ali,Amr' ]
let split2 = join2.split('')
// [
//   'H', 'o', 'm', 'b',
//   'a', 'G', 'o', 'm',
//   'b', 'a'
// ]
let split3 = join3.split(' # ')
// [ 'Gomba', 'Homba', 'Amr', 'Ali' ]
let split4 = join3.split('a')
// [ 'Gomb', ' # Homb', ' # Amr # Ali' ]

console.log(split1)
console.log(split2)
console.log(split3)
console.log(split4)
// to check if value changed or not
console.log(array_3)

// console.clear()
// ##########################################################################

// Activities

let students_1 = ['Ahmad', 'Mohammad', 'Saeed', 'Omar']
let students_2 = ['Baraa', 'Salem', 'Hasan']

// 1
// دالة تستقبل مصفوفتين وتقوم بإرجاع دمج المصفوفتين معاً




// 2
// دالة تستقبل مصفوفة وتقوم بإرجاع عكسها



// 3
// دالة تستقبل مصفوفة وعنصر وتقوم بإرجاع إذا كان العنصر بداخل هذه المصفوفة أم لا




// 4
// دالة تستقبل مصفوفة وتقوم بإرجاع كل العناصر وبينهم ","










console.clear()

//The Homework
//Teacher Solutions


// 1
// دالة تستقبل مصفوفة وعنصر وتقوم بإرجاع هذه المصفوفة بعد إضافة هذا العنصر الجديد لها
function addToArray(array, newElem) {
  array.push(newElem)
  return array
}
addToArray([23, 22, 87], 25)
addToArray(['Mohammad', 22, 87], 25)
addToArray([23, "Sameer", 87], 25)








// 2
// دالة تستقبل مصفوفة وتقوم بإرجاع المصفوفة نفسها بعد حذف العنصر الأخير
function removeLastFromArray(array, newElem) {
  array.pop(newElem)
  return array
}
removeLastFromArray([23, 22, 87])
removeLastFromArray(['Mohammad', 22, 87])
removeLastFromArray([23, "Sameer", 87])








// 3
// دالة تستقبل مصفوفة وعنصر وتقوم بإرجاع "يس" إذا كان العنصر موجود فيها ونو إذا لم يكن موجود بهذه المصفوفة
function findInArray(array, element) {
  if (array.includes(element)){
    return 'YES'
  } else {
    return 'NO'
  }
}
findInArray([45, 89, 'Mohammad'], 48)
// NO
findInArray([45, 89, 'Mohammad'], "Mohammad")
// YES






// 4
// دالة تستقبل مصفوفة تتكون من أرقام وتقوم بإرجاع مصفوفة جديدة تتكون من ضرب كل عنصر برقم 2 مثال [5,2,7] تصير [10,4,14]
function makeNewArray(arrNums){
  let newArr=[]

  for (let i = 0; i < arrNums.length; i++) {
    // arrNums[i]
    newArr.push(arrNums[i] * 2);
  }
  return newArr
}
makeNewArray([12, 5, 3, 9])




// 5
// دالة تستقبل نص مكون من عدة كلمات بينهم فراغ وتقوم بإرجاع مصفوفة مكونة من هذا النص مثل "How are you?" تصبح ["How", "are", "you?"]
function convertStringToArray(text){
  return text.split(' ')
}
convertStringToArray("How are you?")
// ['How', 'are', 'you?']







// My Solutions
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
  if (arr1.indexOf("عنصر") !== -1) {
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
