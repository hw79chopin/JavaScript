/* 19. Introducing Variables & Constants
variables      */
let varname = "name"       // 이렇게 설정함
const varname = "wow"      // 변수를 바꿀 수 없음. 많이 사용하게 됨
  
 
 
 
 


/* 20. Declaring & Defining Variables */
let currentResult
/* Variable Naming
$, _ 로 시작하는 변수는 가능
중간에 _는 추천하지 않는다!
digit으로 변수 시작도 불가능!






/* 25. More on Strings
template literal: ` ` 이거 안에 ${ }를 쓰면 변수를 출력할 수 있음. ' ', " "에서는 사용 불가 */
let calculationDescription = `(${defaultResult} + 10) * 3 /2 - 1`;
// 브라우저에서 inspection한 뒤에 styles에서 white-space: pre; 해주면 스페이스, \n이 다 나온다.
\''         // string 속에 ' '을 출력하고 싶을 때. escape 코드!!!
alert();        // 팝업창 띄우는 명령어

// Code
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 /2 - 1`;
let errorMessage = 'An error \n' + 
                    'occurred!';

outputResult(currentResult, calculationDescription);






/* 27. Adding A Custom Function
함수를 밑에 저장해도 됨. JS는 한 번 훑은 다음에 코드를 실행하기 때문.
parameter = argument
함수 뒤에 ;을 붙여도 되는데 안 붙이는 게 국룰임
*/






/* 30. The (Un)Importance of Code Order 
변수를 사용하기 전에 let, const로 정의해주어야 사용가능하다. 
함수는 어디에 와도 상관이 없다.*/






/* 31. An Introduction to Global & Local Scope 
함수 속에서는 함수 밖에서 정의된 어떤 variable도 가져올 수 있다.
함수 내의 variable은 밖에서 사용할 수 없다.*/






/* assignment 2 */
const task3Element = document.getElementById('task-3');
function greet() {
    alert('Hi There');
}

function greetUser(userName) {
    alert('Hi ' + userName)
}

function combine(str1, str2, str3) {
    const combinedText = `${str1} ${str2} ${str3}`
    return combinedText
}

greetUser('Hyun');

task3Element.addEventListener('click', greet);






// 36. Converting Data Types
parseInt()      // int로 바꾼다
parseFloat()      // Float로 바꾼다






// 38. Splitting Code into Functions
``   //back ticks를 사용하면 variable을 쉽게 넣을 수 있다.
const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`; // 자동으로 str으로 변환한다.
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);






/* 42. More Core Data Types! 
objects: data를 grouping할 때 사용하는 매우 유용한 data type이다.
array: list of data */






// 44. Creating Objects
const logEntry = {};        /* 이렇게 {}로 생성!
                            property 생성하고 :로 value와 분리!






/* 46. Accessing Object Data    
object 뒤에 .을 입력하면 object 내 특정 property를 특정하겠다는 것






/* 48. undefined, null & NaN
"undefined" is a special type and the default value for undefined variables
"null" is actually of type object and never a default value of anything. */






/* 50. Importing Scripts Correctly with "defer" & "async" 
JS 파일을 하단에서 부르는 것보다 상단에서 부르는 거 훨씬 빠르다
JS를 load할 때 쓰는 속성은 2개!
    async: tell the browser to start loading the scripts as early as possible. 빨리 load 되는대로 실행시킴
    defer: 모든 HTML file이 parse 될 때까지 기다리고 순서대로 load를 한다.*/






/* 74. Introducing "if" Statements & Boolean (Comparison) Operators */






/* 81. Beyond true/ false: "Truthy" and "Falsy" Values */
if (something)      /* something이 non-empty string이기만 하면 if문이 진행된다. 굳이 boolean이 아니여도 된다.






/* 86. Adding More "if" Statements & A "Strong Attack"
Functionality */
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode ==='STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)






/* 90. Validating User Input */
promt('텍스트');        // user input 받기
isNaN();            // NaN인지 아닌지 설정






/* 93. Introducing the Ternary Operator
ternary operator: condition을 넣고 ?를 넣고 true일 때 값 : False일 때 값을 넣는다! */
const userName = isLogin? 'Max' : null

// 예시
let maxDamage = mode === MODE_ATTACK ? ATTACK_BALUE : STRONG_ATTACK_VALUE;

// 밑에 2개의 코드가 같은 뜻임
if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }

const maxDamage = mode === MODE_ATTACK ? ATTACK_BALUE : STRONG_ATTACK_VALUE;
const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;






/* 95. Logical Operator "Tricks" & Shorthands
# Boolean Tricks with Logical Operators
- ===, > etc. just generate new boolean values which are used in the comparison. 
- || and && generate NO booleans, they just treat the values before and after them as conditions  
- ||는 Boolean 결과를 반환하지 않는다!! 값을 그대로 반환할 뿐이다!!! 
- If the first value is truthy, the && operator ALWAYS returns the second value (second operand).
- If the first operand is falsy, && always returns the first operand, NEVER the second one.*/






/* 97. Working with the "switch-case" Statement */
switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;
      default:
          ev = {};
}






