/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

function initializeTestimonialsCarousel() {
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
}

// Destroy and reinitialize the carousel on language change
document.addEventListener('languageChanged', function () {
    const carousel = $(".testimonial-carousel");

    // Destroy the carousel
    carousel.trigger('destroy.owl.carousel');
    carousel.find('.owl-stage-outer').children().unwrap();
    carousel.removeClass("owl-center owl-loaded owl-text-select-on");

    // Update the content of all testimonial items
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    const mainPageContent2 = {
        "en": {
            "recenzijaText1": "This is fantastic! We couldn't have imagined better! I believe we have the best apartment website in town by far! I am so grateful to Ilija and his professionalism. Thank you!",
            "recenzijaText2": "Professional, dedicated, and innovative. Our new website is better than we ever could have imagined. Thank you for everything!",
            "recenzijaText3": "They created a fantastic website for me! Modern, functional, and attractive design. Professionalism and creativity at the highest level. Highly recommended!"
        },
        "sr": {
            "recenzijaText1": "Ovo je sjajno! Bolje nismo mogli ni da zamislimo! Mislim da imamo ubedljivo najbolji vebsajt za apartmane u gradu! Previše sam zahvalan Iliji i njegovoj profesionalnosti. Hvala mu.",
            "recenzijaText2": "Profesionalni, predani i inovativni. Naš novi vebsajt je bolji nego što smo ikada mogli da zamislimo. Hvala na svemu!",
            "recenzijaText3": "Napravili su mi fantastičan veb sajt! Moderan, funkcionalan i privlačan dizajn. Profesionalnost i kreativnost na najvišem nivou. Toplo preporučujem!"
        }
    };

    // Update all testimonial texts
    document.querySelectorAll('.testimonial-item').forEach((item, index) => {
        item.querySelector('.recenzija-text').innerText = mainPageContent2[selectedLanguage][`recenzijaText${index + 1}`];
    });

    // Reinitialize the carousel
    initializeTestimonialsCarousel();
});

window.addEventListener('DOMContentLoaded', event => {

     // Spinner
     var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1500);
    };
    spinner();

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .linkZatvaranjeNav')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

     // Facts counter
    $(document).ready(function() {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000,
            formatter: function (n) {
                return n + '%'; // Adds % sign in front of the number
            }
        });
    });

     // Testimonials carousel
    initializeTestimonialsCarousel();
    //  $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     margin: 25,
    //     dots: false,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-chevron-left"></i>',
    //         '<i class="bi bi-chevron-right"></i>'
    //     ],
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         992:{
    //             items:2
    //         }
    //     }
    // });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

});




function randomizePosition(element) {
    const header = document.querySelector('.masthead');
    const headerHeight = header.clientHeight;
    const headerWidth = header.clientWidth;

    const maxX = headerWidth - element.clientWidth;
    const maxY = headerHeight - element.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

document.addEventListener('DOMContentLoaded', function () {
    const balls = document.querySelectorAll('.color-ball');

    balls.forEach(ball => {
        setInterval(() => {
            randomizePosition(ball);
        }, 5000); // Promeni poziciju svake 10 sekundi
    });
});

window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.phone-icon').classList.add('show');
        document.querySelector('.email-icon').classList.add('show');

        var phoneToast = new bootstrap.Toast(document.getElementById('phoneToast'), {
            delay: 6000 
        });
        phoneToast.show();

        // var phoneToast = new bootstrap.Toast(document.getElementById('phoneToast'));
        // phoneToast.show();
    }, 6000);
});
