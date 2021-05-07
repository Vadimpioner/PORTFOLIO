// /* скрипт меню */

function menuAdaptive(hamburger, menu, menuClose, menuLink) {
    hamburger = document.querySelector(hamburger)
    menu = document.querySelector(menu)
    menuClose = document.querySelector(menuClose)
    menuLink = document.querySelectorAll(menuLink);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // преостанавливаем скролл при появлении модального окна
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    menuLink.forEach(item => {
        item.querySelector("a").addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
    
        });
    });

    document.addEventListener('keydown', (e) => { // событие keydown срабатывает при нажатии кнопок
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

menuAdaptive('.hamburger', '.menu', '.menu__close', '.menu__link')

/* скрипт автоматического изменения шкалы умений */
const counters = document.querySelectorAll('.skills__percent-nomber'),
    lines = document.querySelectorAll('.skills__percent-line');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


/* скрипт плавного скролла */
$("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});



$(document).ready(function() {
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});