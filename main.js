//teacher's exercise
let number = prompt('Reqem daxil edin:');
let change = number.split(' ')
let num1 = change[0];
let num2 = change[1];
let a ;
a = num1;

num1 = num2;

num2 = a;


alert(num1 + ' ' + num2);

// Lesson-5 question-1
let price = prompt('999.99 formatinda qiymet daxil edin:');
let changee = price.split('.');
let manattype = changee[0];
let qepiktype = changee[1];
alert(manattype + ' manat ' + qepiktype + ' qepik');
 
//Lessin-5 question-2
let salary = prompt('Emek haqqinizi daxil edin:');
let decreased = (Number(salary)/13)*100;
alert(decreased);