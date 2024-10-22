(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{909:function(s,t,n){"use strict";n.r(t);var a=n(14),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"회사"}},[s._v("회사")]),s._v(" "),t("p",[s._v("오늘은 비가 왔는데 새벽에 또 늦게 자서 피곤했다. (반차쓰고 싶었는데 참았다)"),t("br"),s._v("\n오늘도 변함없이 코드 리펙토링 하면서 점점 타입스크립트가 익숙해지고 있다."),t("br"),s._v("\n리펙토링을 진행하면서 인상깊었던 사례 두 가지만 작성해볼려고한다.")]),s._v(" "),t("p",[s._v("내일쯤이면 기존 프로젝트 리펙토링은 거의 다 끝날 예정이다."),t("br"),s._v("\n물론 리펙토링한 코드도 또 리펙토링이 가능 할 부분이 있어서 집에서 할 예정이다."),t("br"),s._v("\n그리고 오늘 점심도 가위바위보 해서 커피빵 이겨서 공짜 커피 먹었다. ㅋㅋㅋㅋㅋ")]),s._v(" "),t("h3",{attrs:{id:"resolve-alias"}},[s._v("resolve alias @")]),s._v(" "),t("p",[s._v("평상시에 번들러 관련 alias 를 @ 로 설정해서 개발을 하는데"),t("br"),s._v("\n가끔 다른 사람들 코드들을 봤을 때 ~ 로 사용하는 사람들도 종종 봤다.")]),s._v(" "),t("p",[s._v("솔직히 @ 를 많이 사용해서 익숙해서 좀 더 편하게 보이는거 같기도하다."),t("br"),s._v("\n본론으로 들어가선 오늘 리펙토링하면서 @ => ~ 로 전부 변경했다."),t("br"),s._v("\n이유는 라이브러리와 이름이 겹치는 경우가 있다!")]),s._v(" "),t("p",[s._v("node_modules 에서 설치한 패키지들을 볼 수 있는데 @types 같은 맨 앞에 @ 가 붙은 경우가 종종 있다."),t("br"),s._v("\nTypescript 를 프로젝트에 점진적 적용을 진행하다보니 타입을 모아두는 폴더를 만들었는데"),t("br"),s._v("\n@types 라고 alias 를 추가해봤더니 node_modules @types 와 IDE 상으로 충돌이 일어났다.")]),s._v(" "),t("p",[s._v("즉 @ 를 사용한다는건 node_modules 에 있는것과 충돌에 대한 여지를 줄 가능성이 있다."),t("br"),s._v("\n그렇기에 @ 에서 ~ 로 전부 변경해서 충돌에 대한 가능성을 다 없애버렸다."),t("br"),s._v("\n무조건 이런 방법이 좋다. 라는건 없지만 미리 미리 방지하는 차원이다.")]),s._v(" "),t("h3",{attrs:{id:"axios-declare-module"}},[s._v("axios declare module")]),s._v(" "),t("p",[s._v("타입스크립트를 사용하면 타입을 기준으로 자동완성이 되는게 큰 장점이다."),t("br"),s._v("\n하지만 AXIOS 에서 응답 반환값은 무조건 "),t("code",[s._v("<AxiosReponse>")]),s._v(" 라는 타입을 통해서 지나간다."),t("br"),s._v("\n결국엔 "),t("strong",[s._v("A")]),s._v(" 라는 타입을 반환을 하고 싶어도 무조건 "),t("strong",[t("AxiosReponse")],1),s._v(" 로 한번 랩핑된다.")]),s._v(" "),t("p",[s._v("그러면 코드에서는 "),t("strong",[t("AxiosResponse")],1),s._v(" 타입안에 "),t("strong",[s._v("A")]),s._v(" 타입을 넣어서 일일이 가져오는 방법도 있다."),t("br"),s._v("\n하지만 코드를 작성할 때 불편하다고 느껴서 나이스 하다는 방법은 아니였고 인터셉터에서도 문제가 생긴다."),t("br"),s._v("\n문제에 원인은 인터셉터에서 코드를 가공하고 응답 값만 받고 싶어도 "),t("strong",[t("AxiosResponse")],1),s._v(" 로 강제한다는것"),t("br"),s._v("\n실제 코드 자체에서는 동작을 하지만 개발할 떄는 자동완성이 먹히지 않아 극도의 불편함이 느껴진다.")]),s._v(" "),t("div",{staticClass:"language-typescript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" axios "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"axios"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" axiosInstance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" baseURL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backendURL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naxiosInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interceptors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("이 문제를 해결할 수 있는 방법이 바로 타입스크립트에 declare module 을 사용하는거다."),t("br"),s._v("\n위에 저 코드는 일반 자바스크립트에서는 문제가 되지 않지만 타입스크립트에서만 발생한다."),t("br"),s._v("\n그리고 흔히 자주 사용하는 패턴이기에 검색해보니껀 2년전 "),t("a",{attrs:{href:"https://github.com/axios/axios/issues/1510",target:"_blank",rel:"noopener noreferrer"}},[s._v("axios issue"),t("OutboundLink")],1),s._v(" 가 있었다!")]),s._v(" "),t("p",[s._v("최종적으론 기존 axios 타입 설정을 덮어쓰기해서 "),t("strong",[t("AxiosResponse")],1),s._v(" 로 강제되어 있던 타입을 제네릭으로 편의성을 올렸다."),t("br"),s._v("\n그래서 이제 제네릭만 넘기면 리턴값으로 알아서 타입스크립트 타입 추론을 통해 자동완성이 의도대로 동작시킬 수 있게됐다.")]),s._v(" "),t("h2",{attrs:{id:"헬스"}},[s._v("헬스")]),s._v(" "),t("p",[s._v("화요일에 트레이너분이 운동 기구 사용법을 가르쳐줘서 등에 자극을 잘 받았다."),t("br"),s._v("\n목요일에 한 번더 다른 근육 부위로 가르쳐주신다고 해서 오늘은 어깨했다.")]),s._v(" "),t("p",[s._v("가벼운 봉을 들고 위에 올렸다 내렸다 반복하는거와"),t("br"),s._v("\n가벼운 덤벨을 양손으로 하나 씩 잡고 어깨 높이까지 팔을 벌리는걸 했다."),t("br"),s._v("\n자세 잡아주시면서 완벽하게 따라한건 아니지만 운동하지만 어깨만 아팠다.")]),s._v(" "),t("p",[s._v("그렇게 운동 끝나고 PT 관련 강요는 아니고 설명은 해주셨는데"),t("br"),s._v("\n운동자체가 배우는거 자체가 나쁘지 않은거 같아서 했다.")]),s._v(" "),t("p",[s._v("몸의 균형과 체지방을 빼는걸 목표로 현재는 C 에서 I 로 가는게 목표다."),t("br"),s._v("\n조건자체도 부담스럽진 않아서 20번 130만원 2개월 연장 그렇게 하기로 했다."),t("br"),s._v("\n그리고 식사 관련해서도 물어보고, 운동 루틴 같은것도 다 물어보고 러닝 40분 뛰고 집에 갔다.")]),s._v(" "),t("h2",{attrs:{id:"집"}},[s._v("집")]),s._v(" "),t("p",[s._v("일단 헬스자체가 식단을 편하게 하는데 인스턴스 먹을바엔 깨끗한 식단으로 먹으라 하셔서"),t("br"),s._v("\n딱히 먹고 싶은것도 없어서 편의점에서 닭가슴살 2개 구매해서 먹었다. (오뚜기 밥은 없드라)"),t("br"),s._v("\n그리고 침대에서 조금 누워있다가 웹툰 보고 샤워하고 일지작성하고 잤다.")]),s._v(" "),t("h2",{attrs:{id:"하루-평가"}},[s._v("하루 평가")]),s._v(" "),t("p",[s._v("회사에서 리펙토링을 하면서 새로 겪은 문제들은 좋은 경험이었고 코딩 룰이 조금씩 생기고 있다!"),t("br"),s._v("\n헬스는 웨이트하고 인터벌 러닝했다. 운동하는 자세를 배워서 사용하는게 좀 좋은거 같다."),t("br"),s._v("\n단 러닝은 달리기 할 때 숨을 헐떡이는거보단 신발 때문인지 다리의 근육이 좀 힘들다.")]),s._v(" "),t("p",[s._v("집에서도 코딩 관련해서 좀 더 공부하려다가 피곤해서 못했다."),t("br"),s._v("\n생각해보면 롱패딩 드라이 맡긴거 가져가야되는데 시간이 참 난감하다."),t("br"),s._v("\n헬스장에서 어깨부위로 처음 웨이트를 해서 내일 또 근육통이 심하게 올까 싶기도 하다.")]),s._v(" "),t("p",[s._v("주말에는 회사 프로젝트 리펙토링하는거 작업 또는 글 정리하거나,"),t("br"),s._v("\n로또 프로젝트 및 책이나 좀 읽어야겠다 싶다.")])])}),[],!1,null,null,null);t.default=r.exports}}]);