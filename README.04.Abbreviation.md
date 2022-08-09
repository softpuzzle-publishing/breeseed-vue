# 축약어의 사용

모든 명명규칙에는 축약어를 사용하지 않음을 기본규칙으로 하지만, 일반적(통상적, 보편적)이며 뜻이 명확한 축약어를 사용함에 있어서는 그 사용을 허용한다.<br />
단, 프로젝트 내 사용한 축약어는 그 사용함을 계속적으로 유지하도록 하며 사용한 축약어를 아래 리스트에 기록하도록 한다.

## 예시
### (BAD) 명확하지 않은 축약어의 사용 / 다른 뜻과 혼용 될 수 있는 축약어의 사용
```
export default {
    name: "LytCommon"
}
```
### (GOOD) 축약어를 사용하지 않고 본래의 단어로 명확하게 뜻을 나타낸다.
```
export default {
    name: "LayoutCommon"
}
```
### (BAD) 축약어와 비축약어의 혼용 된 사용
```
const imagePath = '...'

function getIMG() {
    ...
}
```
### (GOOD) 일관적인 축약어의 사용
```
const imgPath = '...'

function getIMG() {
    ...
}
```
### (BAD) 축약어 리스트에 추가 하지 않고 축약어를 사용하는 겨우
### (GOOD) 축약어 사용시 아래 축약어 리스트에 그 기록을 남겨 두도록 한다.

## 축약어 리스트
| 축약어  | 뜻            |
|------|--------------|
| info | information  |
| btn  | button       |
| ico  | icon         |
| img  | image        |
| env  | environment  |
| ...  | ...          |
| ...  | ...          |
