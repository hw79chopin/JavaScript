/* JavaScript variable
shadow variable: function 내에서 global variable을 사용하는 것도 됨.
var has global/function scope, let and const have block scope
block Scope: { }에서 선언된 변수는 { } 내에서만 유효하다! 
              Variables are created in a block{} and then belong to that block. 
              if and for-loops can also have their own, scoped variables for example.*/

// 논리 연산자
&&      // 그리고
||      // 또는
!       // ~가 아니다 e.g !(a == 100)
        // **, and: 조건식이 true이면 처리하고, false이면 처리하지 않는다.
        // ||, or: 조건식이 ture이면 처리하지 않고, false이면 처리한다.
a=4;
(a<10) || (document.write("a는 10이상<br>"));
(a<10) && (document.write("a는 10미만"));

// if문: if문은 return하지는 않는다.
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

// for loop: Execute code a certain amount of times
for (let i=0; i<3 && i>0 ; i+++)
{
    console.log(i);
    /*  */
}

// for-of loop: Execute for every element in "an array"
for (const el of array)
{
    console.log(el);
}

// for-in loop: Execute for every key in " an object"
for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// while loop: Execute code as long as a condition is true
while (isLoggedIn) { 
    ...
}

s= i = 0;
do {
    ++i;
    s = s + i;
} while(i<10);
document.write("1부터 ", i, "까지의 합은", s, "<br>");

do {
    console.log(j);
    j++;
  } while (j < 3);      // 이렇게 하면 console.log를 먼저 실행한다!

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

// try, catch 문
try {
    let hyunWoo = getMax();
} catch (error) {
    console.log(error);
    hyunWoo = 100;
    alert('You enter sth wrong, default value is used.')
}
/* try block: code that could throw an error goes into the try block
   catch block: The error handling and fallback logic goes into the catch block */













/* operators */
==
!=
===
!==
+=      
-=
*=
/=
++      // 1 더하기
--      // 1 빼기
typeof     변수의 type을 반환함
// ternary operator: condition을 넣고 ?를 넣고 true일 때 값 : False일 때 값을 넣는다! */


// methods, 내장함수들
console.log();              // console에 ( )을 반환
console.dir();              // 해당 객체의 attributes를 반환
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
find()  //returns the value of the first element in the provided array that satisfies the provided testing function.
findIndex()
filter()
reduce()  // executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
concat()
slice()
splice()
``   //back ticks를 사용하면 variable을 쉽게 넣을 수 있다.
addEventListener('', )    // 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정    
parseInt()      // int로 바꾼다
parseFloat()      // Float로 바꾼다
.toUpperCase();     // 대문자로 바꾼다
.toString()     // number을 str으로 바꾼다
promt('텍스트');        // user input 받기
isNaN();            // NaN인지 아닌지 설정
Object.property = '';       // 아직 없는 property를 이렇게 정해줄 수 있음
switch (expression) {
    case Condition:
    expression.target = 'MONSTER';
    break;
    default:
        expression = {};
}                    // ( ) 안에 원하는 property, expression이 들어가고 조건이 맞으면 실행할 코드를 넣고 break!
.bind()              // prepares the function
.apply()
.call()
.trim()              // input의 앞 뒤에 whitespace를 없애준다.

// query method
document.querySelector(CSSselector);       // 처음에 매칭되는 것만 함
document.getElementById(ID);
document.querySelectorAll(CSSselector);
document.getElementsByClassName(CSSClass);
document.getElementsByTagName(HTMLTAG);
h1.setAttribute('value', 'some other default text')

// DOM
.classList.contains();     // class가 있는지 없는지 확인
.classList.add()            // class 추가
.classList.remove()         // class 제거
.classList.toggle('클래스이름', true);       // 클래스가 존재하면 제거하고, 존재하지 않으면 추가한다.
                                            // true: 클래스 값을 추가, false: 클래스 값을 제거
