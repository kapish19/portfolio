import React, { useEffect, useRef } from 'react';

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const numStars = 80;
    const stars: Array<{ x: number; y: number; z: number; color: string }> = [];

    // Classic Windows 95 screensaver colors (mostly white and cool retro cyans/magentas/greys)
    const colors = [
      '#ffffff', // Bright white
      '#ffffff', 
      '#ffffff', 
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#c0c0c0', // Retro Silver
      '#ffd700', // Gold/Yellow
    ];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const speed = 1.2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Simple grid lines drawing to suggest perspective (retro synthwave wireframe vibe)
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const k = 140 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          // Star details
          const size = (1 - star.z / width) * 4.5 + 0.5;
          const opacity = (1 - star.z / width) * 0.7;

          ctx.fillStyle = star.color;
          ctx.globalAlpha = opacity;
          
          // Draw pixelated stars (rectangular style matching win98 desktop)
          ctx.fillRect(
            Math.floor(px), 
            Math.floor(py), 
            Math.max(1, Math.floor(size)), 
            Math.max(1, Math.floor(size))
          );
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="retro-starfield"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      style={{ mixBlendMode: 'screen', opacity: 0.35 }}
    />
  );
}
