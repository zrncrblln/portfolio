import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    objects: THREE.Mesh[];
    animationId: number;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create geometric shapes
    const objects: THREE.Mesh[] = [];

    // Floating Icosahedrons (diamond-like shapes)
    const icoGeometry = new THREE.IcosahedronGeometry(0.5, 0);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0xead14a,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8,
    });

    const positions = [
      { x: -3, y: 2, z: -2 },
      { x: 4, y: -1, z: -3 },
      { x: -2, y: -2, z: -1 },
      { x: 3, y: 2, z: -4 },
      { x: -4, y: 0, z: -2 },
      { x: 2, y: -3, z: -2 },
    ];

    positions.forEach((pos, i) => {
      const mesh = new THREE.Mesh(icoGeometry, icoMaterial.clone());
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.scale.setScalar(0.8 + Math.random() * 0.5);
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );
      objects.push(mesh);
      scene.add(mesh);
    });

    // Torus shapes for rings
    const torusGeometry = new THREE.TorusGeometry(1, 0.02, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0xead14a,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5,
    });

    const torus1 = new THREE.Mesh(torusGeometry, torusMaterial);
    torus1.position.set(-2, 1, -3);
    torus1.rotation.set(Math.PI / 4, Math.PI / 4, 0);
    objects.push(torus1);
    scene.add(torus1);

    const torus2 = new THREE.Mesh(torusGeometry, torusMaterial.clone());
    torus2.position.set(3, -2, -4);
    torus2.scale.setScalar(0.7);
    torus2.rotation.set(Math.PI / 3, Math.PI / 6, 0);
    objects.push(torus2);
    scene.add(torus2);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point lights
    const pointLight1 = new THREE.PointLight(0xead14a, 1, 10);
    pointLight1.position.set(2, 3, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6366f1, 0.8, 10);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.005;

      // Rotate objects
      objects.forEach((obj, i) => {
        obj.rotation.x += 0.002 * (i + 1);
        obj.rotation.y += 0.003 * (i + 1);

        // Floating effect
        obj.position.y += Math.sin(time * 2 + i) * 0.001;
      });

      // Rotate torus rings
      if (torus1) {
        torus1.rotation.x += 0.005;
        torus1.rotation.y += 0.003;
      }
      if (torus2) {
        torus2.rotation.x -= 0.004;
        torus2.rotation.y += 0.005;
      }

      // Mouse parallax effect on camera
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      sceneRef.current!.animationId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Store refs for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      objects,
      animationId: 0,
    };

    // Start animation and store the animation ID
    const animationId = requestAnimationFrame(animate);
    sceneRef.current.animationId = animationId;

    return () => {
      // Cancel the animation loop to prevent WebGL context issues
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Use captured container reference to avoid stale closure
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose all geometries
      icoGeometry.dispose();
      torusGeometry.dispose();

      // Dispose all materials
      icoMaterial.dispose();
      torusMaterial.dispose();

      // Dispose renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
