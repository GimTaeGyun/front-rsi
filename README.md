# Integrated Administrator

lerna 기반의 통합 어드민 모노리포
다수의 서비스 어드민을 UI적으로 통합하는 "Integrated" Package와 각 서비스별 어드민이 "packages"폴더 하위에 구성
Integrated Administrator에 추가되는 package name은 "@administrator/"을 prefix 추가해야 함
(./packages/integrated/package.json의 name field 참조)

### Project 구성

lerna boilerplate Project는 3개의 프로젝트로 구성

- **Integrated**: 가로형 상단 메뉴에 서비스가 열거된 통합 어드민 메인 프레임
- **subscription**: 구독서비스 어드민에 관련된 페이지 들의 모듈
- **utils**: 공용 기능 모듈 (사용여부 미정)

### Project 실행

- **yarn install**
- **yarn build** : packages의 project 빌드 폴더에 빌드
- **yarn start** : project 실행

- **yarn clean:update** : packages의 작업 영역 초기화
- **lerna run --scope @administrator/subscription demo-start** : packages 내의 subscription project 단독 실행
