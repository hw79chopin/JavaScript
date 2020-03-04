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