# 2022.03.15

## 1.1 타입 실체 이해 `25p ~ 26p`
JS 의 타입은 매우 헷갈리는 주제이고, 강제변환이 매우 헷갈리는 주제이다.    
강제변환을 이해하기 전에 **값**과 **타입**에 대해 이해를 한다고 소개하는 페이지이다.


# 2022.03.16

## 1.2 내장 타입 `27p ~ 29p`

### 원시타입 : 하나의 값을 담고 있는것
- undefined
- null
- boolean
- number
- string
- symbol

### 참조 타입 : 여러개의 값을 담을 수 있는 것
- object

### null 에 대하여
null 의 타입은 **object** 이다.      
원래는 null 로 나와야 하지만 Javascript Type 버그다.       
수정하지 않는 이유는 변경시 기존 작동하는 소프트웨어가 멈출 수 있기 때문이다.         

null 은 **falsy** 한 원시값이지만 타입은 **object** 인 특별한 존재이다.
``` js
// null 검사 방법
const a = null;
(!a && typeof a === 'object' ); // true 
```

### typeof Function
typeof 의 Function 을 사용하면 **function** 이라고 나와서 최상위 내장 타입처럼 보이지만        
object의 **하위 타입** 이다. 

함수에 선언된 인자의 개수는 length 로 가져올 수 있다.

### typeof [1,2,3] 
배열 또한 Key 가 문자열인 객체와 반대로 숫자 인덱스가 존재하고,      
length 프로퍼티가 자동으로 관리되는 객체의 **하위 타입** 이다. 

## 1.2 읽고 궁금한 점

### null 과 undefined 의 차이 
- undefined 는 값이 비어 있는것이다. ( 변수에 값을 추가하지 않음 )
- null 은 값을 없다라는것을 표시할 때 쓰는 것이다. 

### Falsy 란?
Falsy 란 **거짓같은 값**이다.      
Javascript Engine 에서 Boolean 타입의 기준을 `Truthy(참 으로 평가되는 값)` 와 `Falsy(거짓으로 평가되는 값)` 으로 구분한다.       
즉 요약하자면 아래와 같다.
- Javascript Engine 에서 **Truthy** 기준으로 Boolean 값을 true 로 반환한다.
- Javascript Engine 에서 **Falsy** 기준으로 Boolean 값을 false 로 반환한다.


##### **Falsy** 가 뜨는 경우는 대표적인 경우는 아래 6가지이다.
- false
- 0
- ""
- null
- undefined
- NaN

- #### 참고 
	- [MDN](https://developer.mozilla.org/ko/docs/Glossary/Falsy)
	- [Blog](https://joooing.tistory.com/entry/%EA%B8%B0%EC%96%B5%ED%95%B4%EC%95%BC-%ED%95%A0-6%EA%B0%80%EC%A7%80-falsy-%EA%B0%92)

###  Symbol 이 무엇인가?
다른 [글](https://ko.javascript.info/symbol)을 찾아서 읽어보았는데     
어느정도 이해는 했으나 제대로 못해서 내일 다시 읽어볼 예정이다.      
찾은 글 사이트가 여러 개념이 잘 정리되어있는거 같아 훓어보면 도움이 될 거 같다.

###### 2022.03.17 작성 
#### 심볼은 유일한 식별자다.
1. 객체에 키 값으로 심볼을 넣을수 있다.        
2. 객체에 값을 가져올려면 키 값으로 심볼을 넣어야 한다.
3. 외부에선 객체 키로 넣은 심볼이 없으면 값을 호출할 수 없다. `유일성 때문에`

#### Symbols in a literal
1. 심볼 프로퍼티는 **hidden** 되어 있어서 `for .. in`, `Object.keys` 등으로 키를 가져올 수 없다. 
2. `Object assign` 또한 값에 접근할 수 없다.

#### Symbol.for
심볼은 **유일 값** 이지만 변수명은 다르더라도 같은 심볼 객체를 가르키는 경우가 존재한다. 
```js
// Symbol.for : 전역 심볼에서 존재하면 가져오고, 존재하지 않을 경우 생성한다.
const idA = Symbol.for('id');
const idB = Symbol.for('id');

idA === idB // true
```

#### Symbol.keyFor
`Symbol.for` 은 심볼을 가져오는 거면 **key** 를 가져오는 메소드도 존재한다.       
```js
const id = Symbol.for('id');
const localId = Symbol('id');

Symbol.keyFor(id); // id

/*
  전역 심볼이 아닌 인자가 넘어올 시 "undefined" 을 반환한다.
  전역심볼이 아닌 심볼은 description 키로 이름을 가져올 수 있다.
*/
Symbol.keyFor(localId);  // undefined
localId.description; // id 
```
#### 정리 
자주 쓰는건 정리 했지만  `System Simbol`, `Symbol interal` 같은 건         
책을 다 읽고 난 카테고리를 파서 정리하는게 좋을거 같다.


# 2022.03.17

## 1.3 값은 타입을 가진다. ( 29p ~ 36p )

**JS 는 변수의 타입을 지정하는게 아니다**
변수의 **값** 의 타입을 지정하는거다.

### 1.3.1 값이 없는 vs 선언되지 않은

**undefeind(값이 없는)** 와 **undeclared(선언되지 않은)** 는 다른 개념이다. 
- undefined : 변수에 값을 추가하지 않아서 값이 없을 경우 
- undecared : 변수의 선언 조차 되지 않은 경우

선언되지 않은 변수를 `type of` 를 사용했을 때 **undefined** 을 반환한다.       
이것이 Javascript 의 **Type Guard** 이다.     

### 1.3.2 선언되지 않은 변수

**Type Guard** 를 사용하여 변수의 존재여부를 확인 할 수 있다.    
```js
// 선언되지 않은 변수를 호출 했기 때문에 에러를 반환한다.
if( User ){ 
	console.log(User);
}

/*
  선언되지 않은 변수를 호출해도 undefined 로 반환하기 때문에
  존재여부를 체크할 수 있게 된다.
*/
if( typeof User !== 'undefined' ){ 
	console.log(User);
}
```

::: tip 주로 Javascript 의 폴리필을 구현할 때 쓰인다.
:::


