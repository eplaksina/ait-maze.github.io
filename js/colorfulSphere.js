AFRAME.registerComponent('colorful-sphere', {
  init: function () {
    var el = this.el;

    var geometry = new THREE.IcosahedronGeometry(10, 5);
    var material = new THREE.MeshStandardMaterial({ color: "#222", transparent: true, side: THREE.DoubleSide, alphaTest: 1, opacity: 1, roughness: 1 });


    var image = document.createElement('img');
    var alphaMap = new THREE.Texture(image);
    image.onload = function () {
      alphaMap.needsUpdate = true;
    };
    image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGUlEQVQoU2NkYGD4z4AHMP7//x+/gmFhAgCXphP14bko/wAAAABJRU5ErkJggg==';
    material.alphaMap = alphaMap;
    material.alphaMap.magFilter = THREE.NearestFilter; // THREE.LinearFilter
    material.alphaMap.wrapT = THREE.RepeatWrapping;
    material.alphaMap.repeat.y = 6;

    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = -Math.PI / 4;

    el.setObject3D('mesh', mesh);

    const time = 1;

    function animate(t) {
      t++;
      requestAnimationFrame(animate)
      mesh.material.alphaMap.offset.y = t * 0.00015 ;
    }

    animate(time)
  },

})

