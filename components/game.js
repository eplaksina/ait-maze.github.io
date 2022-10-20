let camera = document.getElementById('rig')
let gift1 = document.getElementById('gift1')
let gift2 = document.getElementById('gift2')
let gift3 = document.getElementById('gift3')
let gift4 = document.getElementById('gift4')
let gift5 = document.getElementById('gift5')
let gift6 = document.getElementById('gift6')

var takenGifts = document.getElementById('takeGifts')

var magicSound = document.getElementById('magic')
var i = 0
var counterPoints = 0
camera.addEventListener('componentchanged', hideGift)

function hideGift(e) {
    var cameraPos = camera.getAttribute('position')

    setVisible(gift1, cameraPos, 20, -22, 20, -20)
    setVisible(gift2, cameraPos, 20, -20, +20, -20)
    setVisible(gift3, cameraPos, 10, -10, 20, -20)
    setVisible(gift4, cameraPos, 10, -10, 20, -20)
    setVisible(gift5, cameraPos, 10, -10, 20, -20)
    setVisible(gift6, cameraPos, 20, -20, 20, -20)
    giveGift(cameraPos)
}

function setVisible(gift, cameraPos, x1, x2, z1, z2) {
    let giftPosition = gift.getAttribute('position')
    if (giftPosition.z + z1 >= cameraPos.z && giftPosition.z + z2 <= cameraPos.z && giftPosition.x + x1 >= cameraPos.x && giftPosition.x + x2 <= cameraPos.x) {
        if (gift.getAttribute('visible')) {
            i = 0
            counterPoints++
            takenGifts.innerHTML = counterPoints
        }

        gift.setAttribute('visible', 'false')

        playMagicSound()
    }
}

function playMagicSound() {
    if (i === 0) {
        magicSound.play()
    }

    i++
}

let startGameWindow = document.getElementsByClassName('start-game')[0]
let startGameBtn = document.getElementsByClassName('start-game__btn')[0]


startGameBtn.addEventListener('click', function () {
    startGameWindow.classList.add("hidden")
})

function giveGift(cameraPos) {
    let tree = document.getElementById('tree')
    let treePosition = tree.getAttribute('position')

    let catImg = document.getElementsByClassName('end-game')[0]

    if (treePosition.z + 40 >= cameraPos.z && treePosition.z - 40 <= cameraPos.z && treePosition.x + 40 >= cameraPos.x && treePosition.x - 40 <= cameraPos.x && takenGifts.innerText == 6) {
        catImg.classList.add('visible')
    }
}

let endGameBtn = document.getElementsByClassName('end-game__btn')[0]
endGameBtn.addEventListener('click', function () {
    window.location.reload()
})


let restart = document.getElementsByClassName('header__restart-btn')[0]
restart.addEventListener('click', function () {
    window.location.reload()
})




