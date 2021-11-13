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
[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
    el.addEventListener('click',e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
    })
  })