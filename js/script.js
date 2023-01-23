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