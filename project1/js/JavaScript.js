let elements = document.querySelectorAll('.panel')
for (element of elements) {
    element.addEventListener('mouseover', (e) => {
            e.target.classList.add('active')
    })
}
for (element of elements) {
    element.addEventListener('mouseout', (e) => {
        remove()
    })
}
function remove() {
    for (element of elements) {
        element.classList.remove('active')
    }
}