const scroll = document.querySelector('.up'); 
    let counter = 0 
    
    window.addEventListener('scroll', () => { 
        if (window.pageYOffset < 200) { 
            scroll.style.display = "none" 
            counter++ 
        } if (window.pageYOffset > 500 && counter > 0) { 
            scroll.style.display = "block" 
        } }) 
        scroll.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: "smooth" }) }) 


const panelBtn = document.querySelectorAll('.panel__link')
const panelList = document.querySelectorAll('.panel__list')

panelBtn.forEach((el,i) =>{
    el.addEventListener('click', (e) =>{
        e.preventDefault();
        panelList.forEach((item, im) =>{
            if (i !== im) {
                item.classList.remove('open')
            }
        })
        panelList[i].classList.toggle('open')
    })
})

document.addEventListener('click', (e) =>{
    if (!e.target.closest('.panel__link') ){
        panelList.forEach((p) =>{
            p.classList.remove('open')
        })
    }
})


const panelBlock = document.querySelector('.panel__block')
const panel = document.querySelector('.panel')

panelBlock.addEventListener('click', (e) => {
    if (e.target.classList.contains('panel__block')) {
        panel.classList.add('panel-open')
    } else if (e.target.closest('.panel__close')) {
        panel.classList.remove('panel-open')
    }
})