/* 98. Introducing Loops */
// for loop: Execute code a certain amount of times
for (let i=0; i<3 ; i+++)
{
    console.log(i);
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






/* 99. The "for" Loop */
// for loop
for (first; second; third) {
    /* first part: Initialize things for the loop, any expression
       second part: for loop을 진행시킬 조건
       third part: for lopp을 진행하면서 추가할 것*/
}       
for (let i = 0; i<3; i++) {
    console.log('------------');
}






/* 100. The "for-of" Loop 
of 뒤에는 숫자, boolean, object는 못 온다.
Str은 array의 한 종류여서 가능!*/






/* 101. The "for-in" Loop
logEntry의 key를 입력받고 싶으면 .가 아니라 []를 써야 한다*/
for (const key in logEntry) {
    console.log(`${key} => ${logEntry[key]}`);
  }






/* 103. Controlling Loops with "break" */
break;      /* stops the loop execution */






/* 104. Controlling Iterations with "continue" */
continue;   /* 다음 loop으로 넘어감 */






/* 105. More Control with Labeled Statements */
let j = 0;
  outerWhile: do {
    console.log('Outer', j);
    innerFor: for (let k = 0; k < 5; k++) {
      if (k === 3) {
        // break outerWhile;
        continue outerWhile; // dangerous! => Infinite loop!
      }
      console.log('Inner', k);
    }
    j++;
  } while (j < 3);






/* 106. Error Handling with "try-catch" - An Introduction */
if (i < 10 || i > 0) {
    throw { message: 'Invalid user input, not a number!'};
}






/* 108. Working with "try-catch" to Catch & Handle Errors */
try {
    let hyunWoo = getMax();
} catch (error) {
    console.log(error);
    hyunWoo = 100;
    alert('You enter sth wrong, default value is used.')
    throw error;
} finally {
    // error가 나든지 말든지 실행시키는 부분
}              // 이렇게 try, catch 문을 사용하면 error를 감지하고 알려준 뒤, 계속 시스템을 진행시킬 수 있다.






/* 112. ES5 vs ES6+ ("Next Gen JS") - Evolution of JavaScript 
ES: ECMA script






/* 113. var vs let & const - Introducing "Block Scope" 
shadow variable: function 내에서 global variable을 사용하는 것도 됨.
if 문에서 var로 변수를 만들어줘도 global variable이 됨
if 문에서 let으로 변수를 만들어주면 그 안에서만 작동 
Block Scope: { }에서 선언된 변수는 { } 내에서만 유효하다!*/






/* 114. Understanding "Hoisting" */
console.log(userName)
var UserName = "Max"
/* 이렇게 하면 error가 안 나고 undefined가 뜬다.
    var로 변수를 지정하면 맨 처음에 다 실행시킨다. 이게 바로 Hoisting 
    근데 이렇게 하면 가독성이 매우 떨어져서 잘 안 함*/






/* 115. Strict Mode & Writing Good Code 
redeclaring variable은 피해라! */
'use strict'    /* strict mode를 실행
                   변수 지정 안 된 것을 봐주지 않음
                   undefined 같이 built-in을 지정하는 것을 봐주지 않음 */






/*  117. Inside the JavaScript Engine - How the Code Executes
 Heap: Long-term memory
 Stack: Short-term memory. Execution context, manages your program flow  */
 





/* 119. Primitive vs Reference Values
Primitive values: String, Numbers, Booleans, null, undefined, Symbol
                  Easy to duplicates
                  Stored in memory (normally on Stack)
                  Are copied by value
Reference values: All other objects
                  Stored in memory(Heap)  
                  Copying a variable copies the pointer/reference
                  복사를 할 때 순간의 요소가 아니라 object 자체를 복사함 
                  대신 ... operator를 통해 복사하면 value를 copy함
const로 object을 설정해도 .push( )가 된다. 또 object의 property를 바꾸는 것도 가능하다. 왜?
객체에 저장한 것이 address이고 .push( )는 address는 건들이지 않기 때문!*/
 





/* 125. Parameters vs Arguments
 parameter: 함수 내에 parameter
 argument: 함수를 실제 실행했을 때 그 사이에 오는 것*/
 function sayHi(name) {
     alert("HI"+ name)
 }

 sayHi('BJ~');
 // name은 parameter, "BJ~"는 argument
 





/* 126. Functions vs Methods 
object 내에 function을 넣을 수도 있다.*/






/* 127. Functions are Objects! */
console.dir(함수이름);         // 뭔가 다른 것을 반환






/* 128. Function Expressions: Storing Functions in Variables */
const func = function startGame() {         // 함수 이름은 지워줘도 된다.
    console.log('Game is starting...')
};
// 이렇게 객체에 함수를 저장해줄 수 있다. 
// 함수가 =로 객체에 지정되면 global scope로 함수의 이름이 저장되지 않는다.
// function () {} 이거는 declaration, 객체에 저장하면 expression






/* 129. Function Expressions vs Function Declarations */
// 대신 function expression을 하면 위에서 함수를 부를 수가 없다.






/* 130. Anonymous Functions */
// 함수에 이름은 주자~
// Anonymous function: A function without a name assigned.






/* 133. Introducing Arrow Functions */
const functionname = (arg1, arg2) => {
    console.log('Hi')
}

const add = (a,b) => a+b;           // 이렇게 줄일 수 있음

const ternaryFunction = ( ) => 
condition 
    ? True_result 
    : else_condition 
    ? True_result2
    : True_result3;                 // 이렇게 줄일 수 있음






/* 136. Default Arguments in Functions 
2가지 parameter가 필요한데 1개만 넘겨줘도 error가 나지 않는다.
default value를 설정하려면 함수 설정할 때 parameter = sth으로 설정해주면 된다*/
const healthbody = (exercise, ingredient = protein) => {
    console.log(exercise, ingredient);
} 
// default value는 보통 함수 뒤에 배정한다.
//또한 앞에서 사용한 parameter를 사용해도 된다.






/* 137. Introducing Rest Parameters ("Rest Operator") */
const sumUp = (a, b, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
/* 얼마나 많은 parameter가 들어올지 모를 때 사용하는 방법!  
...를 사용하면 많은 parameter가 들어와도 array로 합친다. 
... 앞에는 parameter를 둘 수 있지만 뒤에는 둘 수 없다. */

// function으로 define하면 arguments란 것을 쓰면 따로 ...parameter를 안 줘도 된다.
const subttractUp = function() {
    let sum = 0;
    for (const num of arguments) {  // 안 쓰는 것을 추천
        sum -= num;
    }
    return sum;
}






/* 139. Understanding Callback Functions */
// function 내에 parameter로 function을 넣을 수도 있음! like addEventListener()
// 예시
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result);
  };
  
  sumUp(showResult, 1, 5, 'fdsa', -3, 6, 10);
  sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
  console.log(subtractUp(1, 10, 15, 20));






