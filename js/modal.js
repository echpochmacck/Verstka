// const logo = document.querySelector('.header__logo-phone');
// const modal = document.querySelector('.modal-container');

// logo.addEventListener('click', ()=>{
//     // alert('asdad')
//     modal.classList.add('modal-active')
// })

// document.querySelector('.btn').addEventListener('click', ()=>{
//     // alert('asdad')
//     modal.classList.remove('modal-active')
// })






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