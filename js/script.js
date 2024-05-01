const connection__city = document.querySelector(".connection__city");
const connection__city_modalShow = document.querySelector(
    ".connection__city-modalShow"
);
const connection__city_bg_modal = document.querySelector(
    ".connection__city-bg-modal"
);

const connection__city__modal_wrapper = document.querySelector(
    ".connection__city__modal-wrapper"
);
const burger = document.querySelector(".icon-menu-burger");
const menu__body_burger = document.querySelector(".menu__body_burger");

const mySidenav = document.getElementById("mySidenav");
const mySidenavConsultation = document.getElementById("mySidenavConsultation");
const mySidenavProgram = document.getElementById("mySidenavProgram");
const mySidenavDrinks = document.getElementById("mySidenavDrinks");
const mySidenavFood = document.getElementById("mySidenavFood");
const mySidenavDessert = document.getElementById("mySidenavDessert");
const menuDropdown = document.getElementById("menuDropdown");
const header__wrapper = document.querySelector(".header__wrapper");
const header__navLeftItemActive1 = document.querySelector(".header__navLeftItemActive1");
const header__navLeftItemActive2 = document.querySelector(".header__navLeftItemActive2");
const header__navLeftItemActive3 = document.querySelector(".header__navLeftItemActive3");
const shoppingCart = document.getElementById("shoppingCart");
const modalIpoteca = document.getElementById("modalIpoteca");
const modalService = document.getElementById("modalService");

const auth_registration = document.getElementById("auth_registration");
const auth_login = document.getElementById("auth_login");

const overflowHidden = () => {
    document.body.style.overflow = "hidden"
    if (window.innerWidth > 1024) {
        document.body.style.paddingRight = "16px"
    }
};
const overflowAuto = () => {
    document.body.style.overflow = "auto"
    if (window.innerWidth > 1024) {
        document.body.style.paddingRight = ""
    }
};

const modalCityShow = () => {
    connection__city.classList.add("active");
    connection__city_bg_modal.classList.add("active");
    connection__city__modal_wrapper.classList.add("active");
    overflowHidden();
};
const checkMenuCase = (element) => {
    switch (element) {
        case "ul":
        case "li":
        case "a":
        case "label":
        case "input": {
            console.log("something do");
            break;
        }

        default: {
            connection__city.classList.remove("active");
            connection__city_bg_modal.classList.remove("active");
            connection__city__modal_wrapper.classList.remove("active");
            overflowAuto();
            break;
        }
    }
};
const modalCityClose = (e) => {
    checkMenuCase(e.target.tagName.toLowerCase());
};

// connection__city_modalShow.addEventListener("click", modalCityShow);
// connection__city_bg_modal.addEventListener("click", modalCityClose);
// connection__city__modal_wrapper.addEventListener("click", modalCityClose);

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
    menuDropdown.style.height = "500px";
    header__wrapper.classList.add("active");
    header__navLeftItemActive1.classList.add("active");
    header__navLeftItemActive2.classList.add("active");
    header__navLeftItemActive3.classList.add("active");
    if (window.innerWidth > 1024) {
        overflowHidden();
    }

};
const closeMenuDropdown = () => {
    menuDropdown.style.height = "0";
    header__wrapper.classList.remove("active");
    header__navLeftItemActive1.classList.remove("active");
    header__navLeftItemActive2.classList.remove("active");
    header__navLeftItemActive3.classList.remove("active");
    if (window.innerWidth > 1024) {
        overflowAuto();
    }
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
    setTimeout(() => {
        overflowHidden()
    }, 200)
};
const closeShoppingCart = () => {
    shoppingCart.style.width = "0";
    overflowAuto();
};

const showModalIpoteca = () => {
    modalIpoteca.style.marginTop = "0";
    overflowHidden();
};
const closeModalIpoteca = (e) => {
    modalIpoteca.style.marginTop = "-200vh";
    overflowAuto();
};

const showModalService = () => {
    modalService.style.marginTop = 0;
    overflowHidden();
};
const closeModalService = (e) => {
    modalService.style.marginTop = "-200vh";
    overflowAuto();
};

//Auth
const showModalLogin = () => {
    auth_registration.style.marginTop = "-200vh";
    auth_login.style.marginTop = "0";
    overflowHidden();
};
const closeModalLogin = (e) => {
    auth_login.style.marginTop = "-200vh";
    overflowAuto();
};
const showModalRegistration = () => {
    auth_login.style.marginTop = "-200vh";
    auth_registration.style.marginTop = "0";
    overflowHidden();
};
const closeModalRegistration = (e) => {
    auth_registration.style.marginTop = "-200vh";
    overflowAuto();
};

//Filter

const showSearchModal = (modal, wrapper) => {
    document.querySelector("." + modal).classList.add("active");
    document.querySelector("." + wrapper).classList.add("active");
    overflowHidden();
};
const closeSearchModal = (modal, wrapper) => {
    document.querySelector("." + modal).classList.remove("active");
    document.querySelector("." + wrapper).classList.remove("active");
    overflowAuto();
};

//Filter burger

const showFilterBurger = (selector) => {
    document.querySelector("." + selector).classList.add("active");
    overflowHidden();
};
const closeFilterBurger = (selector) => {
    document.querySelector("." + selector).classList.remove("active");
    overflowAuto();
};
