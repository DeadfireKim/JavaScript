# JavaScript 기술 자료
JavaScript 개발자를 위한 깊이있는 기술자료를 제공하고자 생성되었습니다. 

## Short Circuit
논리연산자를 사용할 때 이미 값이 결정된 경우 추가 연산을 하지 않도록 하는 것을 말합니다.

예를 들면, `false && func()` 의 경우는 이미 왼쪽(false)값만을 가지고도 전체값이 false인 것을 알기 때문에 굳이 func()를 실행하지 않고 다음단계로 넘어가는 것이죠.

2가지가 있습니다.

- false && func() : 항상 false
- true || func() : 항상 true

이를 응용해서 초기값이 설정되지 않은 변수를 초기화하는 용도로 아래와 같이 사용하기도 합니다.

```javascript
function func(value) {
    var str = value || '초기값';
    console.log(str);
}

func(); // 초기값
func('test'); // test
```
> [!NOTE]
> JavaScript뿐만 아니라 C, Java, Python 같은 다른 언어들도 마찬가지로 작동합니다.

## = vs == vs ===
한 개(=)는 할당(Assignment)연산자입니다. 변수에 값을 넣을 때 사용하죠.

```
str = 100;
```

두 개(==, !=)는 동등연산자(loose equality)로서 서로 다른 타입의 값(value)을 비교할 때 사용합니다. 서로 타입이 다를 것이므로 강제 형변환을 한 후에 비교를 하게 되죠. (아래 예에서 b는 space+3+space 라는 점에 주의하자)

```javascript
var a = 3, b = ' 3 ', c = '3';  
  
console.log( a == b ); // true, 강제 형변환  
console.log( b == c ); // false  
console.log( a == c ); // true, 강제 형변환  
console.log( undefined == null ); // true, 강제 형변환  
console.log( a == Number(3) ); 
```

세 개(===, !==)는 일치연산자(strict equality)로 형변환없이 그대로 비교합니다. 

```javascript
var a = 3, b = ' 3 ', c = '3';  
  
console.log( a === b ); // false
console.log( b === c ); // false  
console.log( a === c ); // false
console.log( undefined === null ); // false
```

일치 연산자의 규칙은 아래와 같습니다.
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

## 끌어올리기 : Hoisting




