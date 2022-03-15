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

// Lesson-7 question-1
let id = prompt ('enter product id:');
switch (id){
  case '1' : 
    alert ('Available 10 pcs.');
    break;
  case '2' :
    alert ('Available 256 pcs.');
    break;
  case '3' :
    alert ('Available 53 pcs.');
    break;
  case '4' :
    alert ('There are 3 available.');
    break;
  default :
    alert ('Out of stock');
}

// Lesson-7 question-2
let gender = prompt('Cinsiyyetinizi M ve ya F herfleri seklinde daxil edin: ');
switch (gender){
    case 'M' :
        alert('Your gender is male!');
    break;
    case 'F' :
        alert('Your gender is female!');
    break;
    default :
        alert('Duzgun daxil edin!');
}

//Lesson-7 question-3
let month = prompt('Ayin nomresini daxil  edin: ');
switch (month){
    case '1':
        alert('January');
        break;
    case '2':
        alert('February');
        break;
    case '3':
        alert('March');
        break;
    case '4':
        alert('April');
        break;
    case '5':
        alert('May');
        break;
    case '6':
        alert('June');
        break;
    case '7':
        alert('July');
        break;
    case '8':
        alert('August');
        break;
    case '9':
        alert('September');
        break;
    case '10':
        alert('October');
        break;
    case '11':
        alert('November');
        break;
    case '12':
        alert('December');
        break;
    default:
        alert('Duzgun daxil edin!');
}

// Lesson-7 question-ulduz
let date = prompt('Tarixi YYYY.MM.DD formatinda daxil edin: ');
let new_format = date.split('.');
let il = new_format[0];
let ay = new_format[1];
let gun = new_format[2];

if (ay == '01' || ay == '02' || ay == '03' || ay == '04' || ay =='05' || ay == '06' || ay == '07' || ay == '08' || ay == '09' || ay == '10' || ay == '11' || ay == '12'){
    switch (ay) {
    case '01':
        ay = 'January';
        break;
    case '02':
        ay = 'Febuary';
        break;
    case '03':
        ay = 'March';
        break;
    case '04':
        ay = 'April';
        break;
    case '05':
        ay = 'May';
        break;
    case '06':
        ay = 'June';
        break;
    case '07':
        ay = 'July';
        break;
    case '08':
        ay = 'August';
        break;
    case '09':
        ay = 'September';
        break;
    case '10':
        ay = 'October';
        break;
    case '11':
        ay = 'November';
        break;
    case '12':
        ay = 'December';
        break;
    default :
        ay = '---';
}
    alert(gun + ' ' + ay + ' ' + il + '-cu il');
}
else{
    alert('Yanlis deyer daxil edilib!');
}