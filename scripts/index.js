fixedElements = document.querySelectorAll('.fixed');
window.addEventListener('scroll', function(e){
    if(this.scrollY >= 45){
        fixedElements.forEach(el => {
            el.classList.add('sticky');
        });
    }else{
        fixedElements.forEach(el => {
            el.classList.remove('sticky');
        });
    }
})
const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};
headerButton.onclick = menuToggle;
window.onclick = (e) => {
    if (menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu)){
        menuToggle();
    }
    if(e.target.classList.contains('header__link')){
        setTimeout(() => {
            menuToggle()
        }, 100);
    }
};