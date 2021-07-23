window.onload = function() {
    // 문서 객체 가져오기
    let headers1 = document.getElementsByTagName('h1');
    let headers2 = document.getElementsByTagName('h2');

    headers1[0].innerHTML = 'with getElemnetsByTagName1';
    headers1[1].innerHTML = 'with getElemnetsByTagName1';


// for문을 이용하면 쉽게 나타낼 수 있다. 
for(let i =0; i<headers2.length; i++) {
    headers2[i].innerHTML = 'with getElemnetsByTagName2'
} 

}