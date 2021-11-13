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