let camera = document.getElementById('rig')
let gift1 = document.getElementById('gift1')
let gift2 = document.getElementById('gift2')
let gift3 = document.getElementById('gift3')
let gift4 = document.getElementById('gift4')
let gift5 = document.getElementById('gift5')
let gift6 = document.getElementById('gift6')

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

}

function setVisible(gift, cameraPos, x1, x2, z1, z2) {
    let giftPosition = gift.getAttribute('position')
    if (giftPosition.z + z1 >= cameraPos.z && giftPosition.z + z2 <= cameraPos.z && giftPosition.x + x1 >= cameraPos.x && giftPosition.x + x2 <= cameraPos.x) {
        if (gift.getAttribute('visible')) {
            i = 0
            counterPoints++
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


function countPoints() {
    
}
