'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(0);
  const nodesRef = useRef<Node[]>([
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
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [frameSkip, setFrameSkip] = useState(0);
  const frameSkipCount = useRef(0);
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      // Set frame skip rate based on device
      setFrameSkip(isMobileDevice ? 2 : 0); // Skip every other frame on mobile
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Position the nodes in a circle around the center
  const updateCanvasDimensions = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    if (!container) return;
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    // Update node positions
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Use smaller radius on mobile
    const radius = Math.min(centerX, centerY) * (isMobile ? 0.5 : 0.7);
    
    // Position nodes (except center node)
    const nodes = nodesRef.current;
    const mainNodes = nodes.filter(node => node.id !== 'start');
    const centerNode = nodes.find(node => node.id === 'start');
    
    if (centerNode) {
      centerNode.x = centerX;
      centerNode.y = centerY;
      // Adjust center node size for mobile
      centerNode.radius = isMobile ? 40 : 45;
    }
    
    mainNodes.forEach((node, index) => {
      const angle = (index / mainNodes.length) * Math.PI * 2;
      node.x = centerX + radius * Math.cos(angle);
      node.y = centerY + radius * Math.sin(angle);
      // Adjust regular node size for mobile - increase for better touch targets
      node.radius = isMobile ? 30 : 30;
    });
  }, [isMobile]);

  // Apply canvas dimensions when mobile state changes
  useEffect(() => {
    updateCanvasDimensions();
    
    // Update on resize
    window.addEventListener('resize', updateCanvasDimensions);
    return () => window.removeEventListener('resize', updateCanvasDimensions);
  }, [isMobile, updateCanvasDimensions]);

  // Draw the neural network animation
  const drawNetwork = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    // Clear canvas - use clearRect with transparency
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const nodes = nodesRef.current;
    // Find center node
    const centerNode = nodes.find(node => node.id === 'start');
    if (!centerNode) return;
    
    // Draw connections (simpler on mobile)
    ctx.strokeStyle = darkMode ? 'rgba(79, 209, 197, 0.2)' : 'rgba(79, 209, 197, 0.3)';
    ctx.lineWidth = isMobile ? 1.5 : 2;
    
    nodes.forEach(node => {
      if (node.id === 'start') return;
      
      // Simplified gradient for mobile
      if (isMobile) {
        ctx.strokeStyle = darkMode ? 'rgba(79, 209, 197, 0.3)' : 'rgba(79, 209, 197, 0.4)';
      } else {
        // Draw connection to center with pulse effect
        // Get a numeric value from the node.id for variation (safely)
        const nodeIdChar = node.id.charAt(node.id.length - 1);
        const nodeValue = isNaN(parseInt(nodeIdChar)) ? node.id.length : parseInt(nodeIdChar);
        const pulseOffset = Math.sin(timeRef.current + nodeValue * 0.7) * 0.4 + 0.6;
        
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
      }
      
      ctx.beginPath();
      ctx.moveTo(centerNode.x, centerNode.y);
      ctx.lineTo(node.x, node.y);
      ctx.stroke();
    });
    
    // Draw nodes
    nodes.forEach(node => {
      // Simplified glow effect on mobile
      let pulseSize = 1.0;
      if (!isMobile) {
        // Node glow effect with pulse
        const nodeIdChar = node.id.charAt(node.id.length - 1);
        const nodeValue = isNaN(parseInt(nodeIdChar)) ? node.id.length : parseInt(nodeIdChar);
        pulseSize = node.id === activeNode?.id 
          ? 1.2
          : 1 + Math.sin(timeRef.current + nodeValue) * 0.1;
      } else if (node.id === activeNode?.id) {
        pulseSize = 1.1;
      }
      
      if (isMobile) {
        // Simplified rendering for mobile
        if (node.id === 'start') {
          ctx.fillStyle = darkMode ? 'rgba(255, 76, 76, 0.8)' : 'rgba(229, 62, 62, 0.9)';
        } else {
          ctx.fillStyle = darkMode ? 'rgba(0, 191, 255, 0.8)' : 'rgba(0, 127, 190, 0.9)';
        }
        
        // Node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (activeNode?.id === node.id ? 1.1 : 1), 0, Math.PI * 2);
        ctx.fill();
        
        // Node border
        ctx.strokeStyle = darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (activeNode?.id === node.id ? 1.1 : 1), 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // Full rendering for desktop
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
        ctx.lineWidth = isMobile ? 1 : 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (activeNode?.id === node.id ? 1.1 : 1), 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Improve the visibility of node labels for mobile
      if (isMobile && !activeNode) {
        // Draw minimal labels directly on nodes for better visibility without hovering
        ctx.font = '10px sans-serif';
        ctx.fillStyle = darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Only draw abbreviated names
        let shortName = node.name.split(' ')[0];
        if (shortName.length > 6) shortName = shortName.substring(0, 6);
        ctx.fillText(shortName, node.x, node.y);
      }
    });
  }, [activeNode, darkMode, isMobile]);
  
  // Set up animation loop
  useEffect(() => {
    // Animation function that doesn't trigger re-renders
    const animate = () => {
      // Update time with ref to avoid state updates
      timeRef.current += 0.01;
      
      // Frame skipping for mobile performance
      if (frameSkip > 0) {
        frameSkipCount.current = (frameSkipCount.current + 1) % (frameSkip + 1);
        if (frameSkipCount.current !== 0) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }
      }
      
      // Draw the network
      drawNetwork();
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [drawNetwork, frameSkip]);
  
  // Find node under a point
  const findNodeAtPoint = useCallback((x: number, y: number): Node | null => {
    const nodes = nodesRef.current;
    
    // Increase touch area for mobile by checking with a larger radius
    const touchRadiusBoost = isMobile ? 15 : 0;
    
    for (const node of nodes) {
      const distance = Math.sqrt(
        Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2)
      );
      
      if (distance <= node.radius + touchRadiusBoost) {
        return node;
      }
    }
    
    return null;
  }, [isMobile]);
  
  // Handle mouse/touch interactions
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    // Skip excessive pointer move events on mobile
    if (isMobile && e.pointerType === 'touch') return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if pointer is over any node
    const hoveredNode = findNodeAtPoint(x, y);
    
    setActiveNode(hoveredNode);
    
    // Change cursor style
    canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
  };
  
  const handlePointerLeave = () => {
    // Clear active node when pointer leaves canvas
    if (isMobile) return; // Keep active node on mobile for touch friendliness
    setActiveNode(null);
  };
  
  const handleTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    // Prevent scrolling when interacting with the canvas
    e.preventDefault();
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    
    if (!touch) return;
    
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    // Check if touch is on any node
    const touchedNode = findNodeAtPoint(x, y);
    
    if (touchedNode) {
      setActiveNode(touchedNode);
      
      // Navigate immediately on touch for mobile
      window.location.href = touchedNode.path;
    }
  };
  
  const handleClick = () => {
    if (activeNode) {
      // Navigate directly using window.location
      window.location.href = activeNode.path;
    }
  };
  
  return (
    <div className="w-full h-full relative" ref={containerRef}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full touch-manipulation"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        onTouchStart={handleTouch}
      />
      
      {/* Only show tooltip if not on mobile or if a node is active on mobile */}
      {activeNode && !isMobile && (
        <div 
          className={`absolute p-3 rounded-md shadow-xl backdrop-blur-sm z-10 font-mono
                     max-w-[200px]
                     ${darkMode 
                          ? 'bg-gray-800/90 border border-blue-500/30' 
                          : 'bg-white/90 border border-blue-500/30'}`}
          style={{
            left: `${activeNode.x + activeNode.radius + 10}px`,
            top: `${activeNode.y}px`,
            transform: 'translateY(-50%)'
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
      
      {/* Mobile navigation helper - visible instruction */}
      {isMobile && (
        <div className="absolute top-2 left-0 right-0 text-center">
          <p className={`text-xs px-2 py-1 rounded-lg inline-block 
                        ${darkMode ? 'bg-gray-800/80 text-gray-300' : 'bg-white/80 text-gray-700'}`}>
            Tap a node to navigate
          </p>
        </div>
      )}
    </div>
  );
} 