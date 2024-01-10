// Test Code for Short Circuit 
function func(value) {
    var str = value || '초기값';
    console.log(str);
}

func(); // 초기값
func('test'); // test

