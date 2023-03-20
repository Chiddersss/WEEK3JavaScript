const coordinates = document.getElementById('coordinates')

document.addEventListener('click', () => {
    coordinates.textContent = `X: ${event.clientX} px   Y: ${event.clienty}`
})