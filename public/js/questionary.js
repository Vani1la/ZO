const selectCity = document.querySelector('.qiestionary__cityes-ul')
const selectReg = document.querySelector('.qiestionary__categories-ul')
const city = document.querySelector('#qiestionary__select1')
const reg = document.querySelector('#qiestionary__select2')
const qiestionaryRight = document.querySelector('.qiestionary__right-block')
const qiestionaryLeft = document.querySelector('.qiestionary__left-block')
let qiestionaryCounter = 1
let firstValid = true


selectCity.addEventListener('click', (e) =>{
        city.innerHTML = e.target.textContent
    })
    
    selectReg.addEventListener('click', (e) =>{
            reg.innerHTML = e.target.textContent
        })
        
document.querySelector('.qiestionary__handler').addEventListener('click', () =>{
    console.log('sd')
    let notValid = false
    if (qiestionaryCounter === 1){
        const qiestionaryInput = document.querySelector('.qiestionary__input')
        const qiestionaryInfo = document.querySelector('.qiestionary__info-input')
        if (!qiestionaryInput.value){
            qiestionaryInput.classList.add('not-valid')
            notValid = true
        }
        if (city.textContent === 'Выберите ваш регион'){
            city.classList.add('not-valid')
            notValid = true
        }
        if (!qiestionaryInfo.value){
            qiestionaryInfo.classList.add('not-valid')
            notValid = true
        }
        if (reg.textContent === 'Выбрите категорию товара'){
            reg.classList.add('not-valid')
            notValid = true
        }
        if (!notValid){
            selectCity.removeEventListener('click', (e) =>{
                city.innerHTML = e.target.textContent
            })
            selectReg.removeEventListener('click', (e) =>{
                reg.innerHTML = e.target.textContent
            })
            qiestionaryLeft.innerHTML = `
            <div class="qiestionary__title">Оплата за товар</div>
            <div class="qiestionary__title-input" id="variants-pay">Способы оплаты<span class="optom">*</span></div>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Оплата наличными</span>
            </label>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Оплата на расчётный счёт юрлица</span>
            </label>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Оплата на счёт физического лица</span>
            </label>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Оплата через платёжные системы</span>
            </label>
            `
            qiestionaryRight.innerHTML = `
            <div class="qiestionary__title-input" id="view-pay">Вид оплаты<span class="optom">*</span></div>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Предварительная оплата</span>
            </label>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Отсрочка платежа</span>
            </label>
            <label class="qiestionary__check-label">
            <input type="checkbox" class="qiestionary__checkbox">
            <div class="qiestionary__fake-checkbox"></div>
            <span class="qiestionary__check-text">Рассрочка платежа</span>
            </label>
            `
            qiestionaryCounter++
        }
    }
    if (qiestionaryCounter === 2){
        if (firstValid){
            firstValid = false
        }else{

            let inputsPay = document.querySelectorAll('.qiestionary__checkbox')
            let qiestionaryMarker = document.querySelectorAll('.qiestionary__title-input span')
            if (!inputsPay[0].checked && !inputsPay[1].checked && !inputsPay[2].checked && !inputsPay[3].checked){
                console.log(qiestionaryMarker)
                qiestionaryMarker[0].style.color = 'red'
                notValid = true
            }
            if (!inputsPay[4].checked && !inputsPay[5].checked && !inputsPay[6].checked){
                console.log(qiestionaryMarker)
                qiestionaryMarker[1].style.color = 'red'
                notValid = true
            }
            if (!notValid){
                qiestionaryCounter++
                firstValid = true
                qiestionaryLeft.innerHTML = `
                <h2 class="qiestionary__title">Доставка товара</h2>
                <div class="qiestionary__title-input">Варианты доставки<span class="optom">*</span></div>
                <label class="qiestionary__check-label">
                    <input type="checkbox" class="qiestionary__checkbox">
                    <div class="qiestionary__fake-checkbox"></div>
                    <span class="qiestionary__check-text">Самовывоз</span>
                </label>
                <label class="qiestionary__check-label">
                    <input type="checkbox" class="qiestionary__checkbox">
                    <div class="qiestionary__fake-checkbox"></div>
                    <span class="qiestionary__check-text">Своим транспортом</span>
                </label>
                <label class="qiestionary__check-label">
                    <input type="checkbox" class="qiestionary__checkbox">
                    <div class="qiestionary__fake-checkbox"></div>
                    <span class="qiestionary__check-text">До транспортной компании</span>
                </label>
                <label class="qiestionary__check-label">
                    <input type="checkbox" class="qiestionary__checkbox">
                    <div class="qiestionary__fake-checkbox"></div>
                    <span class="qiestionary__check-text">Почта России</span>
                </label>
                <div class="qiestionary__title-input">Условия обмена и возврата</div>
                <textarea class="qiestionary__info-input" name="firstName" placeholder="Напишите про условия обмена и возврата товара"></textarea>
            `
            qiestionaryRight.innerHTML = `
                <div class="qiestionary__title-input" id="right-delivery">Условия доставки<span class="optom">*</span></div>
                <textarea class="qiestionary__info-input" name="firstName" placeholder="Напишите про свои условия доставки..."></textarea>
            `
            }
        }
    }
    if (qiestionaryCounter === 3){
        if (firstValid){
            firstValid = false
        }else{
            const inputTerms = document.querySelectorAll('.qiestionary__info-input')[1]
            inputsPay = document.querySelectorAll('.qiestionary__checkbox')
            if (!inputsPay[0].checked && !inputsPay[1].checked && !inputsPay[2].checked && !inputsPay[3].checked){
                document.querySelector('.qiestionary__title-input span').style.color = 'red'
                notValid = true
            }
            if (!inputTerms.value){
                inputTerms.classList.add('not-valid')
                notValid = true
            }
            if(!notValid){
                qiestionaryCounter++
                qiestionaryLeft.innerHTML = `
                    <div class="qiestionary__title">Фото продукции</div>
                    <div class="qiestionary__title-input">Загрузка фотографий (до 3-х)</div>
                    <form action="/register-post">
                        <input type="file" id="qiestionary__photo-input">
                        <label for="qiestionary__photo-input" class="qiestionary__photo-label">Загрузить фото</label>
                    </form>
                `
                qiestionaryRight.innerHTML = ''
            }
        }
    }
})