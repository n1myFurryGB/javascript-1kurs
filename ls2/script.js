

// 1) Почему код даёт именно такие результаты?

alert("Пункт 1:");

var a = 1;
var b = 1;
var c;
var d;


c = ++a;
alert(c); // 2.      Выводит 2. т.к инкремент(++) стоит перед переменной, т.е сначала переменная увел. на 1, а потом присваивается.

d = b++;
alert(d); // 1.      Выводит 1. т.к инкремент(++) стоит после переменной, т.е сначала переменная присваивается, а потом увел. на 1.


c = (2 + ++a);
alert(c); // 5.      Выводит 5. Из пред. примеров a = 2. Тут инкремент(++) стоит перед переменной, т.е a увел на 1. В итоге 2 + 3 = 5


d = (2 + b++);
alert(d); // 4.      Выводит 4. Из пред. примеров b = 2. Тут инкремент(++) стоит после переменной, т.е сначала переменная присваивается. В итоге 2 + 2 = 4


alert(a); // 3.      Выводит 3. т.к при объявлении переменной a = 1, потом a два раза увел. на 1.  В итоге a = 3


alert(b); // 3.      Выводит 3. т.к при объявлении переменной b = 1, потом b два раза увел. на 1.  В итоге b = 3


// 2) Чему будет равен x в примере ниже?


alert("Пункт 2:");

var a = 2;

var x = 1 + (a *= 2); // Выводит 5 т.к сначала выполняются действия в скобках, т.е ((a *= 2) или (a = a * 2)) = 4. Потом 1 + 4 = 5

alert(x);


/* 3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    * если a и b положительные, вывести их разность;

    * если а и b отрицательные, вывести их произведение;

    * если а и b разных знаков, вывести их сумму;

      ноль можно считать положительным числом.
*/

alert("Пункт 3:");

var a;
var b;

a = prompt("Введите переменную 1: ");
b = prompt("Введите переменную 2: ");

a = parseInt(a);
b = parseInt(b);

if ( isNaN(a) ) {
    alert("Это не число!");
    a = prompt("Введите переменную 1: ");
    a = parseInt(a);
}

if ( isNaN(b) ) {
    alert("Это не число!");
    b = prompt("Введите переменную 2: ");
    b = parseInt(b);
}

if ( a >= 0 && b >= 0 ) {
    alert(a - b);
}
else if ( a < 0 && b < 0 ) {
    alert(a * b);
}
else if ( (a < 0 && b >= 0) || (a >= 0 && b < 0) ) {
    alert(a + b);
}


// 4) Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

alert("Пункт 4:");

var a;
a = prompt("Введите число от 0 до 15");
a = parseInt(a);

if ( isNaN(a) ) {
    alert("Это не число!");
    a = prompt("Введите переменную: ");
    a = parseInt(a);
}

if ( a < 0 ) {
    alert("Число должно быть от 0 до 15");
    a = prompt("Введите число от 0 до 15");
    a = parseInt(a);
}
else if ( a > 15 ) {
    alert("Число должно быть от 0 до 15");
    a = prompt("Введите число от 0 до 15");
    a = parseInt(a);
}

function numup() {
    if ( a == 15 ) {
        console.log("Переменная a = " + a);
        return;
    }
    console.log("Переменная a = " + a);
    a++;
    return numup();
}

switch (a) {
    case 1:
        numup();
        break;
    case 2:
        numup();
        break;
    case 3:
        numup();
        break;
    case 4:
        numup();
        break;
    case 5:
        numup();
        break;
    case 6:
        numup();
        break;
    case 7:
        numup();
        break;
    case 8:
        numup();
        break;
    case 9:
        numup();
        break;
    case 10:
        numup();
        break;
    case 11:
        numup();
        break;
    case 12:
        numup();
        break;
    case 13:
        numup();
        break;
    case 14:
        numup();
        break;
    case 15:
        numup();
        break;
    default:
        alert("a меньше 0 или больше 15");
}


// 5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

alert("Пункт 5:");

function sum(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}

function umn(a, b) {
    return a * b;
}

function del(a, b) {
    return a / b;
}

alert(sum(1, 7));
alert(min(5, 2));
alert(umn(2, 2));
alert(del(10, 5));


// 6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

alert("Пункт 6:");

var arg1 = prompt("Введите 1 число: ");
var arg2 = prompt("Введите 2 число: ");
var fct = prompt("Введите знак(+, -, *, /): ");
var operation;
var res;
var whatoper;

arg1 = parseInt(arg1);
arg2 = parseInt(arg2);

if ( isNaN(arg1) ) {
    alert("Это не число!");
    arg1 = prompt("Введите 1 переменную: ");
    arg1 = parseFloat(aarg1);
}

if ( isNaN(arg2) ) {
    alert("Это не число!");
    arg2 = prompt("Введите 2 переменную: ");
    arg2 = parseFloat(arg2);
}

switch (fct) {
    case '+':
        operation = '+';
        break;
    case '-':
        operation = '-';
        break;
    case '*':
        operation = '*';
        break;
    case '/':
        operation = '/';
        break;
    default:
        alert("Это не операция!");
        var fct = prompt("Введите знак(+, -, *, /): ");
}

function mathOperation(arg1_1 = arg1, arg2_2 = arg2, oper = operation ) {
    if ( oper == '+' ) {
        res = sum(arg1_1, arg2_2);
        whatoper = "сложение";
    }
    else if ( oper == '-' ) {
        res = min(arg1_1, arg2_2);
        whatoper = "вычитание";
    }
    else if ( oper == '*' ) {
        res = umn(arg1_1, arg2_2);
        whatoper = "умножение";
    }
    else if ( oper == '/' ) {
        res = del(arg1_1, arg2_2);
        whatoper = "деление";
    }
    return res;
}

alert("Результат равен: " + mathOperation() + ". Операция - " + whatoper);


// 7) * Сравнить null и 0. Попробуйте объяснить результат.

alert("Пункт 7:");

if ( null > 0 ) {
    alert("null больше 0");
}
else if ( null < 0 ) {
    alert("null меньше 0");
}
else if ( null == 0 ) {
    alert("null равен 0");
}
else if ( null >= 0 ) {
    alert("null больше или равен 0");  // JS использует абстрактный алгоритм сравнения для равенств. Если кратко - Если null < 0 принимает значение false, то null >= 0 принимает значение true. С точки зрения математики эьл логично. Если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему.
}
else if ( null <= 0 ) {
    alert("null меньше или равен 0");
}


// 8) С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

alert("Пункт 8:");

var val = prompt("Введите число: ");
var pow = prompt("Введите степень: ");
var num = 1;
var per;

val = parseInt(val);
pow = parseInt(pow);

if ( isNaN(val) ) {
    alert("Это не число!");
    val = prompt("Введите число: ");
    val = parseInt(val);
}

if ( isNaN(pow) ) {
    alert("Это не число!");
    pow = prompt("Введите степень: ");
    pow = parseInt(pow);
}

if ( pow < 0 ) {
    alert("Степень должна быть натуральным числом!");
    pow = prompt("Введите степень: ");
    pow = parseInt(pow);
}

per = val;



function power(val_1 = val, pow_1 = pow) {
    if ( val_1 == 0 ) {
        return 0;
    }

    if ( val_1 == 1 ) {
        return 1;
    }

    if ( pow_1 == 0 ) {
        return 1;
    }

    if ( pow_1 == 1 ) {
        return val_1;
    }
    val_1 = val_1 * per;
    num++;

    if ( num == pow_1 ) {
        return val_1;
    }

    return power(val_1, pow_1);
}

alert(power());






