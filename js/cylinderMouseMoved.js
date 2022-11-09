const htmlElement = document.querySelector("html");
htmlElement.addEventListener("mousemove", getMouseDirectionCylinder);
let windowWidth = window.innerWidth;
let cylinders = document.querySelectorAll('.cylinder')

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
})

function getMouseDirectionCylinder(e) {
  const mousetrigger = Math.round(e.pageX / windowWidth * 10 - 5)
  for (let i = 0; i < cylinders.length; i++) {
    cylinders[i].setAttribute('rotation', { x: -60, y: 0, z: -20 + mousetrigger })
  }
}

window.addEventListener('touchmove', function (e) {
  const touchtrigger = Math.round(parseInt(e.changedTouches[0].pageX) / windowWidth * 18 - 9)
  for (let i = 0; i < cylinders.length; i++) {
    cylinders[i].setAttribute('rotation', { x: -60, y: 0, z: -20 + touchtrigger })
  }

})