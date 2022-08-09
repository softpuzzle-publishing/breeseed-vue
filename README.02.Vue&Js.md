# Vue
프로젝트 내 스타일 가이드는 [vuejs 공식문서 내 스타일 가이드](https://v3.ko.vuejs.org/style-guide/)를 기본으로 합니다.<br />
다만, 본 문서에서는 [vuejs 공식문서 내 스타일 가이드](https://v3.ko.vuejs.org/style-guide/) 내에서 제시한 [규칙범주](https://v3.ko.vuejs.org/style-guide/#컴포넌트-이름에-합성어-사용-필수)에서 벗어나 내용과 선택적인 스타일가이드 중 프로젝트에서 선택한 부분만을 설명하며, 그 외 Lint 및 Prettier 설정과 같은 추가적인 부분을 설명 합니다.

## [컴포넌트 스타일 범위 지정](https://v3.ko.vuejs.org/style-guide/#컴포넌트-스타일-범위-지정-필수) (규칙범주에서 벗어남)
베이스 콤포넌트와 싱글 인스턴트 컴포넌트에서는 스타일 범위 지정하지 않고 아래와 같이 스크립트 구문 내에서 import 하도록 합니다.
```
<template>
  ...
	...
</template>

<script>
import(`${process.env.VUE_APP_SCSS_PATH}/elements/_v-chips.scss`);

...
...
</script>
```
이는 src > templates > views 내 SFC에서 스타일의 재정의 필요 시 좀 더 수월한 수정처리를 위해서 입니다.

## [싱글 파일 컴포넌트 파일 명명 규칙](https://v3.ko.vuejs.org/style-guide/#컴포넌트-파일-적극-권장) (선택적 스타일 가이드)
싱글 파일 컴포넌트의 파일명을 항상 파스칼 케이스(PascalCase)를 사용합니다.<br />
(프론트/퍼블리싱 개발파트는 모두 맥을 사용하고 있음으로) 이는 대소문자를 구분하지 않는 파일 시스템을 위해 케밥 케이스(kebab-case)를 이용하기 보다는 컴포넌트의 파일명과 이름을 동일하게 하여 작업자의 개발 편의성을 높이기 위함 입니다.
```
└── elements
    ├── VButton.vue
    ├── VChecker.vue
    └── ...
```


## 베이스 컴포넌트 이름 (선택적 스타일 가이드)
애플리케이션 고유의 스타일과 규칙을 적용하는 Element, Component 폴더 내 컴포넌트에 접두어 V와 Base를 붙입니다.
```
├── elements
|   ├── VButton.vue
|   ├── VChecker.vue
|   └── ...
|
└── components
    ├── BaseChipList.vue
    ├── BaseTab.vue
    └── ...
```

## 싱글 인스턴스 컴포넌트 이름 (선택적 스타일 가이드)
싱글 인스턴스로 사용하는 layouts요소에는 The를 접두사로 붙입니다.
```
└── layouts
    ├── TheHeader.vue
    ├── TheFooter.vue
    └── ...
```

## Partial (추가적 부분)
Partial이 필요한 컴포넌트의 경우 콤포넌트 파일명 내 의미를 명확히 나타날 수 있도록 한다.
### 구조
```
├── layouts
|   ├── HeaderButtonNavigation.vue
|   ├── HeaderMain.vue
|   ├── TheHeader.vue
|   └── ...
|
└── views
    └── BloodGlucose
        ├── Write
        |   ├── BloodGlucoseWriteAtMeat
        |   ├── BloodGlucoseWriteAtMeat
        |   └── ...
        |
        ├── BloodGlucoseMain.vue
        └── ...
```


# JS

## 파일 명명규칙
snake_case

## Object 명명규칙
PascalCase

## Instance 명명규칙
camelCase

## Lint 및 Prettier
아래의 Lint설정을 통해 최소한의 코드 규칙은 꼭 지키도록 한다. (필수)
```
"extends": [
  "plugin:vue/vue3-essential",
  "eslint:recommended"
  ...
],
```
아래 등과 같이 Prettier를 설정하여 최소한의 코드의 규칙성을 유지 하도록 한다. (선택)
```
"extends": [
  ...
  "plugin:prettier/recommended"
],
```