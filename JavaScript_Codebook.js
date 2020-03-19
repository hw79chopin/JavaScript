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

// for-in loop: Execute for every key in "an object"
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
props.toUpperCase();    // 대문자로 바꾼다
.toString();     // number을 str으로 바꾼다
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

// browser API
setTimeout(func, 3000);            /* 첫 번째 argument: timer가 끝나면 실행될 함수, 두 번재 argument: 시간, ms단위*/
setInterval(func, 2000);           /* 주기적으로 함수를 실행 */
clearInterval();              /* Interval 멈추기 */
clearTimeout();               /* 타이머 멈추기 */
location.href = "www."          // 새로운 사이트로 접속
location.replace('')            // 다른 사이트로 바꿈
history.back()                  // 뒤로 돌아감
history.forward()               // 앞으로 감
history.length                  // 유저가 얼마나 많은 step을 이 탭에서 했는지 보여줌
navigator          // browser과 operating system이 상호작용할 수 있게 해줌
navigator.userAgent         // 유저가 쓰는 browser를 알 수 있음
navigator.geolocation.getCurrentPosition()      // 유저의 위치를 알 수 있음
new Date()        // 현재 시간과 timestamp를 반환
.getDate()
.getDay()
.getTime()


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
document.getElementById('title').value;   // DOM node의 value를 뽑으려면

// Array
const numbers = [1,2,3];    // 가장 심플한 방법
const moreNumbers = new Array();    /* [] 이렇게 생성됨 */
const moreNumbers = Array();        /* new를 생략해줘도 된다.   */
const yetMoreNumbers = Array.of(1,2);     // 이렇게도 생성가능
const listItems = document.querySelectorAll('li');
const arraylistItems = Array.from(listItems);           // Array.from은 iterable이나 array-like object를 array로 바꿔준다.
arrayName.push('');       // array에 element 맨 뒤에 추가하기
arrayName.unshift('');      // array에 element 맨 앞에 추가하기
arrayName.pop();          // array 맨 끝에 element 제거하기
arrayName.shift();        // 맨 처음 element를 제거한다.
arrayName[인덱스] = '텍스트';   // 인덱스로 element를 replace한다. 인덱스가 arrray length를 넘어가면 empty space들이 만들어진다 -> 거의 안 씀
arrayName.splice(startIndex, howMany, addElement1, addElement2);       // startIndex부터 howMany에서 주어진 개수만큼 element를 삭제한다. 그 뒤에 addElements를 추가한다.
arrayName.splice(0);      // array를 다 없앤다. 그리고 없어진 element를 반환하다.
arrayName.slice();        /* .slice()는 기존 array를 복사해서 새로운 array로 돌려준다. 이를 통해서 기존 array에 element를 건들여도 새로운 array는 영향을 미치지 않게 된다.*/
newArraya.slice(startIndex, endIndex);      // startIndex에서 endIndex까지 array를 slicing해서 새로운 array로 반환한다.
newArraya.slice(startIndex);            // endIndex가 없으면 startIndex부터 끝까지 slicing한다.
const newArray = oldArray.concat([1,2,3]);          // push( )는 array를 한 element로 앞에 넣는다면 concat( )은 array의 element를 각각 뒤에 넣은 새로운 array를 반환한다.
newArray.indexOf(element);        // element의 첫 번째 index를 반환한다. 못 찾으면 -1을 반환한다.
newArray.lastIndexOf(element);        // element의 첫 번째 index를 뒤에서부터 찾아서 반환한다. primitive value에는 잘 먹히나 reference value에는 잘 안 먹힌다.
arrayName.includes();        // primitive value에 적합!
newArray.forEach((arg1, index, arg2) => {function을쓰자;});         /* for-of loop 대체품! arg1: for loop의 element, index은 index */
newArray.map();           // map()은 taking an array, run a function하고 element를 바꾼 새로운 array를 반환!! 
arrayName.sort();         // array를 string으로 바꾸고 sort한다.
arrayName.reverse();      // 반대로 sort한다.
arrayName.filter((arg1, index, arg2 ) => {});       // 기존 array에 손대지 않고 새로운 array를 반환한다. arg1은 찾고 있는 value, index는 index, arg2는 original array이고 잘 안 쓴다.
arrayName.reduce((preValue, curValue, curIndex, originArray) => {
  return /* 하고 싶은 것을 해용 */;
}, 0);      // Reduce function은 array내의 values를 합쳐 single value를 만드는 데 정말 유용하다.
data.split('');         // split 하기! python3랑 syntax가 같음
data.join('');          // join 시키기! str을 만든다.default로 ,로 구분함.
const [ newArray1 , newArray2, ...otherInfo ] = oldArray;    // array destructuring!


