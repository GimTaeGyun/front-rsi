# Integrated Administrator Main Module

다수의 서비스 어드민을 통합하는 메인 모듈
가로형 상단 메뉴에 서비스가 열거되며, 특정 서비스가 선택되면 Client영역에 해당 서비스의 어드민 화면으로 전환

## 모듈 종속성 주입
통합 UI 모듈인 Integrated는 각 서비스 어드민을 구동하기 위해
packages.json에 "peerDependencies"에 각 서비스 어드민 모듈을 선언
