let name = [
    'Абрам', ' Аваз', ' Аввакум', ' Август', ' Августин',
    ' Авдей', ' Авраам', ' Автандил', ' Агап', ' Агафон',
    ' Аггей', ' Адам', ' Адис', ' Адольф', ' Адриан',
    ' Азамат', ' Айдар', ' Айнур', ' Айрат', ' Аким',
    ' Алан', ' Алей', ' Александр', ' Алексей', ' Али',
    ' Альберт', ' Альфред', ' Амадей', ' Амадеус',
    ' Амаяк', ' Амвросий', ' Ананий', ' Анастасий',
    ' Анатолий', ' Анвар', ' Ангел', ' Андоим', ' Андрей',
    ' Аникита', ' Антон', ' Арам', ' Арий', ' Аристарх',
    ' Аркадий', ' Арман', ' Арно', ' Арнольд', ' Арон', ' Арсен',
    ' Арсений', ' Арслан', ' Артем', ' Артемий', ' Артур', ' Архип', ' Аскар', ' Аскольд', ' Аслан', ' Афанасий', ' Ахмет', ' Ашот', ' Бальтазар', ' Бежен', ' Бенедикт', ' Берек', ' Бернард',
    ' Бертран', ' Богдан', ' Болеслав', ' Борис', ' Бронислав',
    ' Булат', ' Вадим', ' Валентин', ' Валерий', ' Вальтер',
    ' Варфоломей', ' Василий', ' Вацлав', ' Велизар', ' Венедикт', ' Вениамин', ' Викентий', ' Виктор', ' Вилли', ' Вильгельм', ' Виссарион', ' Виталий', ' Витольд', ' Владимир', ' Владислав', ' Владлен', ' Володар', ' Вольдемар', ' Всеволод', ' Вячеслав', ' Гавриил', ' Галактион', ' Гарри', ' Гастон', ' Гаяс', ' Гевор', ' Геннадий', ' Генрих', ' Георгий', ' Геракл', ' Геральд', ' Герасим', ' Герман', ' Глеб', ' Гордей', ' Гордон', ' Горислав', ' Градимир', ' Григорий', ' Гурий', ' Густав', ' Давид', ' Дамир', ' Даниил', ' Даниэль', ' Данияр', ' Дарий', ' Дементий', ' Демид', ' Демосфен', ' Демьян', ' Денис', ' Джамал', ' Джордан', ' Дмитрий', ' Добрыня', ' Дональд', ' Донат', ' Дорофей', ' Евгений', ' Евграф', ' Евдоким', ' Евсевий', ' Евсей', ' Евстафий', ' Егор', ' Елеазар', ' Елисей', ' Емельян', ' Еремей', ' Ермолай', ' Ерофей', ' Ефим', ' Ефрем', ' Жан', ' Ждан', ' Жорж', ' Захар', ' Зиновий', ' Ибрагим', ' Иван', ' Игнатий', ' Игорь', ' Илларион', ' Ильдар', ' Ильнар', ' Ильнур', ' Илья', ' Ильяс', ' Иннокентий', ' Иоанн', ' Иосиф', ' Ипполит', ' Искандер', ' Ислам', ' Камиль', ' Карим', ' Карл', ' Кирилл', ' Клим', ' Кондрат', ' Константин', ' Корней', ' Кузьма', ' Лавр', ' Лаврентий', ' Лев', ' Леон', ' Леонид', ' Леонтий', ' Леопольд', ' Лука', ' Лукьян', ' Любим', ' Макар', ' Максим', ' Максимилиан', ' Марат', ' Марк', ' Марсель', ' Мартин', ' Матвей', ' Мирон', ' Мирослав', ' Митрофан', ' Михаил', ' Михей', ' Мишель', ' Мстислав', ' Мурат', ' Муслим', ' Назар', 'Абрам', ' Аваз', ' Аввакум', ' Август', ' Августин', ' Авдей', ' Авраам', ' Автандил', ' Агап', ' Агафон', ' Аггей', ' Адам', ' Адис', ' Адольф', ' Адриан', ' Азамат', ' Айдар', ' Айнур', ' Айрат', ' Аким', ' Алан', ' Алей', ' Александр',
    ' Алексей', ' Али', ' Альберт', ' Альфред', ' Амадей', ' Амадеус', ' Амаяк', ' Амвросий', ' Ананий', ' Анастасий', ' Анатолий', ' Анвар', ' Ангел', ' Андоим', ' Андрей', ' Аникита', ' Антон', ' Арам', ' Арий', ' Аристарх', ' Аркадий', ' Арман', ' Арно', ' Арнольд', ' Арон', ' Арсен', ' Арсений', ' Арслан', ' Артем', ' Артемий', ' Артур', ' Архип', ' Аскар', ' Аскольд', ' Аслан', ' Афанасий', ' Ахмет', ' Ашот', ' Бальтазар', ' Бежен', ' Бенедикт', ' Берек', ' Бернард', ' Бертран', ' Богдан', ' Болеслав', ' Борис', ' Бронислав', ' Булат', ' Вадим', ' Валентин', ' Валерий', ' Вальтер', ' Варфоломей', ' Василий', ' Вацлав', ' Велизар', ' Венедикт', ' Вениамин', ' Викентий', ' Виктор', ' Вилли', ' Вильгельм', ' Виссарион', ' Виталий', ' Витольд', ' Владимир', ' Владислав', ' Владлен', ' Володар', ' Вольдемар', ' Всеволод', ' Вячеслав', ' Гавриил', ' Галактион', ' Гарри', ' Гастон',
    ' Гаяс', ' Гевор', ' Геннадий', ' Генрих', ' Георгий', ' Геракл',
    ' Геральд', ' Герасим', ' Герман', ' Глеб', ' Гордей', ' Гордон',
    ' Горислав', ' Градимир', ' Григорий', ' Гурий', ' Густав',
    ' Давид', ' Дамир', ' Даниил', ' Даниэль', ' Данияр',
    ' Дарий', ' Дементий', ' Демид', ' Демосфен',
    ' Демьян', ' Денис', ' Джамал', ' Джордан', ' Дмитрий', ' Добрыня',
    ' Дональд', ' Донат', ' Дорофей', ' Евгений', ' Евграф', ' Евдоким', ' Евсевий', ' Евсей', ' Евстафий', ' Егор', ' Елеазар', ' Елисей', ' Емельян', ' Еремей', ' Ермолай', ' Ерофей', ' Ефим', ' Ефрем', ' Жан', ' Ждан', ' Жорж', ' Захар', ' Зиновий', ' Ибрагим', ' Иван', ' Игнатий', ' Игорь', ' Илларион', ' Ильдар', ' Ильнар', ' Ильнур', ' Илья', ' Ильяс', ' Иннокентий', ' Иоанн', ' Иосиф', ' Ипполит', ' Искандер', ' Ислам', ' Камиль', ' Карим', ' Карл', ' Кирилл', ' Клим', ' Кондрат', ' Константин', ' Корней', ' Кузьма', ' Лавр', ' Лаврентий', ' Лев', ' Леон', ' Леонид', ' Леонтий', ' Леопольд', ' Лука', ' Лукьян', ' Любим', ' Макар', ' Максим', ' Максимилиан', ' Марат', ' Марк', ' Марсель', ' Мартин', ' Матвей', ' Мирон', ' Мирослав', ' Митрофан', ' Михаил', ' Михей', ' Мишель', ' Мстислав', ' Мурат',
    ' Муслим', ' Назар'
  ]

  module.exports.names = name