// Test Code for Short Circuit 
function func(value) {
    var str = value || '초기값';
    console.log(str);
}

func(); // 초기값
func('test'); // test

// == vs ===
var a = 3, b = ' 3 ', c = '3';  
  
console.log( a == b ); // true, 강제 형변환  
console.log( b == c ); // false  
console.log( a == c ); // true, 강제 형변환  
console.log( undefined == null ); // true, 강제 형변환  
console.log( a == Number(3) ); true

var a = 3, b = ' 3 ', c = '3';  
  
console.log( a === b ); // false
console.log( b === c ); // false  
console.log( a === c ); // false
console.log( undefined === null ); // false

console.log( null === null ); // true
console.log( undefined === undefined ); // true
console.log( NaN === NaN ); // false
console.log( +0 === -0 ); // true
