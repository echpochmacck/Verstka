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
    $(".header__logo-phone").on('click', (e)=>{{
        $('.modal-container').addClass('modal-active')
    }})
    $('.btn').on('click', (e)=>{{
        $('.modal-container').removeClass('modal-active')
    }})
})