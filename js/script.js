$('.header_btn, .button-submit').click(function (event) {
   event.preventDefault();
});

$('.topnav a, .toTop').mPageScroll2id({
    // offset : 50,
    scrollSpeed: 1500
});