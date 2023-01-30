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