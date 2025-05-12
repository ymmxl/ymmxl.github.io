"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  type: "circle" | "square" | "triangle";
}

interface MovingBackgroundProps {
  accentColor: string;
}

export default function MovingBackground({ accentColor }: MovingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapes = useRef<Shape[]>([]);
  const requestRef = useRef<number | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Initialize shapes with Midnight Command theme colors
    if (shapes.current.length === 0) {
    const baseColors = ["#1E3A5F", "#2E4A6F", "#3E5A8F", "#FFD700"];
    const shapeTypes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];
    
    shapes.current = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 60 + 20,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
      color: baseColors[Math.floor(Math.random() * baseColors.length)],
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
    }));
  };
    shapes.current.forEach((shape, index) => {
      if (index % 3 === 0) {
        shape.color = accentColor;
      }
    });
    const drawShape = (shape: Shape) => {
      if (!ctx) return;
      
      ctx.fillStyle = shape.color;
      ctx.globalAlpha = 0.2;
      
      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(shape.x, shape.y - shape.size / 2);
          ctx.lineTo(shape.x + shape.size / 2, shape.y + shape.size / 2);
          ctx.lineTo(shape.x - shape.size / 2, shape.y + shape.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
      }
    };
    
    const updateShape = (shape: Shape) => {
      shape.x += shape.speedX;
      shape.y += shape.speedY;
      
      // Bounce off edges
      if (shape.x < 0 || shape.x > canvas.width) {
        shape.speedX *= -1;
      }
      
      if (shape.y < 0 || shape.y > canvas.height) {
        shape.speedY *= -1;
      }
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.current.forEach(shape => {
        updateShape(shape);
        drawShape(shape);
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [accentColor]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"/>
  );
}