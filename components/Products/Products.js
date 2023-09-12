class Products {
    constructor() {
        this.classNameActive = "menu__button--active";
        this.labelAdd = "Заказать";
        this.labelRemove = "Удалить из корзины";
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";

        CATALOG.forEach(({ id, name, price, text, img }) => {
            let activeClass = "";
            let activeText = "";
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeText = this.labelRemove;
                activeClass = " "+this.classNameActive;
            }
            htmlCatalog += `
        <div class="menu__item">
    <img src="${img}" alt="" class="menu__img" />
    <div class="menu-item__title">${name}</div>
    <div class="menu-item__text">${text}</div>
    <div class="menu__size">
        <div class="menu-size-s">22</div>
        <div class="menu-size-m size-active">28</div>
        <div class="menu-size-l">33</div>
    </div>
    <div class="menu__box">
        <div class="menu__price">${price} руб</div>
    </div>
    <button class="menu__button${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
    </button>
</div>
            `;
        });

        const html = `
            <div class="menu__column">
            ${htmlCatalog}
            </div>
               
           
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();
