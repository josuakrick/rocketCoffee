const nav = document.querySelector ('.header nav')
const toggle = document.querySelectorAll ('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle ('show')
    })
}

var x = window.screen.availWidth || window.screen.width || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

document.body.onresize = function () {
    if ( x >= 1180) {
       nav.classList.add('show')
    }
}




