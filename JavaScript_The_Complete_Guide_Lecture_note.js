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