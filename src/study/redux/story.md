# Redux

## Redux 란 
**Action** 이벤트를 사용해서 상태를 관리하고 업데이트하는 라이브러리이다.      
상태를 관리하는 중앙 저장소 역할을 한다.

## Redux 를 사용하는 경우
**전역** 상태를 관리할 때 사용한다.

## Redux 라이브러리 및 도구
Redux 는 작은 독립형 JS 라이브러리이다.

### React-Redux
[React-Redux](https://react-redux.js.org/) 는 React 구성요소가 Redux 저장소와 상호 작용할 수 있도록 하는 공식 패키지이다.
### Redux-Toolkit
[Redux Toolkit](https://redux-toolkit.js.org/) 은 Redux 로직을 작성할 때 권장되는 방식이다.         
앱을 빌드하는데 필수적이라고 생각되는 패키지와 기능이 포함되어 있다.        
작업을 단순화하고 일반적인 실수를 방지할 수 있다.
### Redux DevTools Extension 
[Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)은 저장소의 상태 변경 기록을 보여준다. 

## 특징
- **단방향 데이터 흐름** 이다.
- **Reducer 에서 Action 기반으로 데이터를 처리한다.**

## 정리 
1. Redux 상태관리 라이브러리이다.
2. React 에서 Redux 를 사용하려면 React-Redux 를 사용한다.
3. Redux-Toolkit 은 Redux 편하게 사용하기 위한 패키지이다.


## 참고
[KR Redux 핵심 - 개요 및 개념 ](https://ko.redux.js.org/tutorials/essentials/part-1-overview-concepts)