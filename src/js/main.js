let features = new Swiper('.features .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.features-next',
        prevEl: '.features-prev'
    }
});

let apartments = new Swiper('.apartments .swiper-container', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.apartments-next',
        prevEl: '.apartments-prev'
    }
});

let one = new Swiper('.one.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.view-next',
        prevEl: '.view-prev'
    },
    pagination: {
        el: '.view-pag',
        clickable: true
    }
});

let two = new Swiper('.two.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.view-next',
        prevEl: '.view-prev'
    },
    pagination: {
        el: '.view-pag',
        clickable: true
    }
});

let three = new Swiper('.three.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.view-next',
        prevEl: '.view-prev'
    },
    pagination: {
        el: '.view-pag',
        clickable: true
    }
});

let map = new Swiper('.map .swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: true,
    pagination: {
        el: '.map-pag',
        clickable: true
    }
});

let main = new Swiper('.main .swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: true,
    pagination: {
        el: '.main-pag',
        clickable: true
    }
});

let photo = new Swiper('.inside .photo', {
    loop: true,
    speed: 1000,
    simulateTouch: false,
    navigation: {
        nextEl: '.inside-next',
        prevEl: '.inside-prev'
    },
});

let text = new Swiper('.inside .text .swiper-container', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.inside-next',
        prevEl: '.inside-prev'
    },
});

let april19 = new Swiper('.company .april19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let may19 = new Swiper('.company .may19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let june19 = new Swiper('.company .june19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let july19 = new Swiper('.company .july19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let modalApartments = new Swiper('.modal .swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.modal-next',
        prevEl: '.modal-prev'
    },
});

$('body').on('click', '.dreams__item.active', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.dreams__item:not(.active)', (e) => {
    $('.dreams__item').removeClass('active');
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.view__nav a', (e) => {
    $('.view__nav a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.view .swiper-container').removeClass('active');
    $('.view .swiper-container.' + $(e.currentTarget).attr('data-slider') + '').addClass('active');
});

$('body').on('click', '.map__toggle', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().toggleClass('active');
});

$('body').on('click', '.ways__nav a:not(.active)', (e) => {
    $('.ways__nav a').removeClass('active');
    $('.ways__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.ways__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('body').on('click', '.company__nav a:not(.active)', (e) => {
    $(e.currentTarget).parent().find('a').removeClass('active');
    $(e.currentTarget).parent().siblings('.company__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.company__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('body').on('click', '.header__hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.menu').toggleClass('active');
    $('.header').toggleClass('active');
});

$('body').on('click', '.call', (e) => {
    $('.callme').addClass('active');
    $('.backdrops').addClass('active');
});

$('body').on('click', '.callme__close', (e) => {
    $('.callme').removeClass('active');
    $('.backdrops').removeClass('active');
});

$('body').on('blur', 'input[type="text"], input[type="email"]', (e) => {
    if ($(e.currentTarget).val() != '') {
        $(e.currentTarget).addClass('active');
    } else {
        $(e.currentTarget).removeClass('active');
    }
});

$('body').on('click', 'a[data-modal]', (e) => {
    $('.modal').removeClass('active');
    $('.modals').addClass('active');
    $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').addClass('active');
});

$('body').on('click', '.modal__close', (e) => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [58.036736, 56.025610],
            zoom: 16.3                                              
        }, {
            searchControlProvider: 'yandex#search'
        }),

        shop1 = new ymaps.Placemark([58.038118, 56.032042], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        shop2 = new ymaps.Placemark([58.036726, 56.034632], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        shop3 = new ymaps.Placemark([58.034625, 56.036334], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        shop4 = new ymaps.Placemark([58.035765, 56.029511], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        shop5 = new ymaps.Placemark([58.039426, 56.027372], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        shop6 = new ymaps.Placemark([58.039434, 56.025458], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        shop7 = new ymaps.Placemark([58.034612, 56.023165], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        stadium = new ymaps.Placemark([58.039882, 56.034070], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/stadium.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby1 = new ymaps.Placemark([58.038682, 56.036099], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby2 = new ymaps.Placemark([58.035348, 56.035576], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby3 = new ymaps.Placemark([58.033441, 56.035180], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby4 = new ymaps.Placemark([58.033424, 56.032700], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby5 = new ymaps.Placemark([58.035580, 56.032625], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby6 = new ymaps.Placemark([58.038311, 56.024567], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby7 = new ymaps.Placemark([58.036701, 56.024058], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        baby8 = new ymaps.Placemark([58.035265, 56.023591], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        school1 = new ymaps.Placemark([58.038563, 56.040285], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        school2 = new ymaps.Placemark([58.037194, 56.036185], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        school3 = new ymaps.Placemark([58.039541, 56.030181], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        school4 = new ymaps.Placemark([58.034777, 56.027139], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        ambulance1 = new ymaps.Placemark([58.037506, 56.023601], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        ambulance2 = new ymaps.Placemark([58.036040, 56.024703], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance.svg', iconImageSize: [54, 54], iconImageOffset: [-26, -26], });
        stepa = new ymaps.Placemark([58.038414, 56.038119], {}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/stepa.svg', iconImageSize: [160, 80], iconImageOffset: [-80, -110], });

    myMap.geoObjects
        .add(stepa)
        .add(ambulance1)
        .add(ambulance2)
        .add(shop1)
        .add(shop2)
        .add(shop3)
        .add(shop4)
        .add(shop5)
        .add(shop6)
        .add(shop7)
        .add(stadium)
        .add(baby1)
        .add(baby2)
        .add(baby3)
        .add(baby4)
        .add(baby5)
        .add(baby6)
        .add(baby7)
        .add(baby8)
        .add(school1)
        .add(school2)
        .add(school3)
        .add(school4);

    myMap.behaviors.disable('scrollZoom'); 
});

$(window).on('load', () => {
    $('.loader').animate({ opacity: 0 }, 500, () => { $('.loader').remove() })
    $('html').removeClass('loading');
});

$('body').on('submit', '.questions__form', (e) => {
    e.preventDefault();
    
    var form_data = $(this).serialize(); //собераем все данные из формы
    $.ajax({
    type: 'POST', //Метод отправки
    url: 'form.php', //путь до php фаила отправителя
    data: form_data,
        success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
            alert('все ок'); // пoкaжeм eё тeкст
        }
    });
});

$('.ways').height($('.ways').height());

$('.modal').hide();

$(document).bind('click', (e) => {
    if (!$(e.target).is('.menu') && !$(e.target).is('.header__hamburger')) {
        $('.menu').removeClass('active');
        $('.header').removeClass('active');
        $('.header__hamburger').removeClass('active');
    }
});

$("a[data-scroll]").click((e) => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('section[data-scroll="' + $(e.currentTarget).attr('data-scroll') + '"]').offset().top
    }, 2000);
});