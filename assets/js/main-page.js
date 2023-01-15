const navbar = document.querySelector('.header__navbar')
const navbarWrapper = document.querySelector('.header__navbar__wrapper');
const navbarList = document.querySelector('.header__navbar__list');
const headerBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');

navbarList.addEventListener('click', () => {
    navbar.classList.add('active');
})

navbarWrapper.addEventListener('click', () => {
    navbar.classList.remove('active');
    headerBurger.classList.remove('active');
})

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    const target = e.target;
    const itsNavbarList = target === navbarList || navbarList.contains(target);
    const itsHeaderBurger = target === headerBurger || headerBurger.contains(target)
    const itsHeader = target === header;
    if(!itsNavbarList && !itsHeaderBurger && !itsHeader){
        navbar.classList.remove('active');
        headerBurger.classList.remove('active');
    }
})

const sliders = document.querySelectorAll('.slider');

sliders.forEach( slider => {
    const sliderName = slider.getAttribute('data-slider-name');
    if(sliderName === 'pre-header'){
        $('.' + sliderName + '__slider').on('init', function (event, slick) {
            $('.' + sliderName +'__slider-navigation').append('<div class="' + sliderName + '__slider-navigation__counter"><p class="'+ sliderName +'__slider-navigation__counter-current"></p><p>/</p><p class="'+ sliderName +'__slider-navigation__counter-total"></p></div>');
            $('.' + sliderName + '__slider-navigation__counter-current').text(slick.currentSlide + 1);
            $('.' + sliderName + '__slider-navigation__counter-total').text(slick.slideCount);
        }).slick({
            infinite: true,
            arrows: true,
            dots: true,
            appendDots: $('.' + sliderName + '__slider-navigation-dots'),
            prevArrow: $('.' + sliderName + '__slider-navigation-prev'),
            nextArrow: $('.' + sliderName + '__slider-navigation-next')
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.' + sliderName + '__slider-navigation__counter-current').text(nextSlide + 1);
        });
    }else if(sliderName === 'best-offers'){
        $('.' + sliderName + '__slider').on('init', function (event, slick) {
            $('.' + sliderName +'__slider-navigation').append('<div class="' + sliderName + '__slider-navigation__counter"><p class="'+ sliderName +'__slider-navigation__counter-current"></p><p>/</p><p class="'+ sliderName +'__slider-navigation__counter-total"></p></div>');
            $('.' + sliderName + '__slider-navigation__counter-current').text(slick.currentSlide + 1);
            $('.' + sliderName + '__slider-navigation__counter-total').text(slick.slideCount);
        }).slick({
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.' + sliderName + '__slider-navigation-prev'),
            nextArrow: $('.' + sliderName + '__slider-navigation-next'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        variableWidth: true
                    },
                },
            ]
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.' + sliderName + '__slider-navigation__counter-current').text(nextSlide + 1);
        });
    }

})



const bestOffersColor = document.querySelectorAll('.best-offers__slider-slide__top__color-list-unit');
const colorList = document.querySelectorAll('.best-offers__slider-slide__top__color-list');
const colorListActivator = document.querySelectorAll('.best-offers__slider-slide__top__button');

document.addEventListener('DOMContentLoaded', () => {
    colorList.forEach( list => {
        const activator = list.closest('.best-offers__slider-slide__top').querySelector('.best-offers__slider-slide__top__button');
        list.querySelectorAll('.best-offers__slider-slide__top__color-list-unit').length <= 6 ? activator.style.display = 'none' : '';
    })
})

bestOffersColor.forEach( unit => {
    unit.addEventListener('click', () => {
        const selectedColorList = unit.closest('.best-offers__slider-slide__top__color-list').querySelector('.selected');
        unit.classList.contains('selected') ? unit.classList.remove('selected') : unit.classList.add('selected');
        selectedColorList ? selectedColorList.classList.remove('selected') : '';
    })
})

colorListActivator.forEach( activator => {
    const colorList = activator.closest('.best-offers__slider-slide__top').querySelector('.best-offers__slider-slide__top__color-list');
    activator.addEventListener('click', () => {
        activator.classList.toggle('active');
        colorList.classList.toggle('active');
    })
    document.addEventListener('click', (e) => {
        const target = e.target;
        const itsActivator = target === activator || activator.contains(target);
        const itsColorList = target === colorList || colorList.contains(target)
        if(!itsActivator && !itsColorList){
            activator.classList.remove('active');
            colorList.classList.remove('active')
        }
    })
})

let currentStep = 1;
const nextStepButton = document.querySelectorAll('.next-step-button');
let selectedCheckbox = [];


nextStepButton.forEach(button => {
    button.addEventListener('click', () => {
        currentStep++;
        if (currentStep === 1){
            document.querySelector('.step-1').classList.add('active');
        }else if (currentStep === 2){
            document.querySelector('.step-1').classList.remove('active');
            document.querySelector('.step-2').classList.add('active');
        }else if (currentStep === 3){
            document.querySelector('.step-2').classList.remove('active');
            document.querySelector('.step-3').classList.add('active');
        }
        let questionList = button.closest('.helper__page').querySelector('.helper__page__question-list');
        let checkboxes = questionList.querySelectorAll('.checkbox');
        checkboxes.forEach( checkbox => {
            checkbox.checked ? selectedCheckbox.push(checkbox.id) : '';
        })
    })
})




