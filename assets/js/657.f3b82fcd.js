(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{894:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"포켓몬-슬립"}},[t._v("포켓몬 슬립")]),t._v(" "),a("p",[t._v("굿슬립에 아침에 일어나서 설레는 마음으로 리서치했는데"),a("br"),t._v("\n꾸벅꾸벅 타입떠서 실망했는데 이로치나와서 나쁘지 않네였다.")]),t._v(" "),a("h2",{attrs:{id:"점심-약속"}},[t._v("점심 약속")]),t._v(" "),a("p",[t._v("점심에 중학교 친구랑 밥 먹기로 했는데 무슨 일 생겼다고 안된다고 한다."),a("br"),t._v("\n그래서 자연스럽게 다음주 주말에 밥 먹는걸로 미뤄졌다.")]),t._v(" "),a("p",[t._v("배달 시키고 기다리긴 귀찮아서 밖에서 편의점 김밥 사먹었다.")]),t._v(" "),a("h2",{attrs:{id:"코딩"}},[t._v("코딩")]),t._v(" "),a("p",[t._v("최근 시작한 사이드 프로젝트가 있는데 그래픽 편집기이다."),a("br"),t._v("\nFEConf 에서 감명깊게 본 세션이있는데 공부하면서 할랬는데 세션 비공개됐다;;")]),t._v(" "),a("p",[t._v("쨋든 VanillaJS + Typescript 로 구현할려고 했는데 기술스텍을 바꾸기로 했다."),a("br"),t._v("\n메인은 React, Vue 을 사용하면 JSX 를 사용해서 HTML 문법을 사용하는데 vanillaJS 로 하면 귀찮다.")]),t._v(" "),a("p",[t._v("vanillaJS 로 어떻게 하면 좋은 구현이 될까? 이런 생각하고 가만히 앉아서 생각만 했는데"),a("br"),t._v("\n이런 경우에는 제일 편하게 사용하는 방법은 무엇일까? 이렇게 생각했는데"),a("br"),t._v("\n단순하게 JSX 마냥 작성해서 코드를 실행하는 방법이 좋다고 생각했다.")]),t._v(" "),a("p",[t._v("그래서 "),a("strong",[t._v("아!")]),t._v(" JSX 만든 사람도 이런 상황이였을까 생각하다가"),a("br"),t._v("\nJSX 를 구현했을 경우 이후 가상돔을 만들어서 렌더링 최적화도 해야되는데"),a("br"),t._v("\n프로젝트 자체가 캔버스가 메인이라서 이 요소에 시간을 많이 사용하는건 좋지 않다고 생각했다."),a("br"),t._v("\n그래서 최종적으론 리액트로 마이그레이션을 하기로 결정했다.")]),t._v(" "),a("h3",{attrs:{id:"요약"}},[t._v("요약")]),t._v(" "),a("p",[t._v("vanillaJS 코드로 렌더링을 편하게 할 수 없는 방법을 생각했음"),a("br"),t._v("\n대회에서 사용했던 유틸함수는 자식요소를 객체로 미리 추가할 수가 없음")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("element")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("attrs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_renderTooltipItem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tooltip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Tooltip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tooltip-item"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("textContent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tooltip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("자식 요소를 추가하는 방법은 append 를 사용하거나 innerHTML 을 사용하는 건데"),a("br"),t._v("\nappend 는 한 라인 더 작성해야하고, innerHTML 은 이벤트를 한 번에 못 주는 상황이 발생함 (둘 다 좀 불편함)")]),t._v(" "),a("p",[t._v("최종적으론 HTML 로 작성하고 변환해서 객체 구조로 자식요소도 추가 및 이벤트 등록 할 수 있게끔 중재 함수가 필요하다고 생각함"),a("br"),t._v("\n근데 이와 비슷한게 이미 있다고 떠오르고 JSX 그리고 그 객체 구조로 가상돔 돌려서 렌더링 최적화함."),a("br"),t._v("\n하지만 다 구현하기엔 프로젝트 그래픽 편집기 만드는데 집중을 못 할 거 같아서 리액트쓰기로 결심함")]),t._v(" "),a("h2",{attrs:{id:"저녁-약속"}},[t._v("저녁 약속")]),t._v(" "),a("p",[t._v("저녁약속에 만나는 인원은 작년에도 만날려고 했던 적이 있는데"),a("br"),t._v("\n그때 2명이 말도 안하고 점심 약속을 저녁으로 변경했었고"),a("br"),t._v("\n걔내한텐 나와의 약속이 별로 중요하지 않구나라고 생각했었음")]),t._v(" "),a("p",[t._v("그 당시에 울반 얘들이 저녁에 뭐 다같이 만나서 먹는다고 합류한다는 기억이있음"),a("br"),t._v("\n그리고 이후 대처가 가관이였음. 나였으면 이해를 했을것이다 하고 그러다가 어이가 없었는데 결국 사과를 받았음")]),t._v(" "),a("p",[t._v("근데 또 오늘 저녁이 파토가 났는데 이번엔 미리 전화해서 알려주더라"),a("br"),t._v("\n뭐 친구 한 명이 가족과 외식한다고 못 간다고 담주에 먹자고 함")]),t._v(" "),a("p",[t._v("결국엔 뭐 오늘 약속이 다 다음주로 이전되는 상황이 생겼음")]),t._v(" "),a("h2",{attrs:{id:"이후"}},[t._v("이후")]),t._v(" "),a("p",[t._v("앉아서 JS 책 잠깐 볼려는데 눈에 읽히지가 않아서 그냥 일지 쓰고 다음주 준비했다."),a("br"),t._v("\n러닝이나 공부 같은 것도 계획을 좀 세워서 실행해야겠다 싶다.")]),t._v(" "),a("p",[t._v("예전에 비해 좀 느슨해졌지만 저번주보단 더 성장한 일주일이였다.\n다음주는 이번주보다 더 성장한 일주일이 되어보자싶다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);