/* 140. Working with "bind()"
object에 쓰는 method
.bind( ): prepares the function 
미리 알고 있는 parameter를 입력해줄 수 있다.
prepares for execution 
정리: allows us to preconfigure functions in places where we need to pass in a value but we also don't want to directly execute a function.*/






/* 141. Adding bind() to the Calculator Project */
// 예시
function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
      currentResult += enteredNumber;
      operator = '+';
    } else if (operation === 'SUBTRACT') {
      currentResult -= enteredNumber;
      operator = '-';
    } else if (operation === 'MULTIPLY') {
      currentResult *= enteredNumber;
      operator = '*';
    } else {
      currentResult /= enteredNumber;
      operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
  }
  
  addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
  subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
  multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
  divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));






/* 142. call() and apply() */ 
// 일단은 들어만 둬~

/* Wrap up
callback function
bind( )
arrow function
function in function
rest operator */






/* 146. What's the "DOM"? 
# JS와 Browser는 항상 interact
  rendering: HTML을 입력받아 해석해서 모니터로 출력해주는 작업!
  JS는 Hosted Language -> browser가 JS를 위한 환경을 제공
  나아가 Browser는 다른 API도 많이 제공한다.
  browser가 JS가 HTML code와 interact하게 도와주는 게 DOM!
  document object도 JS와 HTML page가 interact하는 object
# DOM = Document Object Model
          It's part of the APIs exposed to JS by the browser window object
document: Root DOM Node */






/* 147. Document and Window Object */
// window에 alert function이 존재!







/* 149. Nodes & Elements - Querying the DOM Overview
# querySelector(), getElementById()
 - Return single elements (first match)
 - Different ways of querying elements (by CSS selector, by ID)
# querySelectorALL(), getElements ByTagName()...
 - Return collections of elements (array-like-objects): NodeList
 - Different ways of querying elements
# Nodes
 - the objects that make up the DOM
 - HTML tags are element nodes
# Elements
 - one type of nodes */







/* 150. Selecting Elements in the DOM */
document.querySelector(CSSselector);       // 처음에 매칭되는 것만 함
document.getElementById(ID);
document.querySelectorAll(CSSselector);
document.getElementsByClassName(CSSClass);
document.getElementsByTagName(HTMLTAG);







/* 152. Exploring and Changing DOM Properties */
const p = document.getElementById('id-name')
p.textContent = '새로운 텍스트';    // 이렇게 하면 text가 바뀜
p.iD        // id를 반환
p.className       // class 이름을 반환

const h1 = document.querySelector('h1')
h1.style.color = 'white';
h1.style.backgroundColor = 'red';       // 이렇게 바꿀 수도 있음






/* 153. Attributes vs Properties
- browser는 user가 입력한 attributes로 DOM object를 만든다 
- attribute: thing in you HTML code, HTML text
- property: value stored in the object created based on your HTML code */
h1.setAttribute('value', 'some other default text')     // 이렇게 바꿀 수도 있음






/* 155. Traversing the DOM - Overview 
# traversing the DOM?
 - It means that once you selected one element, one node therefore, you might be intered in diving into 
   all of its child nodes
 - 모든 node를 선택하는 대신 element를 고른 뒤 children, siblings로 move하는 것! */
 <div>
   <p>
     A <em> child! </em>
   </p>
 </div>    /* 
# Child
 - direct chile node or element
 - 여기서 p는 div의 direct child다. em은 child는 아니다.

# Descendant
 - direct or indirect childe node or element
 - 위의 예시에서는 p, em 모두가 div의 descendant다.

# Parent
 - direct parent node or element

# Ancestor
 - direct or indirect parent node/element  */







/* 156. Traversing Child Nodes */
const ul = document.querySelector('ul');
ul.children[1]      // qurerySelector는 첫 번째 애만 반환하기 때문에 children에 들어가려면 이렇게 해야함
ul.childNodes
ul.lastElementChild
.firstElementChild
.firstChildChild






/* 157. Using parentNode & parentElement */
// querySelector로 지정한 뒤 closest로 가장 가까운 ancestor를 선택가능!
const liFirst = documnet.querySelector('li');
liFirst.closest('body')
liFirst.closest('header')






