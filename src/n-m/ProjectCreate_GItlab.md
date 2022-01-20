# Gitlab


## 프로젝트 생성/수정

:::tip 진행전 해야하는 것
Gitlab에서 프로젝트 또는 그룹 생성 관련된 유효성검사를 파악해야 한다.    
**Core Component 설계 및 구현**
:::


### 프로젝트 생성 모달

프로젝트 또는 그룹을 만들기 위해서 버튼이 필요하고	    
  클릭 시 모달 팝업이 보여진다.
#### 모달 팝업 컴포넌트의 종류
- `Create Gitlab Group`
- `Import Gitlab Group`
- `Create Gitlab Project`
- `Import Gitlab Project`
#### 모달 팝업 별 고려사항
::: warning import 모달 
- API 예외처리 
- API 로딩처리
- API 데이터 구조 FE 데이터 구조로 바꾸기 
- API 요청 성공 시 데이터 UI 보여주기
:::
::: warning 유효성 검사 UI
유효성 검사를 할 때 어떤 형식으로 UI 가 나와야 되는지 모름
:::
::: warning 그룹 안에 그룹 또는 프로젝트
유효성 검사를 위한 데이터 부모요소도 가져와서 자식요소 중복검사
:::

:::danger 흐름도
  - **컴포넌트 구조 설계**
  - **컴포넌트 생성 및 퍼블리싱**
  - **프론트 엔드 기능 추가**
  	- 모달 팝업 Open, Close 기능 구현
  	- 행 추가, 없을 때 예외 처리
  	- Input 유효성 검사
  	- 모달 완료 전 유효성 검사
:::

### 프로젝트 생성 UI 
프로젝트 생성 모달에서 성공적 유효성검사를 통과했을 때 추가되는 화면
#### 프로젝트 UI 모달 
##### 메인 컴포넌트 구현
- `Group Component`
- `GroupItem Component`
- `Project Component`
- `ProjectItem Component`
##### 수정 모달 컴포넌트
- `Update Gitlab Group ( Client )`
- `Update Gitlab Group ( Server, Import )`
- `Update Gitlab Project ( Client )`
- `Update Gitlab Project ( Server, Import )`
##### 삭제 모달 컴포넌트
- `Delete Gitlab Group ( Client )`
- `Delete Gitlab Group ( Server, Import )`
- `Delete Gitlab Project ( Client )`
- `Delete Gitlab Project ( Server, Import )`
- `Cancel Gitlab Group ( Server, Import )`
- `Cancel Gitlab Project ( Server, Import )`
#### 고려 사항
::: warning 프로젝트 Import
Import 했을 경우 현재 FE 데이터 구조의 맞게 API 데이터가 안 올수도 있다고 생각중
:::
::: warning 프로젝트 삭제 버튼
`Client` `Server, Import` 나눠져 있지만 Client 는 삭제가 바로 되지만    
`Server, Import`  는 삭제 시 복원버튼이 생겨야 한다.
:::
::: warning 프로젝트 수정 버튼
수정버튼을 눌렀을 때 수정할 때 유효성 검사
:::

:::danger 흐름도
  - **컴포넌트 구조 설계**
  - **컴포넌트 생성 및 퍼블리싱**
  - **프론트 엔드 기능 추가**
  	- 모달 팝업 Open, Close 기능 구현
  	- 모달 팝업 별 기능 구현
  	- 수정 모달 팝업 기능구현 
  	- 수정 모달 팝업 유효성 검사
  	- 정상적으로 UI 뿌려주기
:::

<!-- ## 프로젝트 상세 -->