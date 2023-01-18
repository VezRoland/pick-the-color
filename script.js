let colors = []
let pickedColor = -1
const colorAmount = 6

document.querySelector('.colors').addEventListener('click', (e) => {
    if (e.target.className !== 'color') return
    submitColor(e.target.style.background.match(/rgb\((.+)\)/)[1])
})

const random = (r) => Math.round(Math.random() * r)

function startGame() {
    colors = []
    pickedColor = random(5)
    document.querySelector('.colors').innerHTML = ''

    for (let i = 0; i < colorAmount; i++) {
        const color = document.createElement('div')
        color.className = 'color'
        color.style.background = `rgb(${generateColor()})`
    
        document.querySelector('.colors').appendChild(color)
    }

    document.querySelector('.picked').textContent = `rgb(${colors[pickedColor]})`
}

function submitColor(color) {
    const elem = document.querySelectorAll('.color')[colors.indexOf(color)]
    
    if (color === colors[pickedColor]) return highlightColor(elem, true)
    highlightColor(elem, false)
}

function highlightColor(elem, right) {
    elem.classList.add(right ? 'correct' : 'wrong')
    setTimeout(() => {
        elem.classList.remove(right ? 'correct' : 'wrong')
    }, 1000)
}

function generateColor() {
    const color = `${random(255)}, ${random(255)}, ${random(255)}`
    colors.push(color)
    return color
}

startGame()