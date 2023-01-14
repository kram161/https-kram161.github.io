const navbar = document.querySelector('.header__navbar')
const navbarWrapper = document.querySelector('.header__navbar__wrapper');
const navbarList = document.querySelector('.header__navbar__list');

navbarList.addEventListener('click', () => {
    navbar.classList.add('active');
})

navbarWrapper.addEventListener('click', () => {
    navbar.classList.remove('active');
})

document.addEventListener('click', (e) => {
    const target = e.target;
    const itsNavbarList = target === navbarList || navbarList.contains(target);
    !itsNavbarList ? navbar.classList.remove('active') : '';
})

const sliders = document.querySelectorAll('.slider');



sliders.forEach( slider => {
    const sliderName = slider.getAttribute('data-slider-name');
    $('.' + sliderName + '__slider').on('init', function (event, slick) {
        $('.' + sliderName +'__slider-navigation').append('<div class="' + sliderName + '__slider-navigation__counter"><p class="'+ sliderName +'__slider-navigation__counter-current"></p><p>/</p><p class="'+ sliderName +'__slider-navigation__counter-total"></p></div>');
        $('.' + sliderName + '__slider-navigation__counter-current').text(slick.currentSlide + 1);
        $('.' + sliderName + '__slider-navigation__counter-total').text(slick.slideCount);
    }).slick({
        infinite: true,
        arrows: true,
        prevArrow: $('.' + sliderName + '__slider-navigation-prev'),
        nextArrow: $('.' + sliderName + '__slider-navigation-next')
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.' + sliderName + '__slider-navigation__counter-current').text(nextSlide + 1);
    });
})

