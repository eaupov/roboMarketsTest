# [Ссылка на проект](https://eaupov.github.io/roboMarketsTest/dist/)

## Команды сборки

Developer mode
```
npm run dev
```

Production mode
```
npm run build
```

Сборка svg-спрайтов
```
npm run svgSprites
```

## Описание проекта

Тестовое задание разделено на 3 части.

### 1 часть

Задача: сверстать страницу по макету, адаптировать вёрстку под планшет и мобильные экраны.
rПри вёрстке потребуются навыки работы с позиционированием, текстом, тенями, градиентами, добавление адаптива. Так же будет проверено ваше владение инструментами программы Adobe Photoshop или любого другого ПО, которое работает с макетами в формате .psd.
Не нужно тратить много времени на Pixel Perfect, небольшие отклонения допускаются, но явных отличий быть не должно. 
Адаптивность будет проверяться по ширине 960px, 768px, 480px, 375px, 320px, кроссбраузерность - в Chrome, Safari и Firefox последних версий.
В других вопросах вы не ограничены, вид страницы в адаптиве остаётся на ваше усмотрение. Решение о применении препроцессоров или анимации также остаётся за вами.


### 2 часть

Необходимо написать функцию, которая бы выводила в консоль время часового пояса UTC. Если время больше 12:00, но меньше 18:00, то вывести в консоль дополнительную информацию об этом.


### 3 часть

Имеется JSON файл numbers.json с массивами данных, где:

"alias" - название месяца,
"date_from" - дата начала месяца,
"date_to" - дата конца месяца,
"number_list" - список номеров для данного месяца,
"cdate" - дата, соответствующая номеру из number_list,
"is_visible" - статус месяца.

Необходимо: 
- создать таблицу с двумя колонками, в одной из которых будут отображаться номера из number_list для выбранного месяца, а в соседней колонке для всех значений должна отображаться соответствующая им дата из cdate в формате ДД.ММ.ГГГГ;
- над таблицей разместить строку поиска, ввод номера в которую отобразит найденный номер в таблице, скрыв все остальные;
- переключение месяцев выполнить в виде табов, где должны отображаться только месяцы с соответствующим значением в строке is_visible. Название месяца должно быть с большой буквы.


## Подключенные модули
    
browser-sync: 2.27.11
del: 7.0.0
gulp: 4.0.2
gulp-autoprefixer: 8.0.0
gulp-clean-css: 4.3.0
gulp-file-include: 2.3.0
gulp-group-css-media-queries: 1.2.2
gulp-if: 3.0.0
gulp-newer: 1.4.0
gulp-notify: 4.0.0
gulp-plumber: 1.2.1
gulp-rename: 2.0.0
gulp-replace: 1.1.4
gulp-sass: 5.1.0
gulp-svg-sprite: 2.0.1
gulp-version-number: 0.2.4
sass: 1.57.1
