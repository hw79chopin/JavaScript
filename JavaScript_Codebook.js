/* JavaScript */

// 논리 연산자
&&      // 그리고
||      // 또는
!       // ~가 아니다 e.g !(a == 100)
        // **, and: 조건식이 true이면 처리하고, false이면 처리하지 않는다.
        // ||, or: 조건식이 ture이면 처리하지 않고, false이면 처리한다.
a=4;
(a<10) || (document.write("a는 10이상<br>"));
(a<10) && (document.write("a는 10미만"));

// if문
// if example
a = 5;
if(a % 2 == 0) {
    document.write(a, "는 짝수입니다.");
} else {
    document.write(a, "는 홀수입니다.");
}

// else if example
if (조건1) {
    document.write();
} else if (조건 2) {
    document.write();
} else if (조건 3) {
    document.write();
} else {
    document.write();
}

// if문 속에 if문
if (조건) {
    if (조건) {
        alert("문장.");
    } else {
        alert("문장");
    }
}

// for문
for (i=1; i <4; i++) {
    document.write("안녕", i ,"<br>")
}

// while문
s= i = 0;
do {
    ++i;
    s = s + i;
} while(i<10);
document.write("1부터 ", i, "까지의 합은", s, "<br>");

// break, continue, switch로 무한루프를 깰 수 있다.
// switch문
jebi = window.prompt("제비뽑아라 \n 1~10까지 숫자를 입력해라")
switch(jebi) {
    case "7":
        document.write("축하합니다! 1등입니다!");
        break;
    case "2": case "5":
        document.write("2등!");
        break;
    case "4": case "6": case "9":
        document.write("3등!");
        break;
    default:
        document.write("꽝!");
        break;
}

// array 관련
a = new Array(1,2,3);   // array 생성 방법1
a = [1,2,3];    // array 생성 방법2
a.push(3);      // 끝에 추가하기
a.unshift(3);   // 앞에 추가하기
a.pop();        // 맨 끝에 요소를 반환하고 삭제
a.shift();      // 맨 앞에 요소를 반환하고 삭제
a.slice(1, 3);      // array의 2번째 ~ 4번째 요소를 slicing
delete a[1];
delete a
str = new String("복숭아");
str = "복숭아";
str.length;         // 문자열의 길이를 구해줌
str.charAt(n);      // n+1번째 문자를 추출함
date.split("/")     // '/'를 사용하여 문자열을 분할
story.indexOf("기", 1);     // 문자열 검색. 1번 index부터 "기"를 검색
day = new Date(연도, 월, 일, 시간, 분, 초);     // 시간 정해주는 방법
now = new Date();       // 인수를 지정하지 않으면 현재 날짜, 시각을 반환
now.getFullYear();      // 연도를 반환
now.getMonth();         // 월을 하나 작은 숫자로 반환
now.getDate();          // 일을 반환
now.getDay();           // 0~6 숫자로 요일을 반환 (일요일이 0)
now.getHours();         // 시간을 반환
now.getMinutes();       // 분을 반환
now.getSeconds();       // 초를 반환
now.getTime();          // 1970-01-01 00:00:00부터 현재 시간까지를 밀리초 단위로 반환

map()
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);     // expected output: Array [2, 8, 18, 32]

find()  //returns the value of the first element in the provided array that satisfies the provided testing function.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);    // expected output: 12

findIndex()
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));     // expected output: 3

filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);      // expected output: Array ["exuberant", "destruction", "present"]

reduce()  // executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));          // expected output: 10
console.log(array1.reduce(reducer, 5));       // expected output: 15

concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);        // expected output: Array ["a", "b", "c", "d", "e", "f"]

slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));          // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));       // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));       // expected output: Array ["bison", "camel", "duck", "elephant"]

splice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');    // inserts at index 1
console.log(months);          // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');   // replaces 1 element at index 4
console.log(months);          // expected output: Array ["Jan", "Feb", "March", "April", "May"]












// operators
+=      
-=
*=
/=
++      // 1 더하기
--      // 1 빼기


// methods, 내장함수들
addEventListener    // 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정
parseInt()      // int로 바꾼다
parseFloat()      // Float로 바꾼다
.toString()     // number을 str으로 바꾼다
.push();        // array 형식에 쓰는 메소드, 새로운 element를 array에 넣는다

console.log(변수);      // development console에 output을 내보냄. 만약 저것처럼 변수를 넣으면 변수가 출력된다.











// 예시모음
console.log(logEntries[0]);         // array 맨 처음 element를 console에 출력
