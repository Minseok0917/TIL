# TIL 

## Why ?
2021년 회사 다니면서 정신없게 보냈지만 그럴듯한 **성장 기록**이 없었다.     
2022년 새해를 시작하면서 공부한 기록을 남기고자 시작한 프로젝트이다.

## Project
시작일 : `2022.01.13`    
종료일 : `2022.01.21`

### Project Setting ( 01.13 )
처음에는 TIL 을 만들기 위해서 막 찾아보다      
편의성을 위해 markdown 으로 작성하기 위해 플러그인을 찾고 있었다.     
그러다가 고등학생때 대회 선생님이 쓰는 TIL 를 보았다.     
[VuePress](https://vuepress.vuejs.org/) 를 사용해서 만든 TIL 페이지 였다.    
선생님 TIL에 만든 기록이 있어서 [참고](https://junilhwang.github.io/TIL/Vuepress/Starter/)하여 제작하였다.


#### plugin 추가
찾아보다가 여러가지 [플러그인](https://vuepress-community.netlify.app/en/)이 있어서 사용할 거만 추가하였다.
- `vuepress-plugin-clean-urls` : URL 의 마지막에 `/` 를 붙일수 있다.
- `vuepress-plugin-container` : 예쁜 컨테이너 라인을 만들어 줄 수 있다.
- `vuepress-plugin-smooth-scroll` : 앵커 클릭 시 스크롤이 부드럽게 내려간다.

#### composition-api 추가
VuePress 는 vue2 로 제작되었다.         
vue2 에서 composition-api 을 사용할려고 추가하였다 `거의 안쓴거 같다.`     

#### 사이드바 가져오기
사이드바는 VuePress에 기본테마에 지원한다.       
하지만 직접 구현하고 싶어서 기본테마에 사이드바를 가져오는 코드만 가져왔다.    
경로 : `node_modules/@vuepress/theme-default/utils/index.js`
``` vue
<template>
</template>
<script>
	import { resolveSidebarItems } from '../utils';
	export default{
		created(){
			const items = resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
			);
			console.log(items);
		}
	}
</script>
```

### Auto Sidebar ( 01.14 ~ 01.15 ) 
VuePress 에서는 `config.js` 파일에 sidebar 에 나올 데이터 주소를 추가해주어야 한다.     
필자는 귀찮기에 sidebar.js 를 만들어서 폴더와 파일을 `config.js` sidebar 구조에 맞게 가져왔다.

### Anchor List ( 01.17 )
markdown 에서 제목들을 가져오려면 `config.js` 의 `themeConfig` 부분에      
`displayAllHeaders:true` 옵션을 넣어주어야 한다.      
가져오는 제목은 `h2` `h3` 이다      
다른 제목을 추가하고 싶으면 [plugin](https://vuepress-community.netlify.app/en/) 인가 [options](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar) 이 존재 했었다. 

### Scroll Issue ( 01.17 )
fixed header 가 있지만 Anchor를 클릭해서 스크롤 이동하면 가려진다.     
해결방안은 css의 **scroll-padding-top** 옵션을 이용하는것이다.     
html 의 태그의 scroll-padding-top 값을 header height 값을 주면 잘 보인다.

### Add Font ( 01.18 )
- 영어 폰트 : Archivo
- 한글 폰트 : NotoSansKR
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
*{
	font-family: 'Archivo','Noto Sans KR', sans-serif;
}
```
### Scollbar.js 수정 ( 01.19 )
사이드 바 클릭 시 README 가 없으면 404 페이지로 이동해서      
자식요소에 제일 첫번째 위치로 이동하게 값을 바꿔줬다.

### Anchor Scroll 기능 ( 01.20 )
Achor 기능에 구현할 때 여러 고려사항이 있었다.
::: warning 고려사항
- router-link 로 태그를 넣을 시 component 가 리렌더링 되기 때문에 a 태그로 넣음
- header 가 mousewheel 을 내릴땐 위로 올라가기 때문에 클릭 때마다 scroll-padding-top 을 계산해줘야 한다.
- 선택된 Anchor Active 효과
- 스크롤 시 URL Anchor 가 자동으로 바뀌기 Anchor 클릭 이동 시 자동으로 바뀜    
  1. click 감시 변수 추가 
  2. scrollHandle 에 조건 추가
  3. scrollHandel 에 디바운싱 기능 추가
:::

### Sidebar UI 변경 ( 01.21 )
폴더안에 파일이 하나만 있을 경우 폴더 만 클릭해도 들어갈 수 있기 떄문에    
파일이 하나만 있을 경우 폴더만 보이게 설정했다.

### gh-pages 자동 배포 ( 01.21 )
구글링 해서 자동 배포 사례 한국어로 정리해둔 [블로그](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-actions/#workflows-%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF-%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC)를 보고 했다     
::: tip 자동 배포 방법    
- 배포할 리포지토리에 **`gh-pages`** 브랜치 생성
- `.github/workflows/main.yml` 작성
- `main.yml` 작성
``` yml
	name: Build and Deploy
	on: [push]
	jobs:
	  build-and-deploy:
	    runs-on: ubuntu-latest
	    steps:
	    - name: Checkout
	      uses: actions/checkout@main
	 
	    - name: Vuepress deploy
	      uses: jenkey2011/vuepress-deploy@1.0.1
	      env:
	        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
	        BUILD_SCRIPT: yarn && yarn build
	        TARGET_BRANCH: gh-pages
	        BUILD_DIR: src/.vuepress/dist  
 ```
 - `Github Profile Menu Settings 클릭`
 - `Developer settings 클릭`
 - `Personal access tokens 을 통해 TOKEN 을 만들어 준다.`       
    체크박스에 workflow 라고 있는데 이거 클릭했었음 `꼭 해야 되는지는 모른다`        
    **성공 후 key 값을 복사해야 한다**
 - `배포할 리포지토리로 들어가고 Settings 를 클릭한다.`
 - `메뉴 Secrets 클릭한다. `
 - **`New repository secret`** 버튼을 클릭한다.     
   Name은 `ACCESS_TOKEN` 이라고 적고       
   Value는 복사해둔 Key값을 넣는다.
:::


## 회고 
TIL 을 빨리 작성하고 싶었기 때문에 **완성도** 가 낮다.     
어느정도 글 쓰면서 천천히 **완성도**를 높일 생각이다.

아직 실력이 미숙하기 때문에 배우는 속도도 너무 느린거 같다.    

다음번엔 문제를 해결하기전에 정리를 하면서,   
프로젝트에 완성도와 기능 하나 하나의 퀼리티를 높게 할 거다.

#### 1차 개발 끝 
<p align="center">
	<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fminseok0917.github.io%2FTIL%2Fproject%2FTIL&count_bg=%23229BC0&title_bg=%23495470&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</p>
