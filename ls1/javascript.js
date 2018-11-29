// 1) Температура по Фаренгейту

var tc;
var tf;

tc = prompt("Введите температуру в гр/ц");
tc = parseFloat(tc);

tf = (9/5) * tc + 32;
alert("Температура по Фаренгейту - " + tf);

// 2) Переменные

var name;
var admin;

name = "Василий";
admin = name;
alert(admin);


// 3) Чему будет равно JS-выражение 1000 + "108"

var num;

num = 1000 + "108";

alert(num); // 1000108 - т.к цисло + строка = склеивание