// Set
const newSet = new Set();      // 이 방법으로만 Set을 만들 수 있음
const newWeakSet = new WeakSet();
newSet.has();            // argument가 있는지 없는지 확인. boolean으로 반환
newSet.add();            // Set에 argument를 추가!
newSet.entries();        // return iterable. entry는 같은 value가 2번 반복된 array다.
newSet.delete();         // set에서 삭제하기!

// Map
const newMap = new Map();
const newWeakMap = new WeakMap();
newMap.set();           // 새로운 entry 넣어주기, key, value 형태로 넣어줘야 함!
newMap.keys();          // key를 얻을 수 있다.
newMap.values();          // value를 얻을 수 있다.
newMap.has();           // 특정 key가 map에 있는지 확인

// Object
person.isAdmin = ''     // 이렇게 property를 추가할수 있다.
delete person.age;      // 이렇게 property를 없앨 수 있다.
objecteName instanceof ClassName      // True이면 object가 Class에서 나온 거!
Object.getOwnPropertyDescriptor();    // metadata를 보여준다. 나아가 할 수 있는 것들을 보여준다.
Object.defineProperty(person, 'name', {
  configurable: true,
  enumerable: true,
  value: person.name,
  writable: false
});              // property를 이렇게 지정해줄 수도 있다. Lock 할 수 있다.


// event
window.addEventListener('mouseenter')   // 마우스가 위에 올려졌을 때 작동 및 반응
window.addEventListener('scroll')       // scroll할 때 반응
event.stopPropagation();      // propagation 멈추기
button.click();
form.submit();  // 이렇게 event를 trigger할 수 있다.















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


// find 예시
const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel';
  });
  
manuel.name = 'Anna';
console.log(manuel, personData);

// foreach() 예시
prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
  });
  
console.log(taxAdjustedPrices);

// foreach() 예시
let sum = 0;

prices.forEach((price) => {
  sum += price
});

console.log(sum);

// map 예시
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);

// sort 예시
arrayName.sort((arg1, arg2) => {
    if (a >b ) {
      return 1;
    } else if (a===b) {
      return 0;
    } else {
      return -1;
    }
  });         
  // 함수를 넣어줘도 된다

// filter 예시
const filteredArray = prices.filter(p => p > 6);
const numsGreater5 = numbers.filter(val => val > 5);

// reduce 예시
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// map 예시
for (const [key, value] of newMap.entries()) {
    console.log(key, value);
  }                       // 이렇게 정보를 뽑을 수 있다!
  
for (const key of newMap.keys()) {
    console.log(key);
  }
  
for (const value of newMap.values()) {
    console.log(value);
  }
const mappedNumbers = numbers.map(val => ({ num: val }));

// spread operator 예시
const person3 = {...person, age:29, hobiies:[...person.hobbies]};   // 이렇게 하면 hobbies를 또 지정해주면 기존 object에 영향을 받지 않는다.

// object destructuring
const { info, ...otherProps } = movie;       //  오른쪽에 object 이름을 놓고 { } 안에는 그 object에서 extract하고 싶은 property를 놓는다.
const { info: newName } = movie;       // 새로운 이름에 object의 property를 저장하고 싶을 때!

// scroll
element.scrollIntoView({behavior: 'smooth'});        // 해당 element로 scroll해주는 개꿀 method. 애니메이션도 넣을 수 있음

// event
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();   // default를 멈추고
  console.log(event)        // 내가 하고 싶은 logic을 입력!
})

// recursion
function powerOf(x, n) {
  return n===1 ? x : x * powerOf(x, n-1);
  // n이 1이면? x를 주고 : 아니면 x * powerOf(x,n-1)을 실행해라!
}                             // call ourself 

// advanced recursion
function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}