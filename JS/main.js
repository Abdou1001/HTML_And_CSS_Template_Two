//  ======== init AOS library ========
AOS.init();

// ======== to top button ========
let toTop = document.querySelector(".to-top");
let services = document.getElementById("services")

// show the to top button after the services section
window.addEventListener("scroll", _ => {
    // get skills Offset Top
    let servicesOffsetTop = services.offsetTop;
    // get services Outer Height
    let servicesOuterHeight = services.offsetHeight;
    // get window Height
    let windowHeight = this.innerHeight;
    // get window Height
    let windowScrollTop = this.pageYOffset;

    if ((windowScrollTop + 200) > (servicesOffsetTop + servicesOuterHeight - windowHeight)){
        toTop.style.cssText = `display: block`
    }else {
        toTop.style.cssText = `display: none`
    }
})

// if user click on the to top button, user will go up. 
toTop.addEventListener("click", _ => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// ======== nav menu ========
const menu = document.querySelector(".list")
const overlay = document.querySelector(".overlay")

// if click on the menu icon, the nav will open or close
menu.addEventListener("click", _ => {
    menu.classList.toggle("open")
})

// if click pn the overlay, the nav will close
overlay.addEventListener("click", _ => {
    menu.classList.remove("open")
})

// if the user scroll or click on the links, the nav will close
window.addEventListener("scroll", _ => {
    menu.classList.remove("open")
})


// ======== landing Section ========

// turn on the swiper library
// make the img landing page change
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper .swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',

    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    }
});

// ======== portfolio Section ========
const porLis = document.querySelectorAll(".shuffel li")
const porBox = document.querySelectorAll(".portfolio-content .box")

// add and reove class active from lis
porLis.forEach(ele => {
    ele.addEventListener("click", _ => {
        porLis.forEach(e => {
            e.classList.remove("active")
        })
    
        ele.classList.add("active")
        
        // check if the all li acive if ? will show all if : will hide will  
        if (ele.dataset.por != "all"){
            porBox.forEach(ele => {
                ele.style.display = "none"
            })
            // show the img have same li title from dataset
            document.querySelectorAll(ele.dataset.por).forEach(e => e.style.display = "grid")
    } else {
        porBox.forEach(ele => {
                ele.style.display = "grid"
            })
    }
    })
})

// ======== Stat Section ========
const statSection = document.querySelector(".stat")
const statNum = document.querySelectorAll(".stat .box .num")
let IsStatWork = true

// counter, we will use in window.onscroll  
function statcount(ele) {
    let num = ele.dataset.num
    
    let count = setInterval(()=>{
        ele.textContent++
        if (num == ele.textContent){
            clearInterval(count)
        }
        },30 / num)
}

// ======== SKILLS Section ======== 
// skills

const skillsSection = document.querySelector(".skills");
let skillspar = document.querySelectorAll(`.skills .par span[data-num]`)
let skillsRate = document.querySelectorAll(`.skills .par span.rate`)
let IsSkillsWork = true


// counter and make the pars full,  we will use in window.onscroll
function skillsFull(){
    skillspar.forEach((ele, ind1) => {
        let numWidth = ele.dataset.num
        let full = 0

    let count = setInterval(()=>{
        full++
        
        skillsRate.forEach((ele, ind2) => {
            if (ind1 == ind2){
                ele.textContent = `${full}%`
            }
        })

        ele.style.width = `${full}%`

        if (numWidth == full){
            clearInterval(count)
        }
        
        },1500 / numWidth)
    })
}


// if the scetion reach to the goal the function will happen
window.onscroll = () => {
    if(window.scrollY >= statSection.offsetTop - 300 ){
        if (IsStatWork){
            statNum.forEach(ele => {statcount(ele)})
        }
        IsStatWork = false
    }
    if (window.scrollY >= skillsSection.offsetTop - 300){
        if (IsSkillsWork){
            skillsFull()
        }
        IsSkillsWork = false
    }
}

// test
var swiper2 = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
    grabCursor: true,

    pagination: {
        el: '.mySwiper .swiper-pagination',
        clickable: true,
    },
});

// ======== footer Section ========
let copy = document.querySelector(".copy .date")
let year = new Date().getFullYear()

copy.textContent = year