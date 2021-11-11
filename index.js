// Import stylesheets
import './style.css';

import * as THREE from 'three';
import gsap from 'gsap';
/**
 * Sizes
 */
const sizes = {};
sizes.width = window.innerWidth;
sizes.height = window.innerHeight;

window.addEventListener('resize', () => {
  // Save sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});

/**
 * Environnements
 */
// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Test
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
scene.add(cube);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(sizes.width, sizes.height);
gsap.to(cube.position, { duration: 1, delay: 1, x: 2 });
gsap.to(cube.position, { duration: 1, delay: 2, x: 0 });
/**
 * Loop
 */
const loop = () => {
  // Update
  // cube.rotation.y += 0.01

  // Render
  renderer.render(scene, camera);

  // Keep looping
  window.requestAnimationFrame(loop);
};
loop();
