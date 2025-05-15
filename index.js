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
    } else {
        BurgerMenu.style.right = '0px';
        document.getElementById("burger-menu-icon").classList.add("icon-menu-opened");
        document.getElementById("burger-menu-button").classList.add("burger-menu-icon-active");
        document.getElementById("blackout").style.display = 'block';
    }
}