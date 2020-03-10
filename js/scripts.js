
var page = new FullPage("#main", {

    // section selector
    section: '.section',

    // animation options
    animationDuration: 700,
    animationTiming: 'ease',
    animationTranform: 'transform',

    // enable side navigation
    pagination: true,

    // enable keyboard navigation
    keyboard: true,

    // enable touch events
    touch: true,

    // touch limit in ms
    touchLimit: 100,

    // infinite loop
    loop: false,

    // callbacks
    onLeave: null,
    afterLoad: null,

});

document.getElementById("to-top").addEventListener("click", () => {
    page.moveTo(0);
    $('html, body').animate({ scrollTop: 0 }, 500);
})
