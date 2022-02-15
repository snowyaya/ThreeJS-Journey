// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#495371' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

// Camera
// parameter: view amplitutde, also call it fov — Camera frustum vertical field of view.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 8
camera.position.x = 3
camera.position.z = 6

scene.add(camera)

// Renderer => result drawn into a canvas
// A canvas is a HTML element in which you can draw stuff
// Three.js will use WebGL to draw the render inside this canvas
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// Resize the renderer => resize the canvas
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

// To transform an object, we can use the following properties
// position: an object with x, y, z. Three.js use forward/backward axis to be z
// rotation, 
// scale