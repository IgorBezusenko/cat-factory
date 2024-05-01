
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

