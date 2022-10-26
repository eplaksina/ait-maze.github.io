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
        if ((gift.getAttribute('scale').x == 3 || gift.getAttribute('scale').x == 4) && i != 1) {
            i = 0            
/*             audioStep.pause()
 */            magicSound.play()
            counterPoints++
            takenGifts.innerHTML = counterPoints
        }

        gift.setAttribute('animation', { 'property': 'scale', "to": { x: 0.001, y: 0.001, z: 0.001 }, "loop": false, "dur": 200 })
        i++
    }
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
    let treeGift1 = document.getElementById('treeGift1')
    let treeGift2 = document.getElementById('treeGift2')
    let treeGift3 = document.getElementById('treeGift3')
    let treeGift4 = document.getElementById('treeGift4')
    let treeGift5 = document.getElementById('treeGift5')
    let treeGift6 = document.getElementById('treeGift6')
    let magic = document.getElementById('magic2')

    if (treePosition.z + 55 >= cameraPos.z && treePosition.z - 55 <= cameraPos.z && treePosition.x + 55 >= cameraPos.x && treePosition.x - 55 <= cameraPos.x && takenGifts.innerText == 6) {

        if (i != 1 && treeGift4.getAttribute('scale').x < 0.01) {
            i = 0
            magic.play()
        }

        treeGift4.setAttribute('animation', { 'property': 'scale', "to": { x: 2.2, y: 2.2, z: 2.2 }, "loop": false, "dur": 200 })

        setTimeout(() => { treeGift2.setAttribute('animation', { 'property': 'scale', "to": { x: 1.8, y: 1.8, z: 1.8 }, "loop": false, "dur": 200 }) }, 200)
        setTimeout(() => { treeGift1.setAttribute('animation', { 'property': 'scale', "to": { x: 1.5, y: 1.5, z: 1.5 }, "loop": false, "dur": 200 }) }, 400)
        setTimeout(() => { treeGift3.setAttribute('animation', { 'property': 'scale', "to": { x: 1, y: 1, z: 1 }, "loop": false, "dur": 200 }) }, 600)
        setTimeout(() => { treeGift5.setAttribute('animation', { 'property': 'scale', "to": { x: 1.5, y: 1.5, z: 1.5 }, "loop": false, "dur": 200 }) }, 800)
        setTimeout(() => { treeGift6.setAttribute('animation', { 'property': 'scale', "to": { x: 1.8, y: 1.8, z: 1.8 }, "loop": false, "dur": 200 }) }, 1000)

        setTimeout(() => { catImg.classList.add('visible') }, 1200)

        i++
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




