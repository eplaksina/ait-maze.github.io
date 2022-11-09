
AFRAME.registerComponent('cylinder', {
  schema: {
    radius: { type: 'number', default: 8 },
    height: { type: 'number', default: 1.5 },
    color: { type: 'color', default: '#fff' },
    segmentsRadial: { type: 'number', default: 100 },
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    // okabe
    const colors = [];
    let col;
    const cylinerGeo = new THREE.CylinderGeometry(data.radius, data.radius, data.height, data.segmentsRadial);
    const cylinerMat = new THREE.MeshPhongMaterial({
      vertexColors: true,
    });
    const cyliner = new THREE.Mesh(cylinerGeo, cylinerMat);

    let positions = cylinerGeo.attributes.position.array;


    let len = positions.length;
    for (let i = 0; i < len; i++) {
      // randomize the *z* position only
      if (i % 20 === 2) {
/*         positions[i] += Math.PI * Math.random() * 0.2;
 */        col = new THREE.Color(
        positions[i] * 4,
        positions[i] * 4,
        positions[i] * 12
      );
        colors.push(col.r, col.g, col.b);
      }
    }

    el.setObject3D('mesh', cyliner);

    const Noise = new ImprovedNoise();
    function updatePoints(t) {
      let ns;
      const coordsPos = [];

      const colors = [];
      let col;
      const lowColor = new THREE.Color(0, 0.5, 1);
      const highColor = new THREE.Color(0.1, 0, 0);

      let positions = cylinerGeo.attributes.position.array;

      let posLenght = positions.length;

      let noiseMagnitude = 0.3;
      let noiseFrequency = 0.2;
      for (let i = 0; i < posLenght; i++) {
        if (i % 3 === 2) {
          ns = Noise.noise(
            positions[i - 1] * noiseFrequency,
            positions[i - 2] * noiseFrequency,
            t
          );
          positions[i - 1] = Math.PI * ns * noiseMagnitude;
          col = new THREE.Color().lerpColors(lowColor, highColor, ns);
          coordsPos.push(positions[i - 2], positions[i - 1], positions[i]);
          colors.push(col.r, col.g, col.b);
        }
      }

      cylinerGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(coordsPos, 3)
      );


      cylinerGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    }

    const timeMult = 0.001;
    function animate(timeStamp) {
      requestAnimationFrame(animate);
      updatePoints(timeStamp * timeMult);
    }

    // START!
    animate(0);

  },


})

