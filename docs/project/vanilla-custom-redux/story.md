# Vanilla 로 Redux 만들어 보기

## 목적
Redux 에 간단한 구조만 구현해보고 관련 패키지를 추가적으로 계속 구현하면서 공부할 예정이다.      
많이 사용하는 패키지 함수만 구현할 예정이다.

### 구현할 기능 
- createStore
	- getStore
	- dispatch

## 프로젝트 구조
- index.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>anilla-custom-redux</title>
</head>
<body>
	<script src="js/app.js" type="module"></script>
</body>
</html>
```
- js
	- app.js
	```js
	import './module/redux.js';
	```
	- module/redux.js
	```js
	export function createStore(reducer){
		console.log(reducer);
	}


	const initialState = {
		count:0
	};

	function countReducer(state=initialState,action){
		switch(action.type){
			case 'ADD_COUNT':
				console.log('ADD_COUNT 실행');
				return state;
			default:
				return state;
		}
	}
	createStore(countReducer);
	```
개발자 도구에서 console 창에 countReducer 함수가 뜬거면 셋팅이 된거다.        
createStore 기능을 구현하려면 Reducer 가 있어야 되기 때문에        
**countReducer** 이라는 예시 Reducer 를 미리 만들었다.


## 핵심 기능 구현
app.js
```js
import { createStore} from './module/redux.js';


const initialState = {
	count:0
};

function countReducer(state=initialState,action){
	switch(action.type){
		case 'ADD_COUNT':
			return { 
				...state,
				count : state.count+1
			};
		default:
			return state;
	}
}

function handle(){
	const state = store.getState();
	console.log(state.count);
}

const store = createStore(countReducer);
const unsubscribe = store.subscribe(handle);
store.dispatch({ type:"ADD_COUNT" }); // 1
unsubscribe();  // 구독 취소
store.dispatch({ type:"ADD_COUNT" });
console.log( store.getState().count ); // 2
```
module/redux.js
```js
export function createStore(reducer){
	let state;
	let subscribeHandle = false; // 구독 구분 
	state = reducer(state,{}); // 초기 status 데이터 저장

	const getState = () => state; // State 값 가져오기 
	const subscribe = (handle) => { // 구독 기능 추가 
		subscribeHandle = handle;
		return () => subscribeHandle = false; // 구독 취소 
	};
	const dispatch = (action) => { // Action 전송
		state = reducer(state,action);
		subscribeHandle && subscribeHandle();
	}
	return {
		dispatch,
		getState,
		subscribe
	}
}
```
간단하게 `dispatch`, `getState`, `subsribe` 기능을 구현하였다.
 
## 참고

### Redux Package
- [Redux 공식문서](https://ko.redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### Github
[Github Repository Link](https://github.com/Minseok0917/vanilla-custom-redux)