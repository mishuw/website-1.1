const btn = document.querySelector('.switch-mode-btn');
const elements = document.querySelector('.modal-overlay, .modal');
const closeModal = document.querySelector('.close-modal')
const showProfile = document.querySelector('.discord_profile_viewer')

btn?.addEventListener('click', () => {
    let themeData = localStorage.getItem("theme");
    if(themeData === 'dark') {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        console.log('Theme switch (light)');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else if(themeData === null || themeData === 'light') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.toggle('dark');
        console.log('Theme switch (dark)');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-sun-bright"></i>';
    }
});

$(document).ready(function() {
    let themeData = localStorage.getItem('theme');
    if(themeData === 'dark') {
        document.documentElement.classList.toggle('dark');
        console.log('Loaded theme (dark)');
        document.getElementById('switch-mode-btn')?.innerHTML = '<i class="fa-solid fa-sun-bright"></i>';
    } else if(themeData === null || themeData === 'light') {
        document.documentElement.classList.remove('dark');
        console.log('Loaded theme (light)');
        document.getElementById('switch-mode-btn')?.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})

document.addEventListener("keydown", function (pressedKey) {
    if (pressedKey.shiftKey && pressedKey.key === "K") {
        $('.discords, ._discord').hasClass('active') ? $('.discords, ._discord').removeClass('active') && $('body').css('overflow', 'auto') : $('.discords, ._discord').addClass('active') && $('body').css('overflow', 'hidden');
    }
    if(pressedKey.key === 'Escape'){
        if($('.modal-overlay, .modal').hasClass('active')){
            $('.modal-overlay, .modal').removeClass('active')
            $('body').css('overflow', 'auto')
        }
    }
    if(pressedKey.shiftKey && pressedKey.key === "C"){
        $('.contact, ._contact').hasClass('active') ? $('.contact, ._contact').removeClass('active') && $('body').css('overflow', 'auto') : $('.contact, ._contact').addClass('active') && $('body').css('overflow', 'hidden');
    }
});

closeModal.addEventListener('click', () => {
    $('.discords, ._discord').removeClass('active');
    $('body').css('overflow', 'auto')
})

showProfile.addEventListener('click', () => {
    $('.discords, ._discord').addClass('active');
    $('body').css('overflow', 'hidden')
})

function whoIsMishu() {
    document.getElementById("whoIsMishu").innerHTML = 'Can';
};
