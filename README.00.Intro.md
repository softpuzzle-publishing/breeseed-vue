# second-wind-doctor-vue

## Environment
```
node v16.13.0
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for vue development
```
npm run serve
```

### Compiles and minifies for vue production
```
npm run build
```

### story book (design system) dev
```
npm run storybook
```

### story book (design system) build
```
npm run build-storybook
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project Guide

### npm moduels 보안 취약성 관리
- 모듈의 설치 시 npm audit -production으로 build output의 취약성이 없도록 한다.
```
npm audit -production

// result
found 0 vulnerabilities
```

### 환경변수 설정
- 동적 관리가 필요한 환경변수는 /src/constants/env_constants 에 정의 
- 환경 구분 없이 참조할 상수값을 가진 환경 변수는 .env 에 정의
- 구동 환경(development, production) 에 따라 변경되는 값을 갖는 환경 변수는 각 .env.development, .env.production 에 정의 
- 환경 변수명은 VUE_APP_ 으로 시작해야 함 

### 디자인 시스템(storybook) 관리
- 애플리케이션 고유의 스타일과 규칙을 적용하는 Component는 디자인 시스템 도구를 통해 관리하도록 한다.
```
npm run storybook
```

### 기타 가이드
하위 문서를 참고한다.
```
root
├── README.01.Structure.md
├── README.02.Vue&Js.md
├── README.03.Scss.md
└── README.04.Abbreviation.md
```
[README.01.Structure.md](./README.01.Structure.md)<br />
[README.02.Vue&Js.md](./README.02.Vue&Js.md)<br />
[README.03.Scss.md](./README.03.Scss.md)<br />
[README.04.Abbreviation.md](./README.04.Abbreviation.md)
