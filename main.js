import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer ();

console.log(scene)
console.log(camera)
console.log(renderer)

document.appendChild(renderer)