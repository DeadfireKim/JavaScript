/*
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

console.log( a === b ); // false
console.log( b === c ); // false  
console.log( a === c ); // false
console.log( undefined === null ); // false

console.log( null === null ); // true
console.log( undefined === undefined ); // true
console.log( NaN === NaN ); // false
console.log( +0 === -0 ); // true

// Hoisting : 변수 할당은 끌어올려지지 않음 
console.log(bar); // 선언전에 사용가능, undefined
var bar = 100;
console.log(bar);

console.log(x); // 참조 에러
const x = 2;

// Hoisting : 함수도 동일함 (선언만 가능)
func(); // TypeError: func is not a function
var func = function(){
    console.log("Hi");
}
*/
function x() {
    y = 1; // strict 모드에서는 Error=> ReferenceError: y is not defined
    var z = 2;
  }
  
x();

console.log(y); // 로그에 "1" 출력합니다.
console.log(z); // ReferenceError: z is not defined outside x를 출력합니다.


y=1;
console.log(y);