# Gitlab


## 프로젝트 상세

::: tip 진행 전 해야하는 것
**Core Component 설계 및 구현**    
:::


### Component 
- `SideBar Component`
- `Member Component`
- `Group Component`
  - `Sub Group Component`
  - `Project List Component`
- `Project Component`
  - `Project 3D Component`

### Sidebar
::: warning UI 고려사항 
API 로 받은 데이터에 맨 처음 데이터가 처음으로 선택된다.          
- API 예외처리 : 리다이렉트
- API 로딩처리
- API Cancel 처리 

Gitlab Group 또는 Project 트리구조로 나온다.    
:::

### Group Detail
::: warning UI 고려사항
Sub Group List 는 선택한 그룹의 바로 아래 그룹만 나온다.      
Project List 는 선택한 그룹의 바로 아래 프로젝트만 나온다.   
:::
### Project Detail
::: warning UI 고려사항
3D CSS Component 구현
:::