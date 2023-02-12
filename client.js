document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
})

document.querySelector('#cancel').addEventListener('click',() => {
    window.location='/'
})