/* 158. Selecting Sibling Elements */
// sibling: 같은 indent내에 있는 애들
.previousElementSibling
.nextSibling
.nextElementSibling






/* 159. DOM Traversal vs Query Methods
# Query methods
 - documnet.querySelector와 같은 방법

# Dom Traversal
 - document.body.firstElementChile와 같은 방법 */






/* 160. Styling DOM Elements
- Via style Property
- Via className
- Via classList
- className을 바꿀 수도 있고 추가할 수도 있고 등등*/
const section = document.querySelector('section');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  ~~~
})
section.classList.contains();     // class가 있는지 없는지 확인
section.classList.add()         // class 추가
section.classList.remove()         // class 제거
section.classList.toggle()         // class 껏다 키기






/* 161. Creating Elements with JS - Overview */
// 1. HTML을 JS에 쓸 수 있다.
// 2. document.createElement()를 사용!






/* 162. Adding Elements via HTML in Code */
const section = document.querySelector('section');
section.textContent
section.innerHTML = '<h2>A new title </h2>';    // tags 속에 있던 모든 nodes(tags)를 다 없앤다.

const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Item 4</li>'   // 단점: 모든 innerHTML를 re-render한다. performance가 떨어진다. 그래서 기존의 user input도 사라진다.
list.insertAdjacentElement('beforeend', '<p>New Text!</p>')     // 위의 단점을 해결하는 방법! parameter [beforebegin | afterbegin | beforeend | afterend]. user input이 안 사라진다.






/* 163. Adding Elements via createElement() */
document.createElement('태그이름');       // create new DOM object
// 태그를 만들고 Insert를 해야지 웹 상에 보인다.
태그이름.appendChild('만든태그이름');       // 이렇게 해야 웹 상에 표시된다.






/* 164. Inserting DOM Elements */
태그이름.append(텍스트);          // Internet Explorer에는 못 쓴다.
태그이름.prepend(태그이름);       // 맨 앞에 붙일 수 있음.
태그이름.lastElementChild.before(다른태그이름);       // existing 태그 앞에 삽입하기
태그이름.lastElementChild.after(다른태그이름);       // existing 태그 앞에 삽입하기
태그이름.insertAdjacentElement('afterend');         // element를 내가 고른 element뒤에 배치




/* 165. Cloning DOM Nodes */
태그이름.cloneNode(false);          // true하면 chile element와 다른 전부를 복사함.





/* 167. Removing Elements */
태그이름.remove();        // remove from the DOM, rendered page
태그이름.parentElement.removeChild();       // 원하는 child를 remove





/* 171. Selecting the Modal and "Add" Button */
const addMovieModal = document.getElementById('add-modal');
const addMovieModal = document.querySelector('#add-modal');
const addMovieModal = document.body.children[1];
// 이렇게 3가지 방식으로 선택할 수 있다.
const startAddMovieButton = document.getElementById('header button');
const startAddMovieButton = document.getElementById('header').lastElementChild;
// 이건 2가지 방식으로 선택가능






/* 173. Controlling the Backdrop */
classList.toggle('클래스이름', true);       // 클래스가 존재하면 제거하고, 존재하지 않으면 추가한다.
                                           // true: 클래스 값을 추가, false: 클래스 값을 제거
/* 기본 아이디어
1. querySelector / getElementbyId로 HTML의 CSS element를 가져와서 const에 저장해주고
2. 저장된 객체에 addEventListener를 사용해서 click 했을 때 무슨 변화가 있을지 
3. 함수로 만들어준다. 여기서 toggle은 class를 생성해주고 없애주는 역할
.~~~ 는 클래스 지정이고
#~~~ 는 id 지정이고
~~~ 그냥 쓰면 tag 지정이다!



/* 174. Fetching and Validating User Input */
// querySelector는 태그 이름을 가져가는 친구
.trim()     // remove excess whitespace at the beginning and at the end of the input






/* 175. Creating a Movie in JavaScript & Clearing the Input */
/* querySelectAll로 모든 input을 선택해서
[0].value, [1].value, [2].value로 input값을 const에 저장해주고
input값 잘 넣었는지도 확인한 뒤
empty array object 만들고 input을 object에 저장한 뒤 array에 push!
그리고 창 닫을 때 input값 비워주기!






/* 176. Rendering Movie Items on the Screen */
/* DOM style 바꾸기
위처럼 toggle을 통해서 class 이름을 추가 or 삭제해서 UI를 바꿔줄 수도 있고
DOM의 style을 바꾸는 방식으로도 interactive하게 UI를 조정할 수 있다. */
entryTextSection.style.display=  'none';
/* 많은 웹에서 사용하는 장바구니, 추천 상품 등에 쓰는 방법인 것 같음.
우선 기본으로 띄워지는 창이 input이 들어가면 (length가 0이 아니면) 사라지게 DOM으로 style.display를 변경하고
그 input에 따른 새로운 element를 만들어준다! (기존 HTML 파일에는 <ul> 태그만 있고 나머지는 비어있음)
<div> 태그에 class 이름을 추가하여 innerHTML로 새로운 값들을 넣어준다!
그리고 마지막에 기존 HTML element에 append하면 끝!
*/







/* 177. Deleting Movie Elements
삭제하고 싶은 태그를 id, query로 지정해주고
그것을 클릭했을 때 child를 remove 해주는 형식으로 삭제한다! 
전체 데이터를 담고 있는 object에서도 삭제해주는 거 잊지 말고!
*/






