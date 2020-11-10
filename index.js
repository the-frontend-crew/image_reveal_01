const init = () => {
    const el = document.querySelector('.image_reveal')
    setTimeout(() => {
        el.classList.add('active')
    }, 100);
}

window.onload = init()