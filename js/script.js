const burger = document.querySelector(".icon-menu-burger");
const menu__body_burger = document.querySelector(".menu__body_burger");

const mySidenav = document.getElementById("mySidenav");
const mySidenavConsultation = document.getElementById("mySidenavConsultation");
const mySidenavProgram = document.getElementById("mySidenavProgram");
const mySidenavDrinks = document.getElementById("mySidenavDrinks");
const mySidenavFood = document.getElementById("mySidenavFood");
const mySidenavDessert = document.getElementById("mySidenavDessert");
const menuDropdown = document.getElementById("menuDropdown");
const menuDropdownConsultation = document.querySelector(".menuDropdownConsultation");
const header__wrapper = document.querySelector(".header__wrapper");
const header__navLeftItemActive1 = document.querySelector(".header__navLeftItemActive1");
const header__navLeftItemActive2 = document.querySelector(".header__navLeftItemActive2");
const header__navLeftItemActive3 = document.querySelector(".header__navLeftItemActive3");
const shoppingCart = document.getElementById("shoppingCart");
const checkOut__livrareWrapper = document.querySelector(".checkOut__livrareWrapper");
const checkOut__livrare = document.querySelector(".checkOut__livrare");
const main = document.querySelector(".main");
const pickup = document.querySelectorAll(".pickup");

const handlerClickLivrareTitle1 = () => {
    checkOut__livrareWrapper.classList.remove("active")
    checkOut__livrare.classList.remove("active")
    pickup.forEach(item => item.classList.remove("hidden"))
}
const handlerClickLivrareTitle2 = () => {
    checkOut__livrareWrapper.classList.add("active")
    checkOut__livrare.classList.add("active")
    pickup.forEach(item => item.classList.add("hidden"))
}

const overflowHidden = () => {
    document.body.style.overflow = "hidden"
};
const overflowAuto = () => {
    document.body.style.overflow = "auto"
};


const showBurgerMenu = () => {
    burger.classList.add("active");
    menu__body_burger.classList.add("active");
    mySidenav.style.width = "100%";
    overflowHidden();
};
const closeBurgerMenu = () => {
    burger.classList.remove("active");
    menu__body_burger.classList.remove("active");
    mySidenav.style.width = "0";
    overflowAuto();
};


const showBurgerConsultation = () => {
    mySidenavConsultation.style.width = "100%";
};
const closeBurgerConsultation = () => {
    mySidenavConsultation.style.width = "0";
};
const showBurgerProgram = () => {
    mySidenavProgram.style.width = "100%";
};
const closeBurgerProgram = () => {
    mySidenavProgram.style.width = "0";
};
const showBurgerDrinks = () => {
    mySidenavDrinks.style.width = "100%";
};
const closeBurgerDrinks = (e) => {
    mySidenavDrinks.style.width = "0";
};
const showBurgerFood = () => {
    mySidenavFood.style.width = "100%";
};
const closeBurgerFood = () => {
    mySidenavFood.style.width = "0";
};
const showBurgerDessert = () => {
    mySidenavDessert.style.width = "100%";
};
const closeBurgerDessert = () => {
    mySidenavDessert.style.width = "0";
};
const showMenuDropdown = () => {
    closeMenuDropdownConsultation()
    menuDropdown.style.height = "500px";
    header__wrapper.classList.add("active");
    header__navLeftItemActive1?.classList?.add("active");
    header__navLeftItemActive2?.classList?.add("active");
    header__navLeftItemActive3?.classList?.add("active");
};
const closeMenuDropdown = () => {
    menuDropdown.style.height = "0";
    header__wrapper.classList.remove("active");
    header__navLeftItemActive1?.classList?.remove("active");
    header__navLeftItemActive2?.classList?.remove("active");
    header__navLeftItemActive3?.classList?.remove("active");
    closeMenuDropdownConsultation()
};
const showMenuDropdownConsultation = () => {
    closeMenuDropdown()
    header__wrapper.classList.add("active");
    menuDropdownConsultation.style.height = "200px";

};
const closeMenuDropdownConsultation = () => {
    header__wrapper.classList.remove("active");
    menuDropdownConsultation.style.height = "0";
};

const closeAllBurgers = () => {
    closeBurgerMenu()
    closeBurgerConsultation()
    closeBurgerProgram()
    closeBurgerDrinks()
    closeBurgerFood()
    closeBurgerDessert()
}

const showShoppingCart = () => {
    shoppingCart.style.width = "100%";
    main.style.zIndex = "9";
    setTimeout(() => {
        overflowHidden()
    }, 200)
};
const closeShoppingCart = () => {
    shoppingCart.style.width = "0";
    main.style.zIndex = "11";
    overflowAuto();
};


const shoppingCart__list = document.querySelector('.shoppingCart__list')
const produce__content = document.querySelectorAll('.produce__content')
const checkOut__comandPunga = document.querySelector('.checkOut__comandPunga')
const tabsTitle = document.querySelectorAll('.tab__title')
const tabsContent = document.querySelectorAll('.tab__content')