/* 178. Showing & Hiding the "Are you sure?" Dialog 
toggle하는 것을 add랑 remove로 바꿔서 함수를 2개로 만들어주고
id로 element를 불러와서 누르는 거에 따라서 visible하게 바꾸고 toggleBackDrop 바꾸는 방식으로 Show & Hide
*/






/* 180. Finishing the App */
/* 함수 내에 addEventListener를 넣으니까 계속 생성이 되고
나중에 Yes를 click했을 때 전부 다 실행이 되서 다 날라가게 되는 문제가 있었다!
removeEventLister를 넣어서 Event를 없앤다!!!*/
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






/* 181. Wrap Up */
/* 배운 것들
Being able to select elements in different ways
Being able to traverse the DOM select child elements
Changing styles, assign classes, remove, add, swap elements*/





/* 183. Module Introduction
Creaing Arrays
Working with Arrays
Array Methods
Other iterables */






/* 184. What are "Iterables" and "Array-like Objects"?
# Iterable: for-of loop에 쓴당
# Array-lie object: length property와 index가 있는 것  */






/* 185. Creating Arrays */
const numbers = [1,2,3];    // 가장 심플한 방법
const moreNumbers = new Array();    /* [] 이렇게 생성됨
대신 이 방법을 쓰고 1개의 single number만 전해주면 empty array with 'argument' length Array가 나온다.*/
const moreNumbers = Array();        /* new를 생략해줘도 된다.   */
const yetMoreNumbers = Array.of(1,2);     // 이렇게도 생성가능
const listItems = document.querySelectorAll('li');
const arraylistItems = Array.from(listItems);           // Array.from은 iterable이나 array-like object를 array로 바꿔준다.






/* 186. Which Data Can You Store In Arrays?
별거 다 넣을 수 있다.
array는 index-based이다! */






/* 187. push(), pop(), unshift(), shift() - Adding & Removing Elements */
arrayName.push('');       // array에 element 맨 뒤에 추가하기
arrayName.unshift('');      // array에 element 맨 앞에 추가하기
arrayName.pop();          // array 맨 끝에 element 제거하기
arrayName.shift();        // 맨 처음 element를 제거한다.
arrayName[인덱스] = '텍스트';   // 인덱스로 element를 replace한다. 인덱스가 arrray length를 넘어가면 empty space들이 만들어진다 -> 거의 안 씀






/* 188. The splice() Method */
arrayName.splice(startIndex, howMany, addElement1, addElement2);       // startIndex부터 howMany에서 주어진 개수만큼 element를 삭제한다. 그 뒤에 addElements를 추가한다.
arrayName.splice(0);      // array를 다 없앤다. 그리고 없어진 element를 반환하다.






/* 189. Selecting Ranges & Creating Copies with slice() */
const newArray = arrayName.slice();        /* .slice()는 기존 array를 복사해서 새로운 array로 돌려준다.
                                               이를 통해서 기존 array에 element를 건들여도 새로운 array는 영향을 미치지 않게 된다.*/
newArraya.slice(startIndex, endIndex);      // startIndex에서 endIndex까지 array를 slicing해서 새로운 array로 반환한다.
newArraya.slice(startIndex);            // endIndex가 없으면 startIndex부터 끝까지 slicing한다.






/* 190. Adding Arrays to Arrays with concat() */
const newArray = oldArray.concat([1,2,3]);          // push( )는 array를 한 element로 앞에 넣는다면 concat( )은 array의 element를 각각 뒤에 넣은 새로운 array를 반환한다.







/* 191. Retrieving Indexes with indexOf() /& lastIndexOf() */
arrayName.indexOf(element);        // element의 첫 번째 index를 반환한다. 못 찾으면 -1을 반환한다.
newArrarrayNameay.lastIndexOf(element);        // element의 첫 번째 index를 뒤에서부터 찾아서 반환한다. primitive value에는 잘 먹히나 reference value에는 잘 안 먹힌다.






/* 192. Finding Stuff: find() and findIndex() */
arrayName.find((arguemnt1, arg2, arg3) => {});       /* argument에 function이 와도 된다. 3개의 argument가 가능하다.
                                   첫 번째 argument: single object of that array
                                   두 번째 arguemnt: index of the single element
                                   세 번째 argument: full array 
                                   함수를 arrayName의 모든 element에 적용
                                   find는 copy를 만들지는 않는다 */
arrayName.findIndex();          // matching element의 index를 반환한다.
// 예시
const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personData);





/* 193. Is it Included? */
arrayName.includes();        // primitive value에 적합!






/* 194. Alternative to for Loops: The forEach() Method */
arrayName.forEach((arg1, index, arg2) => {function을쓰자;});         /* for-of loop 대체품! arg1: for loop의 element, index은 index






/* 195. Transforming Data with map() */
arrayName.map();           // map()은 taking an array, run a function하고 element를 바꾼 새로운 array를 반환!! 






/* 196. sort()ing and reverse()ing */
arrayName.sort();         // array를 string으로 바꾸고 sort한다.
arrayName.reverse();      // 반대로 sort한다.






/* 197. Filtering Arrays with filter() */
arrayName.filter((arg1, index, arg2 ) => {});       // 기존 array에 손대지 않고 새로운 array를 반환한다. arg1은 찾고 있는 value, index는 index, arg2는 original array이고 잘 안 쓴다.







