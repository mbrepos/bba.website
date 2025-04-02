import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from './styles';

// Define the DweetFunction type with an additional progress parameter
type DweetFunction = (
  t: number,
  progress: number, // Added to handle fade-in and warping post-delay
  x: CanvasRenderingContext2D,
  c: HTMLCanvasElement,
  S: typeof Math.sin,
  C?: typeof Math.cos,
  T?: typeof Math.tan,
  R?: (r: number, g: number, b: number, a?: number) => string
) => void;

const DwitterCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStarted, setIsStarted] = useState(false);
  const startTimeRef = useRef<number | null>(null); // To track time after delay

  // Handle the 1.75-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
      startTimeRef.current = Date.now(); // Record the time when animation starts
    }, 1750); // 1.75-second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const x = canvas.getContext('2d');
    if (!x) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    // Initial size update
    updateCanvasSize();

    // Add resize listener
    window.addEventListener('resize', updateCanvasSize);

    // Define Dwitter utilities
    const S = Math.sin;
    const C = Math.cos;
    const T = Math.tan;
    const R = (r: number, g: number, b: number, a: number = 1) =>
      `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${a})`;

    // Define 3D wireframe "B" vertices
    const createBModel = (scale: number = 1) => {
      const frontVertices = [
        [-1, -2, 0], [-1, 2, 0], // Left vertical bar
        [-1, -2, 0], [0.5, -2, 0], // Top horizontal
        [-1, 0, 0], [0.5, 0, 0], // Middle horizontal
        [-1, 2, 0], [0.5, 2, 0], // Bottom horizontal
        [0.5, -2, 0], [1, -1.5, 0], // Top curve
        [1, -1.5, 0], [1, -0.5, 0], // Right side top
        [1, -0.5, 0], [0.5, 0, 0], // Bottom of top curve
        [0.5, 0, 0], [1, 0.5, 0], // Top of bottom curve
        [1, 0.5, 0], [1, 1.5, 0], // Right side bottom
        [1, 1.5, 0], [0.5, 2, 0], // Bottom curve
      ];

      const backVertices = frontVertices.map(v => [v[0], v[1], -0.5]);
      const connectingEdges = [
        [-1, -2, 0], [-1, -2, -0.5],
        [-1, 2, 0], [-1, 2, -0.5],
        [0.5, -2, 0], [0.5, -2, -0.5],
        [0.5, 0, 0], [0.5, 0, -0.5],
        [0.5, 2, 0], [0.5, 2, -0.5],
        [1, -1.5, 0], [1, -1.5, -0.5],
        [1, -0.5, 0], [1, -0.5, -0.5],
        [1, 0.5, 0], [1, 0.5, -0.5],
        [1, 1.5, 0], [1, 1.5, -0.5],
      ];

      return [...frontVertices, ...backVertices, ...connectingEdges].map(v => [
        v[0] * scale,
        v[1] * scale,
        v[2] * scale,
      ]);
    };

    // Create particles along the model edges
    const createParticles = (vertices: number[][], particleCount: number = 300) => {
      const particles = [];
      for (let i = 0; i < vertices.length; i += 2) {
        const start = vertices[i];
        const end = vertices[i + 1];
        const particlesPerEdge = Math.max(3, Math.floor(particleCount / (vertices.length / 2)));
        for (let j = 0; j < particlesPerEdge; j++) {
          const ratio = j / particlesPerEdge;
          const x = start[0] + (end[0] - start[0]) * ratio;
          const y = start[1] + (end[1] - start[1]) * ratio;
          const z = start[2] + (end[2] - start[2]) * ratio;
          const spread = 0.03;
          const offsetX = (Math.random() - 0.5) * spread;
          const offsetY = (Math.random() - 0.5) * spread;
          const offsetZ = (Math.random() - 0.5) * spread;

          particles.push({
            x: x + offsetX,
            y: y + offsetY,
            z: z + offsetZ,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.2,
            color: [
              100 + Math.random() * 155,
              150 + Math.random() * 105,
              220 + Math.random() * 35,
              Math.random() * 0.5 + 0.5,
            ],
          });
        }
      }
      return particles;
    };

    // Define the 3D animation function with CRT warping and fade-in
    const u: DweetFunction = (t, progress, x, c, S, C, T, R) => {
      if (!C || !R) return;

      const width = c.width;
      const height = c.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Clear canvas
      x.clearRect(0, 0, width, height);

      // Create the model and particles
      const scale = Math.min(width, height) * 0.15;
      const bModel = createBModel(scale);
      const particles = createParticles(bModel, 450);

      // Rotation angles
      const rotY = t * 0.5;
      const rotX = S(t * 0.2) * 0.3;

      // Projection distance
      const d = 2000;

      // Distortion parameters for CRT effect (applied only when progress < 1)
      const distortion = 1 - progress;
      const frequency = 0.02;
      const amplitude = 20;

      // Render particles
      x.globalCompositeOperation = 'lighter';

      particles.forEach(p => {
        const x1 = p.x;
        const y1 = p.y;
        const z1 = p.z;

        // Rotate around Y axis
        const x2 = x1 * C(rotY) + z1 * S(rotY);
        const z2 = z1 * C(rotY) - x1 * S(rotY);

        // Rotate around X axis
        const y2 = y1 * C(rotX) - z2 * S(rotX);
        const z3 = z2 * C(rotX) + y1 * S(rotX);

        // Perspective projection
        const scale = d / (d + z3);
        const projX = centerX + x2 * scale;
        let projY = centerY + y2 * scale;

        // Apply CRT warping distortion if progress < 1
        if (progress < 1) {
          projY += Math.sin(projX * frequency) * amplitude * distortion;
        }

        if (z3 < -d) return;

        const size = p.size * scale;
        const pulse = 0.5 + 0.5 * S(t * p.speed * 3 + p.x * p.y);

        // Apply fade-in with progress
        const alpha = p.color[3] * pulse * (1 - Math.abs(z3) / d) * progress;

        // Draw particle with glow
        const glow = x.createRadialGradient(projX, projY, 0, projX, projY, size * 4);
        glow.addColorStop(0, `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${alpha})`);
        glow.addColorStop(1, `rgba(${p.color[0]},${p.color[1]},${p.color[2]},0)`);

        x.beginPath();
        x.arc(projX, projY, size * 2, 0, Math.PI * 2);
        x.fillStyle = glow;
        x.fill();

        x.beginPath();
        x.arc(projX, projY, size * 0.5, 0, Math.PI * 2);
        x.fillStyle = `rgba(255,255,255,${alpha})`;
        x.fill();
      });

      // Reset composite operation
      x.globalCompositeOperation = 'source-over';

      // Draw connection lines with flicker effect
      if (t % 0.01 < 0.005) {
        for (let i = 0; i < bModel.length; i += 2) {
          const start = bModel[i];
          const end = bModel[i + 1];

          // Start point rotation
          let x1 = start[0];
          let y1 = start[1];
          let z1 = start[2];
          let x2 = x1 * C(rotY) + z1 * S(rotY);
          let z2 = z1 * C(rotY) - x1 * S(rotY);
          let y2 = y1 * C(rotX) - z2 * S(rotX);
          let z3 = z2 * C(rotX) + y1 * S(rotX);
          let scale = d / (d + z3);
          let projX1 = centerX + x2 * scale;
          let projY1 = centerY + y2 * scale;

          // Apply distortion if progress < 1
          if (progress < 1) {
            projY1 += Math.sin(projX1 * frequency) * amplitude * distortion;
          }

          // End point rotation
          x1 = end[0];
          y1 = end[1];
          z1 = end[2];
          x2 = x1 * C(rotY) + z1 * S(rotY);
          z2 = z1 * C(rotY) - x1 * S(rotY);
          y2 = y1 * C(rotX) - z2 * S(rotX);
          z3 = z2 * C(rotX) + y1 * S(rotX);
          scale = d / (d + z3);
          let projX2 = centerX + x2 * scale;
          let projY2 = centerY + y2 * scale;

          if (progress < 1) {
            projY2 += Math.sin(projX2 * frequency) * amplitude * distortion;
          }

          if (z3 < -d) continue;

          // Draw line with fade-in
          const gradient = x.createLinearGradient(projX1, projY1, projX2, projY2);
          gradient.addColorStop(0, `rgba(80, 200, 240, ${0.3 * progress})`);
          gradient.addColorStop(0.5, `rgba(120, 220, 255, ${0.6 * progress})`);
          gradient.addColorStop(1, `rgba(80, 200, 240, ${0.3 * progress})`);

          x.beginPath();
          x.moveTo(projX1, projY1);
          x.lineTo(projX2, projY2);
          x.strokeStyle = gradient;
          x.lineWidth = 1 + S(t * 2) * 0.5;
          x.stroke();
        }
      }
    };

    // Animation loop
    let frame = 0;
    const FPS = 120;
    let animationFrameId: number;

    const animate = () => {
      const time = frame / FPS;
      if (startTimeRef.current) {
        const elapsed = (Date.now() - startTimeRef.current) / 1000; // Time since animation started
        const transitionDuration = 1.0; // 1-second transition after delay
        const progress = Math.min(1, elapsed / transitionDuration); // Progress from 0 to 1 over 1 second
        try {
          u(time, progress, x, canvas, S, C, T, R);
        } catch (e) {
          console.error('Animation error:', e);
          return;
        }
      }
      frame++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isStarted]);

  return <Canvas ref={canvasRef} />;
};

export default DwitterCanvas;