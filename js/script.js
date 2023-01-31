const menu = document.querySelector('.menu__inner'),
    items = document.querySelectorAll('.menu__item'),
    menuName = document.querySelectorAll('.menu__name')

function filter() {
    menu.addEventListener('click', e => {
        const targetId = e.target.dataset.id
        const target = e.target
        if (target.classList.contains('menu__name')) {
            menuName.forEach(item => {
                item.classList.remove('menu-active')
            })
            target.classList.add('menu-active')
        }
        switch (targetId) {
            case "all":
                getItems('menu__item')
                break
            case "meat":
                getItems(targetId)
                break
            case "vegetables":
                getItems(targetId)
                break
            case "seafood":
                getItems(targetId)
                break
            case "mushroom":
                getItems(targetId)
                break
        }
    })
}
filter()
function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}
// ------------------burger------------------------------------------------
const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header-top__column')
const body = document.querySelector('body')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('hide')
})
// ---------------------счетчик---------------------------------
window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.menu__dobov')
        counter = counterWrapper.querySelector('[data-counter]')


    }
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }

})
// -------------------------добавление карточки в корзину------------------------------------------
const popup = document.querySelector('.popup')
window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.menu__item')
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.menu__img').getAttribute('src'),
            title: card.querySelector('.menu-item__title').innerText,
            price: card.querySelector('.menu__price').innerText,
            counter: card.querySelector('[data-counter]').innerText,

        }
        const itemInCart = popup.querySelector(`[data-id="${productInfo.id}"]`);


        if (itemInCart) {
            const counterElement = itemInCart.querySelector('.popup__counter');

            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

        }
        else {


            const cartItemHTML = `  
            <div class="popup__container"  data-id="${productInfo.id}">
            <div class="popup__img">
                <img src="${productInfo.imgSrc}" alt="">
            </div>
            <div class="popup__title">${productInfo.title}</div>
            <div class="popup__info">
                <div class="popup__price">Цена : ${productInfo.price}</div>
                <div class="popup__box">
                <div class="popup__title-counter">Кол-во :</div>
                <div class="popup__counter"> ${productInfo.counter}</div>
                </div>
            </div>
           </div>`;



            popup.insertAdjacentHTML('beforeend', cartItemHTML)
            setTimeout(function () {
                popup.style.display = "none"
            }, 3000)

        }

        popup.style.display = "block";
        setTimeout(function () {
            popup.style.display = "none"
        }, 8000)

    }


})


