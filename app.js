document.querySelectorAll(".key");JSON

function playSound() {
    new Audio().play()
}

pianoKeys.forEach((pianoKey, i) => {
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', playSound(newUrl))
})