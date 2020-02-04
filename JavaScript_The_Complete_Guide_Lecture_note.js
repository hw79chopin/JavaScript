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

