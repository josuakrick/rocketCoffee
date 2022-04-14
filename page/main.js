const nav = document.querySelector ('.header nav')
const toggle = document.querySelectorAll ('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle ('show')
    })
}

document.body.onload = function () {
    if ( document.body.clientWidth >= 1180) {
       nav.classList.add('show')
    }
    else {
        nav.classList.remove('show')
    }
}




