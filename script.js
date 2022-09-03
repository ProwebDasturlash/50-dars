let nav = document.querySelector('.header__nav')
class SCROLL {
    constructor(obj) {
        this.el = typeof obj.el === 'string' ? document.querySelector(obj.el) : obj.el instanceof HTMLElement ? obj.el : ''
        this.el.style.position = 'fixed'
        this.arrow = document.querySelector(obj.arrow)
        this.el.style.top = this.scroll()

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
        this.arrow.addEventListener('click', () => this.scrollTop())
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    scroll() {
        if (window.innerHeight - this.el.clientHeight - window.scrollY > 0) {
            this.el.style.top = (window.innerHeight - this.el.clientHeight - window.scrollY) + 'px'
        } else {
            this.el.style.top = 0
        }
        if (window.scrollY > window.innerHeight) {
            this.arrow.classList.add('active')
        } else if (window.scrollY < 500) {
            this.arrow.classList.remove('active')
        }
    }
}
const scroll = new SCROLL({
    el: nav,
    arrow: '.scroll-top'
})

class String{
    constructor(opt){
        this.title = document.querySelector(opt.title);
        this.text = this.title.innerHTML;
        this.title.innerHTML = '';
        this.add()
    }
    add(i = 0){
        setTimeout(() => {
            this.title.innerHTML += this.text.charAt(i);
            i++
            this.add(i)
        }, 200);
    }
}



const string = new String({
    title: ".header__content h1"
})




