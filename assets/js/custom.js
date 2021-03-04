$('#main-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#team-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('#property-carousel').owlCarousel({
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
$('#client-carousel').owlCarousel({
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
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
