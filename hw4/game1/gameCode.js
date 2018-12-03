var event, ok;
var res = {
    otv1: 0,
    otv2: 0,
    otv3: 0,
    otv4: 0
};

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if ( ok ) {
            res.otv1 = event;
        }
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                if ( ok ) {
                    res.otv2 = event;
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if ( ok ) {
                            res.otv4 = event;
                        }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if ( ok ) {
                            res.otv4 = event;
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                if ( ok ) {
                    res.otv3 = event;
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if ( ok ) {
                            res.otv4 = event;
                        }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if ( ok ) {
                            res.otv4 = event;
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

// Ввод окна

if ( event != -1 ) {
    var window1 = prompt("Введите номер окна: ");
    window1 = parseInt(window1);
    if ( isNaN(window1) ) {
        window1 = prompt("Это не число! Введите число:");
        window1 = parseInt(window1);
    }

// Какое окно открыть:

    if ( window1 == 1 && res.otv1 != 0 ) {
        alert(works.a00 + "Ваш ответ: " + res.otv1);
    }
    else if ( window1 == 1 && res.otv1 == 0 ) {
        alert(works.a00 + "Ваш ответ: Нет ответа");
    }
    else if ( window1 == 2 && res.otv2 != 0 ) {
        alert(works.b00 + "Ваш ответ: " + res.otv2);
    }
    else if ( window1 == 2 && res.otv2 == 0 ) {
        alert(works.b00 + "Ваш ответ: Нет ответа");
    }
    else if ( window1 == 3 && res.otv3 != 0 ) {
        alert(works.c00 + "Ваш ответ: " + res.otv3);
    }
    else if ( window1 == 3 && res.otv3 == 0 ) {
        alert(works.c00 + "Ваш ответ: Нет ответа");
    }
    else if ( window1 == 4 && res.otv4 != 0 ) {
        alert(works.d00 + "Ваш ответ: " + res.otv4);
    }
    else if ( window1 == 3 && res.otv4 == 0 ) {
        alert(works.d00 + "Ваш ответ: Нет ответа");
    }
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}