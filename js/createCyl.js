let scene = document.querySelector('a-scene')

function createCylinder() {
  for (let i = 0; i < 45; i++) {
    let el = document.createElement('a-entity')
    el.setAttribute('cylinder', { 'radius': 22, 'height': 0.1 })
    el.classList.add('cylinder')
    el.setAttribute('scale', { x: 0.8, y: 1, z: 0.8 })
    el.setAttribute('rotation', { x: -70, y: 0, z: -20 })
    el.setAttribute('position', { x: 0, y: -10, z: 0 })

    if (i < 6) {
      el.setAttribute('animation', {
        property: 'position',
        to: { x: -60, y: -10, z: 0 },
        dur: i * 4000,
        delay: i * 400,
        easing: 'linear',
        loop: false
      })

      el.setAttribute('animation__scale', {
        property: 'scale',
        to: { x: 1.1, y: 1.5, z: 1.1 },
        dur: i * 2000,
        delay: i * 400,
        dir: 'alternate',
        easing: 'easeOutCubic',
        loop: true
      })
    } else {
      el.setAttribute('animation', {
        property: 'position',
        to: { x: -60, y: -10, z: 0 },
        dur: 12000,
        delay: i * 400,
        easing: 'linear',
        loop: true
      })

      el.setAttribute('animation__scale', {
        property: 'scale',
        to: { x: 1.1, y: 1.5, z: 1.1 },
        dur: 6000,
        delay: i * 400,
        dir: 'alternate',
        easing: 'easeOutCubic',
        loop: true
      })
    }


    scene.appendChild(el);
  }
}

createCylinder()
