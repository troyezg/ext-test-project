function BurgerHover() {
    document.getElementById("burger-menu-icon-line-1").classList.add('line-hover-active');
}

function BurgerLeave() {
    document.getElementById("burger-menu-icon-line-1").classList.remove('line-hover-active');
}

function BurgerMenu() {
    let BurgerMenu = document.getElementById("burger-menu");
    console.log(BurgerMenu.style.display);
    if (BurgerMenu.style.right == '0px') {
        BurgerMenu.style.right = '-300px';
        document.getElementById("burger-menu-icon").classList.remove("icon-menu-opened");
        document.getElementById("burger-menu-button").classList.remove("burger-menu-icon-active");
        document.getElementById("blackout").style.display = 'none';
        document.querySelector(".mobile-header-logo").classList.remove("mobile-header-logo--active");
        document.querySelector(".mobile-header-logo").classList.add("mobile-header-logo--hidden");
        document.body.style.overflow = '';
    } else {
        BurgerMenu.style.right = '0px';
        document.getElementById("burger-menu-icon").classList.add("icon-menu-opened");
        document.getElementById("burger-menu-button").classList.add("burger-menu-icon-active");
        document.getElementById("blackout").style.display = 'block';
        document.querySelector(".mobile-header-logo").classList.remove("mobile-header-logo--hidden");
        document.querySelector(".mobile-header-logo").classList.add("mobile-header-logo--active");
        document.body.style.overflow = 'hidden';
    }
}

function PrettyCheckbox() {
    let checkbox = document.getElementById("request-checkbox");
    let checkboxIcon = document.getElementById("request-checkbox-icon");
    if (checkbox.checked) {
        console.log("Галочка!");
        checkboxIcon.setAttribute("width", "10");
    } else {
        console.log("Не галочка!");
        checkboxIcon.setAttribute("width", "0");
    }
}

function InputValidation(id) {
    let input = document.getElementById(id);
    if (id == 'request-name-form') {
        if (input.value.trim().length > 0 && isNaN(input.value.trim())) {
        input.classList.add("validation-success");
        input.classList.remove("validation-error");
        } else {
            input.classList.add("validation-error");
            input.classList.remove("validation-success");
        }
    } else if (id == 'request-number-form') {
        const phoneTemplate = /^\+?[0-9]{10,15}$/;
        if (phoneTemplate.test(input.value.trim())) {
            input.classList.add("validation-success");
            input.classList.remove("validation-error");
        } else {
            input.classList.add("validation-error");
            input.classList.remove("validation-success");
        }
    }
}