/* 199. The Important reduce() Method */
arrayName.reduce((preValue, curValue, curIndex, originArray) => preValue + curValue, 0);             // 앞에 두 개 arguments를 많이 쓴다! 0은 initial value다!
// reduce()는 array를 simpler value로 줄인다.
/* reduce() executes the function on the every element in the array
preValue는 첫 번째 execution에서만 initial value가 정해져있으면 initial value가 없으면 undefined이다. 
curValue는 array의 first element다.
두 번째 execution부터는 preValue가 이전 return 값이고 curValue는 다음 element이다.
Reduce function은 array내의 values를 합쳐 single value를 만드는 데 정말 유용하다. */






/* 201. Arrays & Strings - split() and join() */
data.split('');         // split 하기! python3랑 syntax가 같음
data.join('');          // join 시키기! str을 만든다.default로 ,로 구분함.






/* 202. The Spread Operator (...) */
// 기존 array를 변동해도 복사한 array는 바뀌지 않는다.
// .min( )처럼 array를 argument로 받지 않는 메소드에 ...를 쓰면 굉장히 유용하다!!! to pull elements from the array






/* 203. Understanding Array Destructuring */
const [ newArray1 , newArray2, ...otherInfo ] = oldArray;    // array destructuring!






/* 204. Maps & Sets - Overview */
/* three major iterable data structure
1. Arrays
2. Set
3. Maps           */






/* 205. Working with Sets */
const newSet = new Set();      // 이 방법으로만 Set을 만들 수 있음
newSet.has();            // argument가 있는지 없는지 확인. boolean으로 반환
newSet.add();            // Set에 argument를 추가!
newSet.entries();        // return iterable. entry는 같은 value가 2번 반복된 array다.
newSet.delete();         // set에서 삭제하기!






/* 206. Working with Maps */
const newMap = new Map();         // key, value 형태로 넣어줘야 함! Key has to be an object.
const newMap = new Map([[person1, [{date: 'yesterday', price:10}]]]);
newMap.set();           // 새로운 entry 넣어주기, key, value 형태로 넣어줘야 함!
newMap.keys();          // key를 얻을 수 있다.
newMap.values();          // value를 얻을 수 있다.
newMap.has();           // 특정 key가 map에 있는지 확인
for (const [key, value] of newMap.entries()) {
  console.log(key, value);
}                       // 이렇게 정보를 뽑을 수 있다!

for (const key of newMap.keys()) {
  console.log(key);
}

for (const value of newMap.values()) {
  console.log(value);
}






/* 207. Maps vs Objects
Maps: key로 어떤 value든 가능하다!      
      large data에서 성능이 좋다.
      자주 data를 수정할 때 성능이 더 좋다.
Objects: key로 str, number, symbols만 가능하다.
         small, medium data에 좋다.        
         생성하기 빠르다.     */






/* 208. Understanding WeakSet */
// 자주 안 쓴다~
let person = {name : 'Hyun'};
const persons = new WeakSet();          // WeakSet에는 object만 넣을 수 있음
persons.add(person);
persons.method();                 // 쓸 수 있는 메소드가 한정됨 (add, delete, has)






/* 209. Understanding WeakMap */
const personData = new WeakMap();
personData.set(person, 'Extra info!');






/* 213. What's an Object? */
// Core data structure in JS





/* 216. Adding, Modifying & Deleting Properties */
person.isAdmin = ''     // 이렇게 property를 추가할수 있다.
delete person.age;      // 이렇게 property를 없앨 수 있다.






/* 217. Special Key Names & Square Bracket Property Access */
/* keys는 무조건 str으로 바뀐다. 
key name에 띄어쓰기, - 를 쓰고 싶으면 " " 따옴표 내에 넣으면 된다.
그럼 어떻게 property를 부르나?
object.property 이 방법으로는 못 부른다.
object['key name'] 이렇게 부를 수 있다. 따옴표를 꼭 넣어야 한다.*/ 






/* 218. Property Types & Property Order */
/* Key value로 숫자를 넣으면 부를 때
object.property는 못 쓰지만
object[key] 이렇게 써도 된다!
object['key'] 이렇게 써도 된다!        */






/* 219. Dynamic Property Access & Setting Properties Dynamically */
/* User input 같은 것을 Keyname으로 정해주고 싶으면 */
const object = {
  [userInputKeyName] : '..',
  age: 30
};
// [ ]를 사용하면 dynamic하게 property에 접근, 추가할 수 있다.






/* 220. Demo App & Shorthand Property Syntax */
// key name과 value name이 같으면 그냥 key name만 써도 된다.






/* 221. Rendering Elements based on Objects */
/* Flow
const.classList에서 'visible' class를 추가해서 display=none을 무력화시켜주고
.innerHTML = '';로 clear 해주고
document.createElement('')해서 <li> element를 만들어주고
const.append()를 통해서 만들어준 element에 object를 추가해주자 */






/* 222. for-in Loops & Outputting Dynamic Properties */
/* Key-value combination을 어떻게 render할 것이냐  */
  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;   // 이렇게 할 수 있다.
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });






/* 223. Adding the Filter Functionality */
// .filter( ): array의 모든 element에 대해서 function을 실행시킴 
const renderMovies = (filter = '') => {
const filteredMovies = !filter
? movies
: movies.filter(movie => movie.info.title.includes(filter));
};






