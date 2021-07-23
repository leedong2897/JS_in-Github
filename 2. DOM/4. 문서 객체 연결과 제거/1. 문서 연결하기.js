// 문서 객체 연결
let parentEl = document.querySelector('.parent');
let childEl = document.createElement('span');

childEl.innerText = '자식 요소';
parentEl.appendChild(childEl);