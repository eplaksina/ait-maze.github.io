var audioStep = document.getElementById('steps')
let windowWidth = window.innerWidth
let cameraRig = document.getElementById('rig')

window.onresize = () => {
    windowWidth = window.innerWidth
    cursorVisible()
    mouseDown()
    mouseUp()
}

function cursorVisible() {
    if (windowWidth <= 1000) {
        let cursor = document.getElementById('cursor')
        cursor.setAttribute('visible', true)
    }
}

function mouseDown() {
    window.onmousedown = function () {
        if (windowWidth <= 1000) {
            let movementControls = cameraRig.getAttribute('movement-controls')
            movementControls.speed = 1.5
            audioStep.playbackRate = 1.5
            audioStep.play()
        }
    }
}

function mouseUp() {
    window.addEventListener('mouseup', function () {
        if (windowWidth <= 1000) {
            let movementControls = cameraRig.getAttribute('movement-controls')
            movementControls.speed = 0.8
            audioStep.pause()
        }
    })
}

function keyDown() {
    document.addEventListener("keydown", function (e) {
        if (e.key === 'w' || e.key === 's' || e.key === 'a' || e.key === 'd' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key === 'w' && e.key === 'Shift' || e.key === 'a' && e.key === 'Shift' || e.key === 's' && e.key === 'Shift' || e.key === 'd' && e.key === 'Shift') {
            audioStep.playbackRate = 1
            audioStep.play()
        }

        if (e.code === 'KeyW' && e.shiftKey || e.code === 'KeyA' && e.shiftKey || e.code === 'KeyS' && e.shiftKey || e.code === 'KeyD' && e.shiftKey) {
            let movementControls = cameraRig.getAttribute('movement-controls')
            movementControls.speed = 1.5
            audioStep.playbackRate = 1.5
            audioStep.play()
        }
    })
}

function keyUp() {
    document.addEventListener("keyup", function (e) {
        audioStep.pause()
        let movementControls = cameraRig.getAttribute('movement-controls')
        movementControls.speed = 0.8
    })
}

cursorVisible()
mouseDown()
mouseUp()
keyDown()
keyUp()