/* 224. Understanding "Chaining" (Property & Method Chaining) */
// multiple .(dot)을 사용하는 것





/* 225. The Object Spread Operator (...) */
////////////////////////////////// spread operator를 사용하면 address를 공유해서 기존 object의 property value가 바뀔 때 같이 바뀌는 것을 막을 수 있다./////////////////////////////////
// copy를 만드는 거다!!!
// 근데 spread operator를 사용해도 속에 array가 있으면 그것은 똑같이 address를 공유하기 때문에 기존 object value 변경에 따라 바뀐다. 
const person3 = {...person, age:29, hobiies:[...person.hobbies]};   // 이렇게 하면 hobbies를 또 지정해주면 기존 object에 영향을 받지 않는다.






/* 226. Understanding Object.assign() */
Object.assign();          // target을 입력하고 overwrite하고 싶은 property를 입력하면 된다.






/* 227. Object Destructuring */
// key-value pair를 빼서 다른 variable에 저장!
const { info, ...otherProps } = movie;       //  오른쪽에 object 이름을 놓고 { } 안에는 그 object에서 extract하고 싶은 property를 놓는다.
const { info: newName } = movie;       // 새로운 이름에 object의 property를 저장하고 싶을 때!






/* 228. Checking for Property Existance */
if ('property' in objectName) {

};       // object에 property 확인할 떄~ in operator하기!
if (movie.propName === undefined) { };       // 이렇게 할 수도 있다.






/* 229. Introducing "this" */
props.toUpperCase();
//////////////////////////////////// object 내에서는 arrow function을 쓰면 안 된다!///////////////////////////////
//////////////////////////////////// arrow function을 쓰면 this는 global variable을 가져옴!///////////////////////////////
const newMovie = {
  info: title,
  id: Math.random().toString(),
  getFormattedTitle: function () {
    return this.info.dtitle.toUpperCase();
  }
};
this      // this는 함수를 호출하는 객체를 의미!






/* 230. The Method Shorthand Syntax */
// 그냥
functionname() {
  return this.info.title  
};     // 이렇게 object내의 method를 지정해줄 수도 있다.






/* 231. The "this" Keyword And Its Strange Behavior */
// method를 부르는 객체가 없으면 undefined되는 문제가 있다. 객체가 없으면 window가 객체로 나온다.
// bind( )를 쓰면 해결할 수 있다!
let { getFormattedTitle } = movie;
getFormattedTitle = getFormattedTitle.bind(movie);
let text = getFormattedTitle() + ' - '; 
// 이렇게 하면 된다!





/* 232. call() and apply() */
methodName.call(objectName);        // bind( ) 대신 쓸 수 있는 것! arguments를 많이 넣을 수 있다.
methodName.apply(objectName);       // 총 2개의 arguments를 가진다. 두 번째 argument는 array여야 한다!






/* 233. What the Browser (Sometimes) Does to "this" */
// 일반 function () {}은 함수의 this는 그 함수를 trigger한 DOM element다.






/* 234. "this" and Arrow Functions */
// arrow function은 this를 모른다. arrow function can fix strange this behavior
// function keyworkd로 function을 만들면 this가 function 내에 머물기 때문에 object의 다른 property를 부를 수가 없다.







/* 236. Getters & Setters */
// getter는 object 내 property가 호출되었을 때 쓰이는 함수고
// setter는 맨 처음에 지정해줄 때 사용되는 함수다. set은 val argument가 필요하다.
// read-only property를 만들거나, extra validation을 하거나, default transformation을 할 때 사용가능하다.
// 예시
const newMovie = {
  info: {
    set title(val) {
      if (val.trim() === '') {
        this._title = 'DEFAULT';
        return;
      }
      this._title = val;
    },
    get title() {
      return this._title;
    },
    [extraName]: extraValue
  },
  id: Math.random().toString(),
  getFormattedTitle() {
    console.log(this);
    return this.info.title.toUpperCase();
  }
};

newMovie.info.title = title;
console.log(newMovie.info.title);






/* 242. Defining & Using a First Class */
class Product{} // class 생성은 앞글자 대문자가 국룰
new Product() // class 부르려면 이렇게 한다






/* 243. Working with Constructor Methods */
// class의 새로운 instance를 만들 때마다 consturctor( )가 실행된다.
class Product {
constructor() 
}
// constructor에서 이름을 다 지정해주기 때문에 mistype 문제가 줄어든다.
// object이 만들어졌을 때 바로 실행할 logic을 constructor로 지정해준다!






/* 245. Using & "Connecting" Multiple Classes */
// class의 순서는 중요하지 않다.
 





/* 246. Binding Class Methods & Working with "this" */
// 와우 이제부터 뭔가 어려워지는군






/* 249. Static Methods & Properties
# Static Field / Property / Method
 - Defined with static keyword *
 - Only accessible on class itself 
 - 같은 data를 기반으로 작동

# Instance Field / Property / Method
 - Only accessible on instances based on class 
 - 클래스의 인스턴스 없이 호출이 가능하다! 대신 인스턴스에서는 호출 할 수 없다!
 - 같은 구조를 가지지만 data가 다른 것을 생성할 때 사용
 - 클래스 자체에 할당되었기 때문에 클래스의 인스턴스를 통해서는 호출될 수 없으며 클래스를 통해 호출해야 한다.
 - good idea if you want to share some functionality across different parts of your application  */






