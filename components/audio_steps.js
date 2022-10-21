var audioStep = document.getElementById('steps')
/* let camera = document.getElementById('rig')
 */
document.addEventListener("keydown", function (e) {
    if (e.key === 'w' || e.key === 's' || e.key === 'a' || e.key === 'd' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key === 'w' && e.key === 'Shift' || e.key === 'a' && e.key === 'Shift' || e.key === 's' && e.key === 'Shift' || e.key === 'd' && e.key === 'Shift') {
        audioStep.playbackRate = 1
        audioStep.play()
    }

    if (e.code === 'KeyW' && e.shiftKey || e.code === 'KeyA' && e.shiftKey || e.code === 'KeyS' && e.shiftKey || e.code === 'KeyD' && e.shiftKey) {
        let wasdControls = camera.getAttribute('wasd-controls')
        wasdControls.acceleration = 420
        audioStep.playbackRate = 1.5
        audioStep.play()
    }
})

document.addEventListener("keyup", function (e) {
    audioStep.pause()
    let wasdControls = camera.getAttribute('wasd-controls')
    wasdControls.acceleration = 220
})

