
var otv;
var win = 0;

alert("Вы в игре \"Кто хочет стать миллионером?\"! Вам надо ответить на 10 вопросов.");

for (var i = 0; i <= 10; i++) {
    otv = prompt(que[i].qtext + que[i].a1 + que[i].a2 + que[i].a3 + que[i].a4);
    otv = parseInt(otv);
    if ( !(otv >= 1) || !(otv <= 4) ) {
        otv = prompt("Выберите вариант ответа от 1 до 4!\n" + que[i].qtext + que[i].a1 + que[i].a2 + que[i].a3 + que[i].a4);
        otv = parseInt(otv);
    }
    if ( otv == que[i].correct ) {
        alert("Правильный ответ! Ваш баланс: " + que[i].money);
        win++;
        if ( win == 10 ) {
            alert("Поздравляем! Вы - миллионер!!!");
        }
    }
    else {
        que[i].money = 0;
        alert("Это неправильный ответ! Вы проиграли!");
        break;
    }
}