tabsTitle.forEach(item => item.addEventListener("click", event => {
    const tabTitleTarget = event.target.closest(".tab__title").getAttribute('data-tab')

    tabsTitle.forEach(item => item.classList.remove("active"))
    tabsContent.forEach(item => item.classList.add("tab-hidden"))

    item.classList.add("active")
    document.getElementById(tabTitleTarget).classList.remove('tab-hidden')
}))


checkOut__comandPunga?.addEventListener("click", updateCounterShoppingCart)


function recalculateCart() {
    let subTotal = 0
    const shoppingCartItems = document.querySelectorAll(".shoppingCart__item")
    const header__navLeftShoppingCart = document.querySelector(".header__navLeftShoppingCart")
    const subTotalElement = document.querySelector('.subTotal')


    shoppingCartItems?.forEach(item => {
        const price = parseInt(item.querySelector('.shoppingCart__price').innerHTML)
        const counter = parseInt(item.querySelector('.counter__btn_input').innerHTML)
        subTotal += price * counter
    })
    if (subTotalElement) {
        subTotalElement.innerHTML = subTotal
    }
    header__navLeftShoppingCart.children[1].innerHTML = shoppingCartItems.length.toString()
}

recalculateCart()

function updateCounterShoppingCart(e, productId) {
    const target = e.target;

    if (target.closest('.counter__btn')) {
        let value = parseInt(target.closest('.counter').querySelector('p').innerText)
        if (target.classList.contains('counter__btn_plus')) {
            // counter +
            value = value + 1
        } else {
            //counter -
            value--
        }
        if (value <= 1) {
            value = 1
        }
        target.closest('.counter').querySelector('p').textContent = value.toString()
        recalculateCart()

        //
        console.log("productId", productId)
    }

}

function addToCart(event, productId) {
    const target = event.target;
    console.log("log")
    if (target.closest('.produce__cardButtons .btn-primary')) {

        const cardItem = `<li class="shoppingCart__item " data-product-id="${productId}">
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
        let isAddNewItem = true

        Array.from(shoppingCart__list.children).forEach(item => {
            if (item.dataset.productId === productId) {
                isAddNewItem = false
            }
        })
        if (!isAddNewItem) return

        if (isAddNewItem) {
            shoppingCart__list.insertAdjacentHTML('beforeend', cardItem);
            recalculateCart()
        }


        //
        console.log("productId", productId)
    }

}

function removeShoppingCartItem(event, productId) {
    const targetButton = event.target.closest('.shoppingCart__deleteBtn');
    const card = event.target.closest('.shoppingCart__item');
    if (!targetButton) return;
    card.remove()
    recalculateCart()

    //
    console.log("productId", productId)
}


function handlerClickShoppingCartItem(event) {
    const productId = event.target.closest('.shoppingCart__item').dataset.productId
    updateCounterShoppingCart(event, productId)
    removeShoppingCartItem(event, productId)
}

shoppingCart__list?.addEventListener("click", handlerClickShoppingCartItem)


function handlerClickProduce__cardWrapper(event) {
    const productId = event.target.closest('.produce__cardWrapper').dataset.productId
    addToCart(event, productId)
}

produce__content?.forEach(item => item.addEventListener("click", handlerClickProduce__cardWrapper))


const buttonAnimate = document.querySelectorAll("button")
const handlerButtonAnimate = (e) => {
    e.target.classList.add("animation")
    setTimeout(() => {
        e.target.classList.remove("animation")
    }, 600)
}
buttonAnimate?.forEach(item => item.addEventListener("click", handlerButtonAnimate))

const animItems = document.querySelectorAll("._anim_items")
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('._anim_items');
    let lastScrollTop = 0;

    // Reset animation state on scroll
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        boxes.forEach((box,index) => {
            if (currentScrollTop > lastScrollTop) {
                box.classList.remove('activeUp');
                // box.classList.add('activeDown');
                setTimeout(() => {
                    box.classList.add('activeDown');
                }, index * 100);
            } else {
                box.classList.remove('activeDown');
                // box.classList.add('activeUp');s
                setTimeout(() => {
                    box.classList.add('activeUp');
                }, index * 100);
            }
        });
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
    });
});


// if (animItems.length > 0) {
//     document.addEventListener("DOMContentLoaded", () => animOnScroll())
//     let lastScrollTop = 0;
//     console.log("lastScrollTop", lastScrollTop)
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i]
//             const st = window.pageYOffset || document.documentElement.scrollTop;
//             console.log("st > lastScrollTop",st , lastScrollTop)
//             if (st > lastScrollTop) {
//                 // Scrolling down
//                 setTimeout(() => {
//                     animItem.classList.add("activeDown")
//                 }, i * 150)
//                 animItem.classList.remove("activeDown")
//             } else {
//                 // Scrolling up
//                 setTimeout(() => {
//                     animItem.classList.add("activeUp")
//                 }, i * 150)
//                 animItem.classList.remove("activeUp")
//             }
//             lastScrollTop = st <= 0 ? 0 : st;
//
//
//
//         }
//     }
//
//
// }