
class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price,text, img }) => {
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
        <div class="menu__dobov">
            <div class="menu__minus" data-action="minus">-</div>
            <div class="menu__plus" data-action="plus">+</div>
        </div>
    </div>
    <button data-cart class="menu__button btn">Заказать</button>
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



