$('#testimonial-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    margin: 20,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#team-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('#blog-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    margin: 20,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#testimonial2-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    center:true,
    autoplay:true,
    margin: 10,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