/* 253. Implementing Inheritance */
class ShoppingCart extends Component    // 이런식으로 Component 클래스를 상속 받을 수 있다.
// 상속 받는 클래스는 constructor가 없어도 된다. 
super  // 를 사용하면 parent class의 constructor를 부른다!






/* 256. super() Constructor Execution, Order & "this" */
// 뭔 개소리야






/* 258. Private Properties */
// #을 붙이면 private property로 바꾼다.
// 언제 private property를 쓰면 좋은가?
// Should be used internally only할 때! (e.g loggedInUsers inside of Auth class)
// class 안에서만 쓸 수 있는 property 이름이다~
// private property를 지정하려면 우선 field를 지정해야 한다.






/* 260. The "instanceof" Operator */
objecteName instanceof ClassName      // True이면 object가 Class에서 나온 거!






/* 261. Built-in Classes */
new Object();
new Array();
[]      // 이것을 더 많이 선호하기는 함






/* 262. Understanding Object Descriptors */
Object.getOwnPropertyDescriptor();    // metadata를 보여준다. 나아가 할 수 있는 것들을 보여준다.
Object.defineProperty(person, 'name', {
  configurable: true,
  enumerable: true,
  value: person.name,
  writable: false
});              // property를 이렇게 지정해줄 수도 있다. Lock 할 수 있다.





/* Quiz */
// "Fields" are in the end simply translated to properties you would otherwise set up in the constructor method.






/* Wrap up */
/* Object, OOP
What is Classes -> New 키워드로 class 생성!
constructor
inheritance






/* 267. Constructor Functions vs Classes & Understanding "new"  */
class Person {
    name = 'Hyun';
    constructor() {
        this.age = 30;                  // 이렇게 constructor를 지정하는 게 
    }
    greet() {   
        console.log( 'Hi' )
    }
}

function Person {
    this.age = 30;
    this.name = 'Hyun'                 // 이렇게 object 생성하는거랑 같으뮤!
    this.greet = function() {
        console.log('Hi')
    }
}

const person = new Person();          // new keyword로 constructor function을 부른다







/* 268. Introducing Prototypes */
// 정의하지 않은 method들을 불르면 __proto__에 있는 method인지 확인
// base class로 계속 들어간다.
// prototype은 function object에만 존재한다.






/* 273. Methods in Classes & In Constructors */
// object내 method를 공유한다. address가 같다!






/* 275. Setting & Getting Prototypes */
const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
});      // 이렇게 object를 만들 수도 있음
student.name = 'Hyn';
Object.defineProperty(student, 'age', {
  value = 26
});         // 이렇게 property를 만들 수도 있음.





/* 289. Using "dataset" (data-* Attributes) */
// HTML에서 data- 이렇게 쓰여져 있는 애들은 다 'dataset' property에 저장된다.






/* 291. Working with Element Sizes & Positions */
$0.getBoundingClientRect()    // console에 입력하면 DOM Rect를 볼 수 있음
document.documentElement.clientHeight
document.documentElement.clientWidth    // 가장 실용적인 높이, 너비를 알려줌 






/* 293. Positioning the Tooltip */
// 새로운 팝업창?을 띄울 때 위치를 고려해서 띄워줄 수 있는데 그때 scroll한 거리도 고려해줘야 한다.






/* 294. Handling Scrolling */
element.scrollIntoView({behavior: 'smooth'});        // 해당 element로 scroll해주는 개꿀 method. 애니메이션도 넣을 수 있음






/* 295. Working with <template> Tags */
// <template>: 바로 render하지는 않지만 JS에 의해서 render가 될 tag!
const tooltipTemplate = document.getElementById('tooltip');
const tooltipBody = document.importNode(tooltipTemplate.contentEditable, true);
tooltipBody.querySelector('p').textContetn = this.text;
tooltipElement.append(tooltipBody);
// 요로로콤 사용할 수 있다.






/* 296. Loading Scripts Dynamically */
//.createElement('script')로 dynamic하게 script를 생성할 수 있다.
// JS 파일을 부를 때 defer의 의미: 모든 HTML parsing이 끝난 다음에 부른다는 것!






/* 297. Setting Timers & Intervals */
setTimeout(func, 3000);            /* 첫 번째 argument: timer가 끝나면 실행될 함수
                                      두 번재 argument: 시간, ms단위*/
setInterval(func, 2000);           /* 주기적으로 함수를 실행 */
clearInterval();              /* Interval 멈추기 */
clearTimeout();               /* 타이머 멈추기 */  






/* 298. The "location" and "history" Objects */
location.href = "www."          // 새로운 사이트로 접속
location.replace('')            // 다른 사이트로 바꿈
history.back()                  // 뒤로 돌아감
history.forward()               // 앞으로 감
history.length                  // 유저가 얼마나 많은 step을 이 탭에서 했는지 보여줌






/* 299. The "navigator" Object */
navigator          // browser과 operating system이 상호작용할 수 있게 해줌
navigator.userAgent         // 유저가 쓰는 browser를 알 수 있음
navigator.geolocation.getCurrentPosition()      // 유저의 위치를 알 수 있음







/* 300. Working with Dates */
new Date()        // 현재 시간과 timestamp를 반환
.getDate()
.getDay()
.getTime()






/* 301. The "Error" Object & Constructor Function */
throw new Error('Sth went wrong!')      // custom error handling하는데 중요!어디서 error가 발생했는지도 보여준다. 
console.dir()           // full access to whatever in that parenthesis
