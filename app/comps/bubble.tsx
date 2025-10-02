"use client";

import { useEffect, useRef } from 'react';

function BubbleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const bubbles: {
            x: number;
            y: number;
            r: number;
            speed: number;
            alpha: number;
            drift: number;
        }[] = [];

        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        for (let i = 0; i < 40; i++) {
            bubbles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 20 + Math.random() * 40,
                speed: 0.3 + Math.random() * 0.7,
                alpha: 0.1 + Math.random() * 0.2,
                drift: (Math.random() - 0.5) * 0.5,
            });
        }

        function draw() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            for (const b of bubbles) {
                ctx.save();
                ctx.globalAlpha = b.alpha;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,0.15)';
                ctx.shadowColor = '#fff';
                ctx.shadowBlur = 20;
                ctx.fill();
                ctx.restore();

                b.y -= b.speed;
                b.x += b.drift;
                if (b.y + b.r < 0) {
                    b.y = height + b.r;
                    b.x = Math.random() * width;
                }
                if (b.x - b.r > width) {
                    b.x = -b.r;
                }
                if (b.x + b.r < 0) {
                    b.x = width + b.r;
                }
            }
            animationFrameId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
        />
    );
}

export default BubbleBackground;