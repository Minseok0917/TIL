# React

## 간단 배경 ( 01.22 )
페이스북에서 만든 Javascript 라이브러리이다.          
주요 목적은 **"개발자가 UI를 만들때 일어나는 버그를 최소화 시키는 것"** 이라고 적혀있다.  
Github에 2013.05.29일 최초공개를 하였다.

### 참고
- [MDN React](https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [React release](https://github.com/facebook/react/blob/main/CHANGELOG.md)      

## 장단점 ( 01.23 )
가상돔은 나중에 새로운 페이지에 글을 쓸거다.      
장점도 단점이 될 수 있는 부분이 있기에 **개인**의 생각을 적었습니다.

### 장점
넓은 생태계를 형상하고 있어, 커뮤니티가 활발하고 정보를 찾기 편하다.         
가상돔에다가 diff 알고리즘을 추가하여 빠른 속도로 화면에 렌더링해준다.         
컴포넌트를 사용하여 코드의 **재사용성**과 **유지보수성**의 효과를 볼 수 있다.       

### 단점
다양한 방법으로 코드를 쓸 수 있기 때문에 러닝커브가 중간정도 되는거 같다. `코드 통일성`

## 소스코드 원리 파악 ( 01.24 )
React를 공부하기 위해서 공식문서에서 알려주는 React CRA 프로젝트를 뜯어보기로 했다.       
핵심코어들 분석하기 위해서 Node.js 에서 어떻게 코드가 흘러가는지 파악할 필요가 있었다.       
<br>
src/index.js 파일에서 node_module 에 있는 `react` `react-dom` 을 호출해주는 코드가 있다.        
~~*`<App />`을 감싸는 stickMode 는 그냥 지웠다*~~
``` javascript {1,2}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
**ReactDom 의 render 함수에 2개의 인자를 넘겨주고 있다.**        
1번째는 컴포넌트, 2번째는 Dom의 ID가 root 인 element 이다.           
render 함수를 보기전에 `./App` 에서 호출한 App 의 값이 무엇인지 알아야 한다.

``` javascript
// App.js
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
**return 으로 괄호치고 JSX 문법을 넣고 있다.**           
그러면 index.js 에서 저 괄호 값 그대로 나와야 하는게 아닌가?          
생각하고 index.js 에서 App 값을 콘솔을 찍어보았다.
```javascript
ƒ App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "App",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE…
```
**크롬 브라우저 개발자도구에서 확인해보니 괄호안에 JSX 문법이 아니였다!!!!**             
return 값에는 Object 구조로 되어있는걸 볼 수있다.

#### 정리
React 에선 component 를 import 할 때 Node.js 에서 JSX 문법이 Object 구조로 컴파일 된다.           
최상위 index.js 에서는 컴파일 데이터를 react-dom 의 render 함수에 1번째 인자로 넣어준다.           







<!-- 
## Reference
[risingstars](https://risingstars.js.org/2021/ko)     
[stateofjs](https://2020.stateofjs.com/ko-KR/) 
[react docs](https://ko.reactjs.org/docs/getting-started.html)
-->