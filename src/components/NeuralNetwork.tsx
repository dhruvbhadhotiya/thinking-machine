'use client';

import { useEffect, useRef, useState } from 'react';

// Define the structure for each section/node
interface Node {
  id: string;
  name: string;
  description: string;
  path: string;
  x: number;
  y: number;
  radius: number;
}

interface NeuralNetworkProps {
  darkMode: boolean;
}

export default function NeuralNetwork({ darkMode }: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: 'projects',
      name: 'Project Case Files',
      description: 'Classified AI experiments and project showcases',
      path: '/projects',
      x: 0,
      y: 0,
      radius: 30
    },
    {
      id: 'math',
      name: 'Math Notebooks',
      description: 'Deep dives into mathematical concepts',
      path: '/math',
      x: 0,
      y: 0,
      radius: 30
    },
    {
      id: 'lab',
      name: 'Experiments Lab',
      description: 'Interactive demos and visualizations',
      path: '/lab',
      x: 0,
      y: 0,
      radius: 30
    },
    {
      id: 'logs',
      name: 'Thought Logs',
      description: 'Research journal entries and musings',
      path: '/logs',
      x: 0,
      y: 0,
      radius: 30
    },
    {
      id: 'about',
      name: 'About Me',
      description: 'My ML journey and background',
      path: '/about',
      x: 0,
      y: 0,
      radius: 30
    },
    {
      id: 'playground',
      name: 'AI Playground',
      description: 'Build and experiment with AI models',
      path: '/playground',
      x: 0,
      y: 0,
      radius: 30
    },
    // Center node - larger
    {
      id: 'start',
      name: 'Start Exploring',
      description: 'Begin your journey through The Thinking Machine',
      path: '/',
      x: 0,
      y: 0,
      radius: 45
    }
  ]);

  // Position the nodes in a circle around the center
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      // Update node positions
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.7;
      
      // Position nodes (except center node)
      const updatedNodes = [...nodes];
      const mainNodes = updatedNodes.filter(node => node.id !== 'start');
      const centerNode = updatedNodes.find(node => node.id === 'start');
      
      if (centerNode) {
        centerNode.x = centerX;
        centerNode.y = centerY;
      }
      
      mainNodes.forEach((node, index) => {
        const angle = (index / mainNodes.length) * Math.PI * 2;
        node.x = centerX + radius * Math.cos(angle);
        node.y = centerY + radius * Math.sin(angle);
      });
      
      setNodes(updatedNodes);
    };
    
    // Initial update
    updateCanvasDimensions();
    
    // Update on resize
    window.addEventListener('resize', updateCanvasDimensions);
    return () => window.removeEventListener('resize', updateCanvasDimensions);
  }, []);

  // Animation time variables
  const [time, setTime] = useState(0);
  
  // Draw the neural network with animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Animation function
    const animate = () => {
      setTime(prev => prev + 0.01);
      drawNetwork();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Draw the network
    const drawNetwork = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Find center node
      const centerNode = nodes.find(node => node.id === 'start');
      if (!centerNode) return;
      
      // Draw connections
      ctx.strokeStyle = darkMode ? 'rgba(79, 209, 197, 0.2)' : 'rgba(79, 209, 197, 0.3)';
      ctx.lineWidth = 2;
      
      nodes.forEach(node => {
        if (node.id === 'start') return;
        
         // Draw connection to center with pulse effect
         // Get a numeric value from the node.id for variation (safely)
         const nodeIdChar = node.id.charAt(node.id.length - 1);
         const nodeValue = isNaN(parseInt(nodeIdChar)) ? node.id.length : parseInt(nodeIdChar);
         const pulseOffset = Math.sin(time + nodeValue * 0.7) * 0.4 + 0.6;
         
         // Create pulsing effect on connections
         const gradient = ctx.createLinearGradient(centerNode.x, centerNode.y, node.x, node.y);
         
         if (darkMode) {
           gradient.addColorStop(0, `rgba(79, 209, 197, ${(0.3 * pulseOffset).toFixed(3)})`);
           gradient.addColorStop(1, `rgba(0, 191, 255, ${(0.1 * pulseOffset).toFixed(3)})`);
         } else {
           gradient.addColorStop(0, `rgba(79, 209, 197, ${(0.4 * pulseOffset).toFixed(3)})`);
           gradient.addColorStop(1, `rgba(0, 97, 166, ${(0.2 * pulseOffset).toFixed(3)})`);
         }
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Node glow effect with pulse
        // Get a numeric value from the node.id for variation (safely)
        const nodeIdChar = node.id.charAt(node.id.length - 1);
        const nodeValue = isNaN(parseInt(nodeIdChar)) ? node.id.length : parseInt(nodeIdChar);
        const pulseSize = node.id === activeNode?.id 
          ? 1.2
          : 1 + Math.sin(time + nodeValue) * 0.1;
        
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius * 0.5,
          node.x, node.y, node.radius * 1.5 * pulseSize
        );
        
        if (node.id === 'start') {
          // Crimson for center node
          gradient.addColorStop(0, darkMode ? 'rgba(255, 76, 76, 0.8)' : 'rgba(229, 62, 62, 0.9)');
          gradient.addColorStop(1, 'rgba(255, 76, 76, 0)');
        } else {
          // Electric blue for other nodes
          gradient.addColorStop(0, darkMode ? 'rgba(0, 191, 255, 0.8)' : 'rgba(0, 127, 190, 0.9)');
          gradient.addColorStop(1, darkMode ? 'rgba(0, 191, 255, 0)' : 'rgba(0, 127, 190, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 1.5 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Node body
        if (node.id === 'start') {
          ctx.fillStyle = darkMode 
            ? 'rgba(255, 76, 76, 0.7)' 
            : 'rgba(229, 62, 62, 0.8)';
        } else {
          ctx.fillStyle = darkMode 
            ? 'rgba(0, 191, 255, 0.7)'
            : 'rgba(0, 127, 190, 0.8)';
        }
        
        // Make active node brighter
        if (activeNode && node.id === activeNode.id) {
          ctx.fillStyle = node.id === 'start' 
            ? (darkMode ? 'rgba(255, 76, 76, 0.9)' : 'rgba(229, 62, 62, 1)')
            : (darkMode ? 'rgba(0, 191, 255, 0.9)' : 'rgba(0, 127, 190, 1)');
        }
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (activeNode?.id === node.id ? 1.1 : 1), 0, Math.PI * 2);
        ctx.fill();
        
        // Node border
        ctx.strokeStyle = darkMode 
          ? (node.id === 'start' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)')
          : (node.id === 'start' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)');
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (activeNode?.id === node.id ? 1.1 : 1), 0, Math.PI * 2);
        ctx.stroke();
      });
    };
    
    // Start animation
    animate();
    
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes, activeNode, time, darkMode]);
  
  // Handle mouse interactions
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if mouse is over any node
    let hoveredNode: Node | null = null;
    for (const node of nodes) {
      const distance = Math.sqrt(
        Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2)
      );
      
      if (distance <= node.radius) {
        hoveredNode = node;
        break;
      }
    }
    
    setActiveNode(hoveredNode);
    
    // Change cursor style
    canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
  };
  
  const handleClick = () => {
    if (activeNode) {
      // Navigate directly using window.location
      window.location.href = activeNode.path;
    }
  };
  
  return (
    <div className="w-full h-full relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />
      
      {/* Tooltip for active node */}
      {activeNode && (
        <div 
          className={`absolute p-3 rounded-md shadow-xl backdrop-blur-sm z-10 font-mono
                      ${darkMode 
                          ? 'bg-gray-800/90 border border-blue-500/30' 
                          : 'bg-white/90 border border-blue-500/30'}`}
          style={{
            left: `${activeNode.x + activeNode.radius + 10}px`,
            top: `${activeNode.y}px`,
            transform: 'translateY(-50%)',
            maxWidth: '200px'
          }}
        >
          <h3 className={`font-bold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {activeNode.name}
          </h3>
          <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
            {activeNode.description}
          </p>
        </div>
      )}
    </div>
  );
} 