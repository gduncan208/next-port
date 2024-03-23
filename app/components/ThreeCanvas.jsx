"use client";
import { useEffect, useRef } from 'react';
import styles from "../page.module.css";
import * as THREE from 'three';

const ThreeCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        50, 
        window.innerHeight / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 96;

      // const canvas = document.getElementById('myThreeJsCanvas');
      const renderer = new THREE.WebGL1Renderer({
        canvas: canvasRef.current,
        antialias: true,
      });

      const setSize = () => {
       let newWidth = window.innerWidth;
       let setHeight = 800;

       if (newWidth < 600) {
        newWidth = window.innerWidth;
        let mobileHeight = 900;
        renderer.setSize(newWidth, mobileHeight);
        camera.aspect = newWidth / mobileHeight;
       } else {
        camera.aspect = newWidth / setHeight;
        renderer.setSize(newWidth, setHeight);
       }
       camera.updateProjectionMatrix();
      };

      setSize();
      window.addEventListener('resize', setSize); 
  
      //document.getElementById('mainS').appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      const spotLight = new THREE.SpotLight(0xffffff, 0.5);
      spotLight.castShadow = true;
      spotLight.position.set(0, 50, 32);
      scene.add(spotLight);

      const boxGeomety = new THREE.BoxGeometry(16, 16, 16);
      const boxMaterial = new THREE.MeshNormalMaterial();
      const boxMesh = new THREE.Mesh(boxGeomety, boxMaterial);
      scene.add(boxMesh);

      const animate = () => {
        boxMesh.rotation.x += 0.01;
        boxMesh.rotation.y += 0.01;
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };
      animate();
    }, []);

    return (
      <canvas ref={canvasRef} />  
    );
};
  

  export default ThreeCanvas;