const modalContainer = document.querySelector('.modal-container')


function openModalLogin(){
    const wModal = ` 
        <div class="modal-window">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">Вход</div>
                <img onclick="closeModal()" src="./img/close.png" alt="" class="modal-close">
            </div>
            <div class="login-container">
                <form action="#" method="post">
                    <p class="login-title">E-mail</p>
                    <input class="login-form" type="text" name="email" placeholder="Введите ваш e-mail">
                    <p class="login-title">Пароль</p>
                    <input class="login-form" type="text" name="email" placeholder="Введите пароль">
                    <button class="login-btn">Войти</button>
                </form>
            </div>
            
            </div>
        </div>
    `
    modalContainer.insertAdjacentHTML('afterbegin', wModal)
}

function openModalRegister(){
    const wModal = ` 
        <div class="modal-window">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">Регистрация</div>
                    <img onclick="closeModal()" src="./img/close.png" alt="" class="modal-close-register">
                </div>
                <div class="login-container">
                    <form action="#" method="post">
                        <p class="login-title">E-mail</p>
                        <input class="login-form" type="text" name="email" placeholder="Введите ваш e-mail">
                        <p class="login-title">Пароль</p>
                        <input class="login-form" type="password" name="email" placeholder="Введите пароль">
                        <button class="register-btn">Зарегистрироваться</button>
                    </form>
                </div> 
            </div>
        </div>
    `
    modalContainer.insertAdjacentHTML('afterbegin', wModal)
}

function openModalMobile(){
    const wModal = `
        <div class="modal-window">
            <img src="./img/close-white.png" alt="" class="closer-modal-mobile" onclick="closeModal()">
            <div class="modal-window__content">
                <div class="mobil-modal__region">Ваш регион: <span class="my-region">Москва</span></div>
                <div class="mobil-modal__categorys">Категории товаров</div>
                <div class="mobil-modal__providers">Поставщики</div>
                <div class="mobil-modal__log-reg">
                    <button class="mobil-modal__login">Вход</button>
                    <button class="mobil-modal__register">Регистрация</button>
                </div>
                <div class="mobil-modal__logo">Zakypi<span class="optom">Optom</span></div>
            </div>
        </div>
    `
    modalContainer.insertAdjacentHTML('afterbegin', wModal)
}

function closeModal(){
    while(modalContainer.firstChild){
        modalContainer.removeChild(modalContainer.firstChild);
    }
}