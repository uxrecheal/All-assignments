function testGreatetThan(val){
  if (val>100){
    return "over 100";
  }
  if (val>10){
   return "over 10";
}
return "10 or under";
}
console.log(testGreatetThan(10))

function squareNumber(number){
  return number* number
}
console.log(squareNumber(2))

// */arrow function
var squareNumber = (number) => number * number;
console.log(squareNumber(2))

//  QT 2


function averageNumbers (list){
  let total=0
  for(let element of list){
    total+=element
  }
  return total/list.length
}
console.log(averageNumbers( [1,2,3,4,5,6,7] ))

var averageArrow = (list)=>list.reduce((sum,val)=>sum+val,0)/list.length
console.log(averageArrow([1,2,3,4,5,6,7]))

var [array]=[]



function checkIfEvenOrOdd(number){
  if(number %2===0) {
  return "even"
  }else{
    return "odd"
  }
}

console.log(checkIfEvenOrOdd(6))
console.log(checkIfEvenOrOdd(9))

const checkEvenOrOdd=(number)=>(number %2===0)?"even":"odd"

console.log(checkEvenOrOdd(6))
console.log(checkEvenOrOdd(9))


function checkAreaOfARectangle(length,width){
return length*width
}
console.log(checkAreaOfARectangle(6,4))

const areaOfARectangle=(length,width)=>(length*width)

console.log(areaOfARectangle(9,4))

function cigarParty(cigars, isWeekend){
  if (isWeekend){
    return cigars >=40
  }
  else{
    return cigars >=40 && cigars <=60
  }
}

console.log(cigarParty(30, false)) 
console.log(cigarParty(50, false))
console.log(cigarParty(70, true))


let user = {
  school: "STS",
  cohort: 3,
  class: "FrontendIvory"
};

let codes = {
  "49": "Germany",
  "+41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}






