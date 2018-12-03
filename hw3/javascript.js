
// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100

console.log("Пункт 1:");

var number = 2;

while(number <= 100) {
    if( isN(number) ) {
        console.log(number);
    }
    number++;
}

function isN(num) {
    for (var i = 2; i <= num/2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}




// 2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:

console.log("Пункт 2:");

var num = 0;

do {
    if ( num == 0 ) {
        console.log(num + " - это ноль");
    }
    else if ( num % 2 == 0 ) {
        console.log(num + " четное число");
    }
    else {
        console.log(num + " нечетное число");
    }
    num++;
} while(num <= 10);


/*
3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
for(…){// здесь пусто}
*/

console.log("Пункт 3:");

for (var fnum = 0; fnum <= 9; console.log(fnum++)) {

}


/*

* Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

*/

console.log("Пункт 4:");

var p = 1;
var x = 'x';

while (p <= 20) {
    console.log(x);
    x += 'x';
    p++;
}

