(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{1102:function(r,t,n){"use strict";n.r(t);var v=n(14),_=Object(v.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"회사"}},[r._v("회사")]),r._v(" "),t("p",[r._v("아침에 일어났는데 졸려서 5분 시전하다가 한참을 더 자서 오전반차를 쓰고 푹 자고 일어났다."),t("br"),r._v("\n푹자고 일어나서 회사에 밀크티 구매하고 걸어가서 코딩했는데 평상시보다 더 집중이 잘 됐던거 같았다.")]),r._v(" "),t("p",[r._v("오늘은 회사에서 PDF Viewer의 웹 워커를 붙이는 작업을 했었는데 문제가 있었다."),t("br"),r._v("\n단순하게 적용하는건 쉬웠는데 특이점이 있었다면 캔버스를 OffscreenCanvas로 Worker에 넘겨줄 수 있는데 해당 Worker에서는 getContext를 하나 밖에 사용할 수 없었다."),t("br"),r._v("\n그리고 이미지 렌더링이 서브 쓰레드에서 진행됐다고 해도, 문제점이 왠지는 모르겠지만 스크롤을 내릴경우 이전에 렌더링했던 PDF 화면이 자동으로 초기화가 되기도 했다.")]),r._v(" "),t("p",[r._v("그외에 기존에는 캔버스 이미지를 기준으로 drawImage로 캐싱처리를 했었는데 Worker자체에서는 캔버스에 접근이 불가능해서 base64 형식으로 이미지를 뽑는게 불가능했었고,"),t("br"),r._v("\nbitmap으로 뽑아야된다고 했었는데 또 다른 문제점은 얘도 동일하게 스크롤을 내릴경우 이전 렌더링한 PDF들이 초기화되는 동일한 이슈가 있기도 했다."),t("br"),r._v("\npdf 페이지의 미리보기 같은 기능도 문제점이 이미지로 추출해서 캐싱 시켜놔야는데 bitmap이다보니 2단 캐싱구조를 갖게되어 어려움을 겪었다.")]),r._v(" "),t("p",[r._v("현재로썬 빠르게 개발해서 무언가를 보여줘야하는 상황인데 워커 같은 경우에는 서브쓰레드에 캔버스 데이터를 넘겼으면 이후 메인스레드에서 콘텍스트 접근이 안됐던게 상당히 큰 불편함을 줬다."),t("br"),r._v("\n그래서 메인쓰레드에서 간단하게 렌더링과 캐싱 구조만 구현하고 간단한 렌더링 뷰어를 먼저 구축하고 나중에 세부적으로 따로 구현하기로 했다.")]),r._v(" "),t("h2",{attrs:{id:"저녁"}},[r._v("저녁")]),r._v(" "),t("p",[r._v("저녁은 하루덮밥에서 사케통과 새우튀김을 시켜먹었다. 원래는 서브음식을 시키진 않는데 어제 먹었던 가라아게가 맛있었던 기억이 있어서, 다른 것도 시켜봤었다."),t("br"),r._v("\n일단 사케동 같은 경우에는 연어가 많긴했는데 약간 예전에 그 맛이 아니긴했는데, 그럼에도 맛있는건 똑같긴했다. 개인적으로는 새우튀김보단 가라아게가 더 맛있는거 같다.")]),r._v(" "),t("h2",{attrs:{id:"집"}},[r._v("집")]),r._v(" "),t("p",[r._v("집에서는 아레나 한 판해서 이즈리얼로 1등하고, 이후 회사애서 작업해야 했던 부분 내일까지 구현해야되는 영역 부분을 차근차근 구현했다."),t("br"),r._v("\nPDF 미리보기 이미지와 스크롤을 내렸을때 현재 페이지가 어떤 페이지인지 구분해주는걸 직접 구현하기도 했다. InterSectionObserver로 처음에는 시도했었는데 잘 안됐다."),t("br"),r._v("\n그외에는 화면 디자인 조금 변경하고 페이지 번호 입력하면 이동하는것과 그런 기능들 구현하고 잤다.\n오늘은 따로 학교가 수학여행, 수련회를 간다고해서 따로 학교는 가지 않고 집으로 곧장 갔다.")])])}),[],!1,null,null,null);t.default=_.exports}}]);