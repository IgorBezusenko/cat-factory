

export function produce__cardWrapperTemplate(id) {
    return `<div class="produce__cardWrapper" data-product-id="${id}">
                        <div class="produce__cardWrapperWhite"></div>
                        <div class="produce__card">
                            <div class="produce__cardHoverAnimate">
                                <div class="produce__cardHoverAnimateBlock">
                                    <h4 class="produce__cardTitle">Ce obții?</h4>
                                    <ul class="produce__cardHoverAnimateBlockList">
                                        <li><img src="./img/home-page/card_check.svg" alt="card_check">Curățarea
                                            organismului
                                        </li>
                                        <li><img src="./img/home-page/card_check.svg" alt="card_check">Susținerea
                                            digestiei
                                        </li>
                                        <li><img src="./img/home-page/card_check.svg" alt="card_check">Recuperarea
                                            energiei
                                        </li>
                                        <li><img src="./img/home-page/card_check.svg" alt="card_check">Îmbunătățirea
                                            stării pielii
                                        </li>
                                        <li><img src="./img/home-page/card_check.svg" alt="card_check">Menținerea
                                            greutății
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="produce__cardImg"><img src="img/produse/bottle_red.png" alt="bottle_red">
                            </div>
                            <h4 class="produce__cardTitle">Double banana</h4>
                            <div class="produce__cardText">
                                <div>500ml</div>
                                <div>60$</div>
                            </div>
                            <div class="produce__cardTabs">
                                <button class="rounded-l btn-tab">1</button>
                                <button class="btn-tab">3</button>
                                <button class="btn-tab">5</button>
                                <button class="rounded-r btn-tab">7</button>
                            </div>
                            <div class="produce__cardButtons">
                                <button class="btn btn-default">Află mai mult</button>
                                <button class="btn btn-primary ">Adaugă în coș</button>
                            </div>
                        </div>
                    </div>`
}
export function productsSimilar__ItemTemplate(id) {
    return `<div class="productsSimilar__Item" data-product-id="${id}">
                        <div class="productsSimilar__ItemBgAbsolute"></div>
                        <div class="productsSimilar__ItemImg">
                            <img src="./img/home-page/smoothie1.png" alt="smoothie">
                        </div>
                        <h4 class="productsSimilar__ItemTitle">Smoothie</h4>
                        <p class="productsSimilar__ItemText"><span class="productsSimilar__ItemTextSale">789 MDL
                                </span> 550 MDL</p>
                        <div class="productsSimilar__ItemSelect">
                            <div class="form-select">
                                <select name="Strawberry" id="Strawberry0">
                                    <option value="1">Strawberry Geisha</option>
                                    <option value="2">Strawberry Geisha1</option>
                                    <option value="3">Strawberry Geisha2</option>
                                </select>
                            </div>
                        </div>
                        <div class="productsSimilar__ItemBtn">
                            <button class="btn btn-primary btn-primary-hover">Adaugă în coș</button>
                        </div>
                    </div>`
}
export function shoppingCart__itemTemplate(id) {
    return `<li class="shoppingCart__item " data-product-id="${id}">
                        <div class="shoppingCart__img"><img src="./img/shopping-cart/cart-img.jpg" alt="img"></div>
                        <div class="shoppingCart__content">

                            <div class="shoppingCart__contentHead">
                                <div class="shoppingCart__contentHeadItem">
                                    <div class="shoppingCart__title">Semafor</div>
                                    <div class="shoppingCart__text shoppingCart__mt4">1 Day Detox</div>
                                </div>
                                <div class="shoppingCart__deleteBtn"><img
                                        src="./img/shopping-cart/delete.svg" alt="img"></div>
                            </div>
                            <div class="shoppingCart__block counter" data-counter>
                                <div class="shoppingCart__counter">
                                    <button class="shoppingCart__counterBtn counter__btn counter__btn_minus">-</button>
                                    <p class="shoppingCart__counterText counter__btn_input">1</p>
                                    <button class="shoppingCart__counterBtn counter__btn counter__btn_plus">+</button>
                                </div>
                                <div class="shoppingCart__title"><span class="shoppingCart__price">590</span> MDL</div>
                            </div>
                        </div>
                    </li>`
}