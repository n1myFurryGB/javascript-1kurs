

// 1) Написать функцию, преобразующую число в объект.


var number;
number = prompt("Введите число");
number = parseInt(number); // Обрезает цифры после запятой если они есть

if ( number < 0 || number > 999 ) {
    number = prompt("Число должно быть больше 0 и меньше 999. Введите число");
    number = parseInt(number);
}

number = number.toString();

var arr = number.split('');

var numobj = {
    ed: 0,
    des: 0,
    sot: 0
};

if ( arr.length == 1 ) {
    numobj.ed = "Единицы: " + arr[0];
    alert(numobj.ed);
}
else if ( arr.length == 2 ) {
    numobj.des = "Десятки: " + arr[0];
    numobj.ed = " Единицы: " + arr[1];
    alert(numobj.des + numobj.ed);
}
else if ( arr.length == 3 ) {
    numobj.sot = "Сотни: " + arr[0];
    numobj.des = " Десятки: " + arr[1];
    numobj.ed = " Единицы: " + arr[2];
    alert(numobj.sot + numobj.des + numobj.ed);
}



