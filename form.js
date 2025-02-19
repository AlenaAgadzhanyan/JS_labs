function num9(){

    const regex1 = /^[А-ЯЁа-яё]{2,}$/;
    const regex1_1 = /^[А-ЯЁа-яё]+$/;
    const regex1_2 = /^[А-ЯЁа-яё]{5,}$/;
    const regex2 = /^[A-Za-z0-9._-]{6,64}@[a-z-]{3,20}\.[a-z]{2,20}$/;
    const regex3 = /^[A-Za-z0-9-_!#$&%^*!?.]{3,20}$/;
    const regex4 = /(8|\+7)\d{10}$/;
    const regex5 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-@$!%*?&_])[A-Za-z\d@$!%*?&_-]{8,}$/;
    
    document.querySelectorAll(".form").forEach((item) => {
        item.oninput = function() {
            if (item.value != "") {
                item.nextElementSibling.innerHTML = "";
                item.style.border = "2px solid #880a84";
            }

            /* Фамилия */
            if (item.className == "form surname") {
                item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1).toLowerCase();
                if (!regex1_1.test(item.value)) {
                    item.style.border = "2px solid red";
                    if (item.value.lenght < 1) item.nextElementSibling.innerHTML = "Минимум 1 символ";
                    if (/\d+/.test(item.value)) item.nextElementSibling.innerHTML = "Цифры вводить нельзя";
                    else if (/[^А-ЯЁа-яё]/.test(item.value)) item.nextElementSibling.innerHTML = "Недопустимый алфавит";
                }
            }

            /* Имя */
            if (item.className == "form name") {
                item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1).toLowerCase();
                if (!regex1.test(item.value)) {
                    item.style.border = "2px solid red";
                    if (item.value.lenght < 2) item.nextElementSibling.innerHTML = "Минимум 2 символа";
                    if (/\d+/.test(item.value)) item.nextElementSibling.innerHTML = "Цифры вводить нельзя";
                    else if (/[^А-ЯЁа-яё]/.test(item.value)) item.nextElementSibling.innerHTML = "Недопустимый алфавит";
                }
            }

            /* Почта */
            if (item.className == "form email" && !regex2.test(item.value)){
                item.nextElementSibling.innerHTML = "Формат: xxxxxx@xxx.xx";
                item.style.border = "2px solid red";
                if (/^[A-Za-z0-9._-]+@[a-z-]+\.[a-z]+/.test(item.value)){
                    if(item.value.substring(0, item.value.indexOf("@")).lenght < 6 || item.value.substring(0, item.value.indexOf("@")).lenght > 64)
                    item.nextElementSibling.innerHTML = "Введите 6-64 символовов до @";
                    else if (item.value.substring(item.value.indexOf("@") + 1, item.value.indexOf(".")).length < 3 || item.value.substring(item.value.indexOf("@") + 1, item.value.indexOf(".")).length > 20)
                    item.nextElementSibling.innerHTML = "Введите 3-20 символов после @";
                    else if (item.value.substring(item.value.indexOf(".") + 1, item.value.lenght).lenght < 2 || item.value.substring(item.value.indexOf(".") + 1, item.value.lenght).lenght > 20)
                    item.nextElementSibling.innerHTML = "Введите 2-20 символов после .";   
                }
                else if (/[А-ЯЁа-яё]/.test(item.value)){
                    item.nextElementSibling.innerHTML = "Недопустимый символ";
                }
            }

            /* Телефон */
            if (item.className == "form phone" && !regex4.test(item.value)){
                item.style.border = "2px solid red";
                if (/[^0-9\+]/.test(item.value)) item.nextElementSibling.innerHTML = "Вводите только цифры или +";
                else if (!(item.value.charAt(0) == "8" || (item.value.charAt(0) == "+" && item.value.charAt(1) == "7")))
                item.nextElementSibling.innerHTML = "Допустимо '8' или '+7'";
                else if (item.value.match(/\d/g).lenght != 11)
                item.nextElementSibling.innerHTML = "Необходимо ввести 11 цифр";
            }

            /* Пароль */
            if (item.className == "form password"){
                const item2 = document.querySelector("#password2");
                const cor = (item2.value !== item.value && item2.value !== "");
                if (!regex5.test(item.value)){
                    item.style.border = "2px solid red";
                    if (/[А-ЯЁа-яё]/.test(item.value)) item.nextElementSibling.innerHTML = "Недопустимый алфавит";
                    else if (!/\d/.test(item.value)) item.nextElementSibling.innerHTML = "Минимум 1 цифра";
                    else if (!/[A-Z]/.test(item.value)) item.nextElementSibling.innerHTML = "Минимум 1 заглавная буква";
                    else if (!/\W/.test(item.value)) item.nextElementSibling.innerHTML = "Минимум 1 спец. символ";
                    else if (item.value.length < 8) item.nextElementSibling.innerHTML = "Минимум 8 символов";
                }
                else if (!cor){
                    item.style.border = "2px solid #880a84";
                    item2.style.border = "2px solid #880a84";
                    item2.nextElementSibling.innerHTML = "";
                }
                else if (regex5.test(item.value)) item2.style.border = "2px solid #880a84";
                if ((!regex5.test(item.value) && cor) || (regex5.test(item.value) && cor)){
                    item2.nextElementSibling.innerHTML = "Пароли не совпадают";
                    item2.style.border = "2px solid red";
                }
            }

            /* Проверка пароля */
            if (item.className == "form check password"){
                const item2 = document.querySelector("#password1");
                if (item2.value !== item.value){
                    item.nextElementSibling.innerHTML = "Пароли не совпадают";
                    item.style.border = "2px solid red";
                }
                else {
                    item.style.border = "2px solid #880a84";
                    item2.style.border = "2px solid #880a84";
                }
            }
        }
    })

    document.querySelectorAll(".form").forEach((item) => {
        item.onblur = function () {
            if (item.value == "") {
                item.nextElementSibling.innerHTML = "Обязательно к заполнению";
                item.style.border = "2px solid red";
            }
        }
    })

    /* Отчество */
    const lastname = document.querySelector(".lastname");
    lastname.oninput = function () {
        lastname.value = lastname.value.charAt(0).toUpperCase() + lastname.value.slice(1).toLowerCase();
        if (!regex1_2.test(lastname.value) && lastname.value != "") {
            lastname.style.border = "2px solid red";
            if (lastname.value.lenght < 5) lastname.nextElementSibling.innerHTML = "Минимум 5 символов";
            if (/\d+/.test(lastname.value)) lastname.nextElementSibling.innerHTML = "Цифры вводить нельзя";
            else if (/[^А-ЯЁа-яё]/.test(lastname.value)) lastname.nextElementSibling.innerHTML = "Недопустимый алфавит";
        }
        else if (lastname.value == "" || regex1_2.test(lastname.value)) {
            lastname.nextElementSibling.innerHTML = "";
            lastname.style.border = "2px solid #880a84";
        }
    }

    /* ДР */
    const birthday = document.getElementById("birthday");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    date = year + '-' + month + '-' + day;
    birthday.setAttribute("max", date);
    birthday.onblur = function () {
        let input_date = new Date(birthday.value);
        if (input_date.getFullYear() > year || input_date.getMonth() + 1 > month || (input_date.getFullYear() == year && input_date.getMonth() + 1 == month && input_date.getDate() > day)) birthday.nextElementSibling.innerHTML = "Вы из будущего?";
        else birthday.nextElementSibling.innerHTML = "";
    }


    /* Кнопка "Отправить" */
    const send = document.getElementById("send");
    send.onclick = function () {
        let i = 0;
        document.querySelectorAll(".form").forEach((item) => {
            if (item.value == "" || item.style.borderColor == 'red' || lastname.style.borderColor == 'red') i++;
        })
        if (i != 0) {
            alert('Не все поля заполнены');
            return false; // чтобы страница не обновлялась
        }
        else {
            alert('Данные отправлены');
            return false; // чтобы страница не обновлялась
        }
    }

    /* Кнопка "Очистить" */
    const del=document.getElementById("delete")
    del.onclick = function () {
        document.getElementById("f").reset();
    }

    /* Показать пароль */
    document.querySelector(".show_password1").onclick = function () {
        if (document.querySelector(".show_password1").checked == true) document.getElementById("password1").setAttribute('type', 'text');
        else document.getElementById("password1").setAttribute('type', 'password');
    }
    document.querySelector(".show_password2").onclick = function () {
        if (document.querySelector(".show_password2").checked == true) document.getElementById("password2").setAttribute('type', 'text');
        else document.getElementById("password2").setAttribute('type', 'password');
    }
}
