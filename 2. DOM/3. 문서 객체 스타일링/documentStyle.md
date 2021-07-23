# 문서 객체의 스타일 변경

## 문서 객체에 스탕일 하기

### ① 스타일 변경할 문서 객체를 가져온다.

### ② 문서객체.style.스타일속성 = '스타일 속성값' 의 형태로 변경 \

<br/>

```html
<body>
  <h1 id="header">Header</h1>
</body>
```

<br/>

```javascript
// 문서 객체 가져오기
let header = document.getElementById('header');

// 문서 객체의 스타일을 바꿈
header.style.border = '2px solid black';
header.style.color = 'green';
header.style.fontFamily = 'helvetica';
header.style.backgroundColor = 'skyblue';
```

### ※ 자바스크립트에서 스타일 속성 중 특수기호 <strong>-</strong> 을 식별자에서 사용할 수 없으므로 <strong>-</strong>으로 끊긴

### &nbsp;&nbsp;&nbsp; 단어의 첫 글자를 대문자로 써야한다.

### &nbsp;&nbsp;&nbsp; ex) background-color → backgroundColor

<br/>

### 단 문자열로 접근하면 가능하다.

```javascript
document.body.style['background-color'];
document.body.style['backgroundColor'];
```
