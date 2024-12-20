

$(()=>{
    $(".user-item").on('click', (e)=>{{
        $('.modal-container').addClass('modal-active')
    }})
    $('.modal-container').on('click', (e)=>{{
        if ($(e.target).hasClass('modal-active')) {
            $('.modal-container').removeClass('modal-active');
        }
    }})
})