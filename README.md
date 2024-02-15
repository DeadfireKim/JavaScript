# JavaScript 기술 자료
JavaScript 개발자를 위한 깊이있는 기술자료를 제공하고자 생성되었다. 

## Short Circuit
논리연산자를 사용할 때 이미 값이 결정된 경우 추가 연산을 하지 않도록 하는 것을 말한다.

예를 들면, `false && func()` 의 경우는 이미 왼쪽(false)값만을 가지고도 전체값이 false인 것을 알기 때문에 굳이 func()를 실행하지 않고 다음단계로 넘어간다.

2가지가 있다.

- false && func() : 항상 false
- true || func() : 항상 true

이를 응용해서 초기값이 설정되지 않은 변수를 초기화하는 용도로 아래와 같이 사용하기도 한다.

```javascript
function func(value) {
    var str = value || '초기값';
    console.log(str);
}

func(); // 초기값
func('test'); // test
```
> [!NOTE]
> JavaScript뿐만 아니라 C, Java, Python 같은 다른 언어들도 마찬가지로 작동한다.

## = vs == vs ===
한 개(=)는 할당(Assignment)연산자이며, 변수에 값을 넣을 때 사용한다.

```
str = 100;
```

두 개(==, !=)는 동등연산자(loose equality)로서 서로 다른 타입의 값(value)을 비교할 때 사용한다. 서로 타입이 다를 것이므로 강제 형변환을 한 후에 비교를 하게 된다. (아래 예에서 b는 space+3+space 라는 점에 주의하자)

```javascript
var a = 3, b = ' 3 ', c = '3';  
  
console.log( a == b ); // true, 강제 형변환  
console.log( b == c ); // false  
console.log( a == c ); // true, 강제 형변환  
console.log( undefined == null ); // true, 강제 형변환  
console.log( a == Number(3) ); 
```

세 개(===, !==)는 일치연산자(strict equality)로 형변환없이 그대로 비교한다. 

```javascript
var a = 3, b = ' 3 ', c = '3';  
  
console.log( a === b ); // false
console.log( b === c ); // false  
console.log( a === c ); // false
console.log( undefined === null ); // false
```

일치 연산자의 규칙은 아래와 같다.
- 두 피연산자 타입이 다르면 false
- 두 피연산자가 객체(object)일 때는 동일한 객체만 true 
- null === null, undefined === undefined 는 true
- 피연산자가 하나라도 NaN이면 false
- 같은 타입, 같은 값일 때 true

```javascript
console.log( null === null ); // true
console.log( undefined === undefined ); // true
console.log( NaN === NaN ); // false
console.log( +0 === -0 ); // true
```

## Hoisting : 끌어올리기
인터프리터(interpreter)가 javascript구문을 읽어들여서 분석을 한 뒤에, 실행하기 직전에 변수선언(var)이나 함수선언(function)들을 소속 범위의 맨 앞으로 끌어올려서 우선 처리되는 것을 말한다.

아래의 예시처럼, 함수를 선언하기 전에 호출해도 에러가 발생하지 않는다. 이렇게 함수의 선언을 가장먼저 처리하는 것을 끌어올리기(Hoisting)라고 한다.
```javascript
func(); // 사용가능
function func(){ // 선처리됨
    ......
}
```

변수의 선언(var)도 동일하게 선행처리 된다고 볼수 있다. 물론 선언 및 초기화 이전에 사용되기 때문에 undefined값을 가지게 되서 특별한 의미가 있는 것은 아니니, 가급적 선언/초기화 해서 사용하는 것을 추천한다.
```javascript
console.log(bar); // 선언전에 사용가능, undefined
var bar = 100;
console.log(bar); // 100
```
> [!NOTE]
> C, Java 같은 언어에서는 변수를 선언전에 사용하면 에러가 발생한다. (컴파일 오류 발생) Hoisting은 함수 선언에만 해당한다고 보는 것이 좋다.

var 선언 이외에 let, const 선언은 끌어올려지지 않는다. var 선언 전에 호출되는 경우 undefined가 발생하지만, 블록 스코프 지역변수 선언인 let이나 const는 변수 선언 전에 호출되면 ReferenceError가 발생하게 된다.

```javascript
console.log(x); // 참조 에러
const x = 2;
```

그러나, 아래와 같은 할당(Assignment) 형태로 함수를 선언하는 구문은 끌어올려지지 않으므로 주의하자.
```javascript
func(); // TypeError: func is not a function
var func = function(){
    console.log("Hi");
}
```



