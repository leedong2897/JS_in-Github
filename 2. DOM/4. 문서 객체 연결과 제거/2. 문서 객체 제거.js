let header1 = document.querySelector('h1');
let header2 = document.querySelector('h2');

//문서 객체 제거
document.body.removeChild(header1); //일반적
header2.parentNode.removeChild(header2);