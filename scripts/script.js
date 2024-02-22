window.onload = function () {
    let fullName = document.getElementById('fullName');
    fullName.onkeydown = (e) => {
        let letter = parseInt(e.key);
        if (!isNaN(letter)) {
            return false;
        }
    }

    let userName = document.getElementById('userName');
    userName.onkeydown = (e) => {
        let key = e.key;
        if (key === ',' || key === '.') {
            return false;
        }
    }

    let checkbox = document.getElementById('checkbox');
    checkbox.onchange = (e) => {
        let checked = e.target.checked;
        if (checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    }

    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordRepeat = document.getElementById('passwordRepeat');
    let closePopUp = document.getElementById('pop-up-button');
    let popUp = document.getElementById('pop-up');

    // function formReset(){
    //     fullName.value = "";
    //     userName.value = "";
    //     email.value = "";
    //     password.value = "";
    //     passwordRepeat.value = "";
    //     checkbox.checked = false;
    // }

    function formReset() {
        let form = document.getElementById('form');
        form.reset();
    }

    function userPage () {
           document.getElementById('main-title').innerHTML = 'Log in to the system';
           document.getElementById('fullNameRemove').remove();
           document.getElementById('emailRemove').remove();
           document.getElementById('passwordRepeatRemove').remove();
           document.getElementById('checkboxRemove').remove();
           let submitButton = document.getElementById('button');
           submitButton.innerText = 'Sign In';
           question.remove();
           submitButton.onclick = function () {
               if (!userName.value) {
                   alert('Заполните поле имя пользователя');
                   return;
               }
               if (!password.value) {
                   alert('Заполните поле пароль');
               } else {
                   alert('Добро пожаловать, ' + userName.value + '!');
               }
           }
    }

    document.getElementById('button').onclick = function () {
        if (!fullName.value) {
            alert('Заполните поле полное имя');
            return;
        }
        if (!userName.value) {
            alert('Заполните поле имя пользователя');
            return;
        }
        if (!email.value) {
            alert('Заполните поле email');
            return;
        }
        if (!password.value) {
            alert('Заполните поле пароль');
            return;
        }

        let passwordEntered = password.value;
        if (passwordEntered.length < 8) {
            alert('Пароль должен быть не менее 8 символов');
            return;
        }
        if (!passwordRepeat.value) {
            alert('Заполните поле повторите пароль');
            return;
        }
        if (password.value !== passwordRepeat.value) {
            alert('Введите правильный пароль');
            return;
        }
        if (checkbox.checked) {
            console.log('yes');
            popUp.classList.add('active');
        } else {
            console.log('no')
            alert('Подтвердите согласие с нашими условиями обслуживания и конфиденциальности');
        }
    }

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
        formReset();
        userPage();
    });

    let question = document.getElementById('question');
    question.addEventListener('click', () => {
        userPage()
    })

}

console.log("The end");
console.log("The end 2");
console.log("The end is cancelled");
console.log("The end 3");


//Создайте страницу для регистрации на сайте по Figma-макету и подключите к ней javascript и css файлы.

//     Все шрифты должны быть подключены на сайт и использованы в соответствии с дизайн-макетом.
//
//     После того, как верстка сайта будет готова, посредством кода в JavaScript необходимо реализовать следующее:
//
//     1. Создайте обработчик события полной загрузки страницы и добавляйте новый код только в эту функцию. Внимание, в этом случае невозможно будет использовать подход с указанием функции в атрибуте html. То есть в JS коде вам надо находить элементы, и для них создавать функции-обработчики нужных событий.
//
// 2. В поле "Full Name" запретите вводить цифры.
//
// 3. В поле "Your username" запретите вводить точки и запятые.
//
// 4. При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.
//
// 5. При нажатии на кнопку “Sign Up”:
// • Проверьте на существование значения в каждом текстовом поле. Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert. Сообщение должно быть следующего вида: "Заполните поле E-mail".
// • Пароль должен содержать не менее 8 символов. Если пароль короче, то выведите сообщение об ошибке через alert.
// • Проверьте совпадают ли пароли из двух текстовых полей. Если пароли не совпадают, выведите сообщение об ошибке, используя alert.
// • Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
// • Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию» и кнопкой «ОК». При нажатии на кнопку «ОК» окно закрывается, форма очищается и пользователя перебрасывает на страницу логина (см. п.6). Модального окна в макете нет, его нужно создать самостоятельно, соблюдая общую стилистику макета.
//
// 6. При нажатии на ссылку «Already have an account?», а также на кнопку «ОК» в попапе реализовать имитацию перехода на страницу логина. Для этого с исходной страницей с помощью JS нужно произвести следующие действия:
//     • Текст "Get your free account" заменить на "Log in to the system".
// • Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить.
// • Блок с чекбоксом также удалить.
// • Текст в кнопке заменить на «Sign In».
// • Ссылку "Already have an account?" удалить.
// • Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены. Если какое-то из полей не заполнено - вывести ошибку. Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!", где username - значение из соответствующего поля.
//
//     При обработке нажатия на кнопку “Sign Up” можно пойти 2 путями (на выбор):
// 1. Сделать кнопку в форме type="button" и обрабатывать событие нажатия на кнопку
// 2. Сделать кнопку в форме type="submit" и обрабатывать событие отправки формы с предотвращением отправки в случае ошибок
