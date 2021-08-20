 var nameI = prompt('Введите ваше имя','Иван');
 var surname = prompt('Введите вашу фамилию','Иванович');
 var patronymic = prompt('Введите ваше отчество','Иванов');

 var age = prompt('Введите ваш возраст в годах','20');
 var age = parseFloat(age);

 if(age>=65) { 
    ageP="да";
}
 else {
    ageP="нет";
}
 var gender = confirm ("Ваш пол - мужской? Если женский - нажмите 'нет'");
 if(gender) { 
    gender="мужской";
} 
 else {
    gender="женский";
}

alert ('ваше ФИО: ' + nameI +' ' + surname +' '+ patronymic + 
' ваш возраст в годах: '+ age +
' ваш возраст в днях: '+(age*365)+
' через 5 лет вам будет: '+(age+5) + 
' ваш пол: '+ gender + ' вы на пенсии: ' + ageP);
