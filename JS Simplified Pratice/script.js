// function getPhoneNumber(s) {
//   const numbers = {
//       zero: 0,
//       one: 1,
//       two: 2,
//       three: 3,
//       four: 4,
//       five: 5,
//       six: 6,
//       seven: 7,
//       eight: 8,
//       nine: 9,
//       double: 'double',
//       triple: 'triple'
//   }
//   const stringArr = s.split(' ');
//   for (let i = 0; i < stringArr.length; i++) {
//     if(stringArr[i] == 'double') stringArr[i] = stringArr[i+1];
//     if(stringArr[i] == 'triple') {
//       stringArr[i] = stringArr[i+1];
//       stringArr.splice(i,0,stringArr[i+1])
//     }
    
//   }
//   const [a,b,c,d,e,f,g,h,i,j] = stringArr.map(s => numbers[`${s}`])
  
//   return `${a}${b}${c}${d}${e}${f}${g}${h}${i}${j}`
// }

// console.log(getPhoneNumber("one two three triple five double one two three"))

const person = {
  name: 'Kyle',
  age: 25,
  favouriteFood: 'Rice',
  address: {
    street: '123 Main St',
    city: 'Somewhere',
    zipcode: '55555'
  }
}

const {age, name} = person

console.log(name, age)