.textContent = '새로운 텍스트';    // 이렇게 하면 text가 바뀜
.iD        // id를 반환
.className       // class 이름을 반환
.firstElementChild      // 바로 밑 child를 반환
.firstChildChild        // 바로 밑 child를 반환
.closest                // 가장 가까운 ancestor를 반환
.previousElementSibling         // sibling을 반환
.nextSibling                // sibling을 반환
.nextElementSibling         // sibling을 반환
document.createElement('태그이름');       // create new DOM object
태그이름.appendChild('만든태그이름');       // insert new DOM object
section.textContent
section.innerHTML = '<h2>A new title </h2>';          // tags 속에 있던 모든 nodes(tags)를 다 없앤다.
list.innerHTML = list.innerHTML + '<li>Item 4</li>'          // 단점: 모든 innerHTML를 re-render한다. performance가 떨어진다. 그래서 기존의 user input도 사라진다.
list.insertAdjacentElement('beforeend', '<p>New Text!</p>')          // 위의 단점을 해결하는 방법! parameter [beforebegin | afterbegin | beforeend | afterend]. user input이 안 사라진다.
태그이름.append(텍스트);          // Internet Explorer에는 못 쓴다.
태그이름.prepend(태그이름);       // 맨 앞에 붙일 수 있음.
태그이름.lastElementChild.before(다른태그이름);       // existing 태그 앞에 삽입하기
태그이름.lastElementChild.after(다른태그이름);       // existing 태그 앞에 삽입하기
태그이름.insertAdjacentElement('afterend');         // element를 내가 고른 element뒤에 배치
태그이름.cloneNode(false);          // true하면 chile element와 다른 전부를 복사함.
태그이름.cloneNode(false);          // true하면 chile element와 다른 전부를 복사함.
태그이름.remove();        // remove from the DOM, rendered page
태그이름.parentElement.removeChild();       // 원하는 child를 remove
태그이름.style.backgroundColor = 'red'; 
태그이름.style.display= 'red';              // 이런 식으로 DOM의 CSS 명령을 바꿀 수 있음




// 예시모음
console.log(logEntries[0]);         // array 맨 처음 element를 console에 출력
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;           // ternary operator
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);     // expected output: Array [2, 8, 18, 32]

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);    // expected output: 12

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));     // expected output: 3

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);      // expected output: Array ["exuberant", "destruction", "present"]

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));          // expected output: 10
console.log(array1.reduce(reducer, 5));       // expected output: 15

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);        // expected output: Array ["a", "b", "c", "d", "e", "f"]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1, 5));       // expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(2));          // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));       // expected output: Array ["camel", "duck"]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');    // inserts at index 1
console.log(months);          // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');   // replaces 1 element at index 4
console.log(months);          // expected output: Array ["Jan", "Feb", "March", "April", "May"]

switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;

const calcDescription = `${currentResult} + ${userInput.value}`;

prompt('Type your name: ', '').toUpperCase();

// rest operator
const sumUp = (a, b, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

const p = document.getElementById('id-name')
p.textContent = '새로운 텍스트';    // 이렇게 하면 text가 바뀜
p.iD        // id를 반환
p.className       // class 이름을 반환

const h1 = document.querySelector('h1')
h1.style.color = 'white';
h1.style.backgroundColor = 'red';       // 이렇게 바꿀 수도 있음
h1.style.display = 'block'

// classList 활용법 (styling DOM elements)
const section = document.querySelector('section');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  ~~~
})
section.classList.contains();     // class가 있는지 없는지 확인
section.classList.add()         // class 추가
section.classList.remove()         // class 제거
section.classList.toggle()         // class 껏다 키기

// EventListener Remove 하기
let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger'); // let으로 꾸고
confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));   // 새로 지정하고
confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
// 초기화 시켜주고
cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
confirmDeletionButton.addEventListener(
  'click',
  deleteMovieHandler.bind(null, movieId)
);
