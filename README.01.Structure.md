# Structure
```
├── .storybook           // storybook 설정파일 폴더 (참고: https://storybook.js.org/docs/vue/configure/overview)
|  └── ...
|
├── public               // Staticly served content
|  └── ...
|
├── src                  // 개발소스
|  ├── api               // API요청 및 비즈니스 로직
|  |  ├── member.js
|  |  └── ...
|  |
|  ├── assets            // 앱 자원
|  |  └── ...
|  |
|  ├── constants         // 상수들
|  |  └── ...
|  |
|  ├── data              // 샘플 데이터 또는 비즈니스 로직 내 필요 데이터
|  |  └── ...
|  |
|  ├── mixin             // 믹스인
|  |  └── ...
|  |
|  ├── plugin            // 앱 내 사용자 plugin
|  |  └── ...
|  |
|  ├── store             // store (vuex)
|  |  ├──
|  |  ├──
|  |  └── ...
|  |
|  ├── stories           // storybook templates
|  |  └── ...
|  |
|  ├── templates         // SFC templates
|  |  ├── components     // 엘리먼트 고유 스타일 적용 복합 컴포넌트 및 서비스 내 재사용 template
|  |  ├── elements       // 엘리먼트 고유 스타일 적용 단일 컴포넌트
|  |  └── layouts        // 레이아웃 관련 컴포넌트 (싱글 인스턴스 컴포넌트)
|  |
|  ├── util              // helper등의 utils
|  |  └── ...
|  |
|  ├── views             // pages
|  |
|  ├── App.vue           // root app
|  ├── main.js
|  └── router.js
|
├── .env                 // 공통 환경변수
├── .env.development     // 개발 환경변수
├── .env.production      // 상용 환경변수
├── package.json         // Package and dependencies details
├── vue.config.js
└── ...

```
