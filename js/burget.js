$(() => {
    const footer = $('.footer');
    const burger = $('.wrapper');
    const menu = $('.burger-menu');

    burger.on('click', function (e) {
        if (!menu.hasClass('burger-active')) {
            menu.addClass('burger-active')
            footer.addClass('footer-active')
        } else {
            menu.animate({
                "margin-left": '100%',
                height: '100%',
            }, 200, () => {
                menu.removeClass('burger-active')
                footer.removeClass('footer-active')
                menu.css('margin-left', '0%');

            });

        }
    })
})