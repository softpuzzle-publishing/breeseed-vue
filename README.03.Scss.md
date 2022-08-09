# SCSS

## Structure
Kitty Giraudel의 [sass-boilerplate](https://github.com/KittyGiraudel/sass-boilerplate)에서 Vue환경에 맞게 커스터마이징 한다.
```
└── styles
    ├── abstracts     // 전역변수, 함수, mixin등의 프로젝트 전체에서 사용되는 tool
    |
    ├── base          // 타이포 그라피, 헬퍼 등의 프로젝트에서 일반적으로 사용하는 base 스타일
    |
    ├── components    // 엘리먼트 고유 스타일 적용 복합 컴포넌트 및 서비스 내 재사용 template
    |
    ├── elements      // 엘리먼트 고유 스타일 적용 단일 컴포넌트
    |
    ├── layouts       // 레이아웃 관련 콤포넌트 스타일
    |
    ├── vendors       // 라이브러리
    |
    └── site.scss     // 공통 스타일, 라이브러리 import 및 기타 공통 스타일 정의 파일
```

## Import 규칙

### abstracts 규칙들은 vue.config.js등의 웹팩설정 및 플러그인 등을 사용하여 모든 view template에서 사용할 수 있도록 한다.
```
module.exports = {
  ...
  ...

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(
          __dirname,
          "./src/assets/styles/abstracts/_variables.scss"
        ),
        path.resolve(
          __dirname,
          "./src/assets/styles/abstracts/_functions.scss"
        ),
        path.resolve(__dirname, "./src/assets/styles/abstracts/_mixins.scss")
      ]
    }
  }
};
```

### 프로젝트에서 일반적으로 사용하는 스타일은 site.scss에서 import하여 App.vue(root app)에서 호출하여 사용할 수 있도록 한다.
```
// site.scss
@charset "UTF-8";

// Vendors
@import
'vendors/normalize',
...
...
'~vue3-lottie/dist/style.css';

// Base stuff
@import
'base/base',
...
...
'base/helpers';

// etc
.dim {
  ...
  ...
}
...
...
```
```
<!-- App.vue -->
<template>
  ...
  ...
</template>

<script>
import '@/assets/scss/site.scss';
...
</script>
```

### component와 element에서는 (script)영역에서 import 한다.
이는 부모 또는 자식 콤포넌트에서 유연하게 스타일을 재정의 하기 위함
```
<template>
  ...
  ...
</template>

<script>
import '../assets/scss/elements/_v-chips.scss';
import { computed } from 'vue';

...
...
</script>
```

### page 및 (components, layouts, pages)의 partial 내 스타일은 (style lang="scss" scoped)영역에서 정의한다.
이는 페이지가 늘어남에 따라 스타일의 충돌가능성을 줄이고자 함 (단, 2번 이상 반복 될 경우 콤포넌트 또는 엘리먼트로 변환하여 사용할 것을 권장)
```
<template>
  <section class="section-narrow-margin">
    ...
  </section>
</template>

<script>
  ...
</script>

<style lang="scss" scoped>
.section-narrow-margin {
	...
	...
}
</style>
```

### 라이브러리 스타일들은 site.scss에서 import하여 사용한다.
이는 라이브러리 스타일을 효율적으로 관리하고자 함
```
// Vendors
@import
'vendors/normalize',
'vendors/bootstrap/bootstrap-grid',
'~animate.css',
'~v-calendar/dist/style.css',
'~swiper/swiper-bundle.css',
'~vue3-lottie/dist/style.css';
```

## 파일 명명규칙
스타일 가이드 내 [컴포넌트 명명 규칙](/?path=/docs/documents-convention-02-vue--page#싱글-파일-컴포넌트-파일-명명-규칙-선택적-스타일-가이드)을 따라간다.<br />
단, 파스칼 케이스(PascalCase) 대신 케밥 케이스(kebab-case)를 사용하며 site.scss를 제외한 partials파일은 _를 앞에 붙인다.
```
├── components
|   ├── _base-board.scss
|   └── ...
|
└── elements
    ├── _v-button.scss
    └── ...
```

## 스타일 규칙
1. OOCSS와 SMACSS를 혼합하여 작성한다. (BEM을 사용하지 않는다.)
2. selector(class) 명명 규칙
- 템플릿의 경우, 파일 명명규칙에 맞추어 kebab-case로 작성한다. 단, view(page)의 경우는 위 1항목에 맞추어 kebab-case로 임의 작성하도록 한다.
```
// _v-buttons.scss
.v-button {
  ...
  ...
}

// _base-modal.scss
.base-modal {
  ...
  ...
}

// _the-header.scss
.the-header {
  ...
  ...
}
```
```
<!-- etc.vue -->
<template>
  <section class="임의-class-name">
    ...
  </section>
</template>

<script>
  ...
</script>

<style lang="scss" scoped>
.임의-class-name {
  ...
  ...
}
</style>
```
## 전역변수 작성규칙
```
└── styles
    └── abstracts
        └── _variables.scss
```
전역변수는는 위 _variables.scss 내 대문자 스테이크 표기법(SNAKE_CASE)로 작성한다.<br />
단, SCSS 라이브러리 내 변수의 재설정을 위한 변수설정을 이에 따르지 않는다.
```
// file path
$BASE_PATH: '~@/assets' !default;
$IMG_PATH: '#{$BASE_PATH}/images' !default;
$FONT_PATH: '#{$BASE_PATH}/fonts' !default;

// color
$BACKGROUND_COLOR: #fff !default;
$FOREGROUND_COLOR: #101010 !default;
...
...

// z-index
$Z_INDEX_DIM: 990 !default;
...
...

// font
$TEXT_FONT_STACK: 'SF Pro Display','Roboto',sans-serif !default;
$TEXT_COLOR_TITLE: #000 !default;
$TEXT_COLOR_BODY: $FOREGROUND_COLOR !default;
$TEXT_SIZE: 14px;
$LINE_HEIGHT: 1.4;
$LINE_HEIGHT_EQUAL: 1;
$LETTER_SPACING: 0;
$LINK_COLOR: $TEXT_COLOR_BODY;


/* Vendors */
// Bootstrap - Grid
$grid-gutter-width: 10px;
$grid-breakpoints: (
  xxs: 0,
  xs: 320px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```