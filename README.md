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

# 



