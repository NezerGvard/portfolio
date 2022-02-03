window.onload = function () { // функция для обновления
    var seconds = 00; //объявления перевенной
    var tens = 00; //объявления перевенной
    var appendTens = document.getElementById("tens") //привязка текстовых полей <span> к переменой через id
    var appendSeconds = document.getElementById("second") //привязка текстовых полей <span> к переменой через id
    var buttonStart = document.getElementById('button-start') //привязка кнопок <button> к переменой через id
    var buttonStop = document.getElementById('button-stop') //привязка кнопок <button> к переменой через id
    var buttonReset = document.getElementById('button-reset') //привязка кнопок <button> к переменой через id
    var Interval

    buttonStart.onclick = function (){ //(описание под программы)если нажата кнопки Старт, тогда на функция startTimer посылается сигнал с переодичностью в 1 сек
        clearInterval(Interval)
        Interval = setInterval(startTimer, 1000)
    }
    buttonStop.onclick = function (){ //(описание под программы)если нажата кнопка Стоп, тогда останавливается таймер
        clearInterval(Interval)
    }
    buttonReset.onclick = function () {//(описание под программы) очищает секундомер, через изменение переменных к изначальным значениям и передачи в дом html
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }
    function startTimer(){// начинается работу таймер
        tens++// переменая tens увеличивается на 1

            appendTens.innerHTML = tens// выводится значение переменной tens

        if (tens > 59) {// если tens больше 60 тогда:
            seconds++ // переменая seconds увеличивается на 1
            tens = 0 // изменяем значение переменной tens на 0
            appendTens.innerHTML = tens// выводится значение переменной tens
        }
        if (seconds >= 1){ // если значение переменной seconds больше или равняется 1 тогда:
            appendSeconds.innerHTML = seconds// выводится значение переменной seconds

        }// закрытие под программ
    }// закрытие под программ
}// закрытие основной функции программы































































