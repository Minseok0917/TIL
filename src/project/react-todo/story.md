# Story

## Project Setting 
프로젝트는 React 의 CRA를 사용해서 만들었다.       
Webpack, Eslint, Prettier, PostCss 셋팅을 하고 싶었지만,     
Vue 랑 셋팅방법에 차이가 있어 나중에 하기로 했다.

## Create Calendar
달력을 구현하기 위해선 3가지가 값이 필요하다.      
1. *월 첫번째 요일을 숫자 `0~6` 으로 가져와야 한다*        
	일:0,월:1 ~ 토 : 6
2. *이전달에 마지막 일을 가져와야 한다*
3. *월 마지막 일을 가져와야 한다*


|2022.01|일|월|화|수|목|금|토|
|-|-|-|-|-|-|-|-|
|$row1|26|27|28|29|30|31|1|
|$row2|2|3|4|5|6|7|8|
|$row3|9|10|11|12|13|14|15|
|$row4|16|17|18|19|20|21|22|
|$row5|23|24|25|26|27|28|29|
|$row6|30|31|1|2|3|4|5|

`$row1`의 이전달 26부터 31일까지의 값을 구하려면 1,2번의 값이 필요하다.       
2022.01 은 1번의 값은 6이고, 2번의 값은 31이다.       
배열에 공간을 6개 만들고 map을 써서 컴포넌트에 텍스트로`2번 - index` 하고 `reverse`하면 된다.      
```js
/*
	monthFirstDayOfWeekNumber 가 1이고,
	prevMonthLastDay 가 2이다
*/
const prevMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay}) => {
	// { prevMonthLastDay-monthFirstDayOfWeekNumber+idx+1  } 이렇게 써도 되고 reverse 를 빼면 된다.
	return Array(monthFirstDayOfWeekNumber).fill().map( (_,idx) => (
		<div className="body item prev-month" key={idx}>
			{prevMonthLastDay-idx}
		</div>
	)).reverse();
};
```

|2022.01|일|월|화|수|목|금|토|
|-|-|-|-|-|-|-|-|
|$row1|||||||1|

단 이전달의 일을 보여주지 않을꺼면 1번만 있으면 가능하다.

```js
// monthFirstDayOfWeekNumber 가 1이다,
// html 만 넣어주고 텍스트를 안넣어주면 된다.
const prevMonthBlock = ({monthFirstDayOfWeekNumber}) => {
	return Array(monthFirstDayOfWeekNumber).fill().map( (_,idx) => (
		<div className="body item prev-month" key={idx}></div>
	))
};
```

|2022.01|일|월|화|수|목|금|토|
|-|-|-|-|-|-|-|-|
|$row1|||||||1|
|$row2|2|3|4|5|6|7|8|
|$row3|9|10|11|12|13|14|15|
|$row4|16|17|18|19|20|21|22|
|$row5|23|24|25|26|27|28|29|
|$row6|30|31|||||

3번의 값을 구하면 31이 나올거다    
배열에 공간을 31개 만들고 map을 써서 컴포넌트에 텍스트 `idx+1` 을 해주면 된다.
```js
// monthLastDay이 3번이다
const currentMonthBlock = ({monthLastDay}) => {
	return Array(monthLastDay).fill().map((_,idx)=>(
		<div className="body item current-month" key={idx}>
			{idx+1}
		</div>
	));
};
```
이렇게 하면 이전 달과 현재 달에 `일`을 전부 구할 수 있다.    
다음달은 엄청 쉽다.    
달력에 행 *($row)* 이 6개이고 요일이 7개 이기 때문에 매번 42개의 `일`이 들어간다.      
`42 - 1번값 - 3번값` 이렇게 하고 나온 값 만큼 배열 공간을 만들어서 for문을 돌려 `idx+1` 해주면 된다.

```js
const maxCount = 42;
const nextMonthBlock = ({monthFirstDayOfWeekNumber,monthLastDay}) => {
	const nextDayCount = maxDayCount-monthFirstDayOfWeekNumber-monthLastDay; // 42 - 1번값 - 3번값 
	return Array(nextDayCount).fill().map((_,idx)=>(
		<div className="body item next-month" key={idx}>
			{idx+1}
		</div>
	));
};
```
이걸로 달력을 만드는 기능의 개념은 끝났다.     
이 방법을 응용해서 달력을 이전달, 다음달 이런형식으로 바꿀수도 있다.     
자세히 알고 싶으면 react-todo 프로젝트의 코드를 보길 권한다.