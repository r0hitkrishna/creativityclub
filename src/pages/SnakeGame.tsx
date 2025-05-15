import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import GameLayout from '@/components/GameLayout';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from 'lucide-react';

// Game constants
const CELL_SIZE = 20;
const GRID_SIZE = 20;
const GRID_WIDTH = CELL_SIZE * GRID_SIZE;
const GRID_HEIGHT = CELL_SIZE * GRID_SIZE;
const INITIAL_SPEED = 150;

// Direction types
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

// Cell position type
type CellPosition = {
  x: number;
  y: number;
};

const SnakeGame = () => {
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Game state refs (to avoid issues with closures in event listeners)
  const snakeRef = useRef<CellPosition[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ]);
  const foodRef = useRef<CellPosition>({ x: 15, y: 10 });
  const directionRef = useRef<Direction>('RIGHT');
  const speedRef = useRef(INITIAL_SPEED);
  const gameLoopRef = useRef<number | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize high score from local storage
  useEffect(() => {
    const storedHighScore = localStorage.getItem('snakeHighScore');
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore));
    }
  }, []);

  // Generate food at a random position
  const generateFood = useCallback(() => {
    const snake = snakeRef.current;
    let newFood: CellPosition;
    let foodOnSnake: boolean;
    
    // Keep generating food until it's not on the snake
    do {
      foodOnSnake = false;
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      
      // Check if food is on snake
      for (let segment of snake) {
        if (segment.x === newFood.x && segment.y === newFood.y) {
          foodOnSnake = true;
          break;
        }
      }
    } while (foodOnSnake);
    
    foodRef.current = newFood;
  }, []);

  // Draw the game
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, GRID_WIDTH, GRID_HEIGHT);
    
    // Draw background grid
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        if ((x + y) % 2 === 0) {
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }
    
    // Draw snake
    const snake = snakeRef.current;
    ctx.fillStyle = '#9b87f5'; // Primary purple
    
    snake.forEach((segment, index) => {
      // Draw snake body with gradient effect
      const opacity = 1 - (index / snake.length) * 0.6;
      ctx.fillStyle = `rgba(155, 135, 245, ${Math.max(0.4, opacity)})`;
      
      // Head is slightly bigger than body
      if (index === 0) {
        const padding = 1;
        ctx.fillRect(
          segment.x * CELL_SIZE + padding,
          segment.y * CELL_SIZE + padding,
          CELL_SIZE - padding * 2,
          CELL_SIZE - padding * 2
        );
      } else {
        const padding = 2;
        ctx.fillRect(
          segment.x * CELL_SIZE + padding,
          segment.y * CELL_SIZE + padding,
          CELL_SIZE - padding * 2,
          CELL_SIZE - padding * 2
        );
      }
    });
    
    // Draw eyes on snake head
    const head = snake[0];
    const eyeSize = 3;
    ctx.fillStyle = 'white';
    
    // Position eyes based on direction
    if (directionRef.current === 'UP') {
      ctx.fillRect(head.x * CELL_SIZE + 5, head.y * CELL_SIZE + 5, eyeSize, eyeSize);
      ctx.fillRect(head.x * CELL_SIZE + CELL_SIZE - 8, head.y * CELL_SIZE + 5, eyeSize, eyeSize);
    } else if (directionRef.current === 'DOWN') {
      ctx.fillRect(head.x * CELL_SIZE + 5, head.y * CELL_SIZE + CELL_SIZE - 8, eyeSize, eyeSize);
      ctx.fillRect(head.x * CELL_SIZE + CELL_SIZE - 8, head.y * CELL_SIZE + CELL_SIZE - 8, eyeSize, eyeSize);
    } else if (directionRef.current === 'LEFT') {
      ctx.fillRect(head.x * CELL_SIZE + 5, head.y * CELL_SIZE + 5, eyeSize, eyeSize);
      ctx.fillRect(head.x * CELL_SIZE + 5, head.y * CELL_SIZE + CELL_SIZE - 8, eyeSize, eyeSize);
    } else {
      ctx.fillRect(head.x * CELL_SIZE + CELL_SIZE - 8, head.y * CELL_SIZE + 5, eyeSize, eyeSize);
      ctx.fillRect(head.x * CELL_SIZE + CELL_SIZE - 8, head.y * CELL_SIZE + CELL_SIZE - 8, eyeSize, eyeSize);
    }
    
    // Draw food with pulsing effect
    const food = foodRef.current;
    const time = Date.now();
    const pulse = 1 + Math.sin(time / 200) * 0.1;
    const foodSize = CELL_SIZE * 0.7 * pulse;
    const foodX = food.x * CELL_SIZE + (CELL_SIZE - foodSize) / 2;
    const foodY = food.y * CELL_SIZE + (CELL_SIZE - foodSize) / 2;
    
    ctx.fillStyle = '#ff5e5b'; // Red food
    ctx.beginPath();
    ctx.arc(
      foodX + foodSize / 2,
      foodY + foodSize / 2,
      foodSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
    
    // Add shine to food
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(
      foodX + foodSize / 4,
      foodY + foodSize / 4,
      foodSize / 6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, []);

  // Update game state
  const update = useCallback(() => {
    if (gameOver || isPaused) return;
    
    const snake = [...snakeRef.current];
    const head = { ...snake[0] };
    const food = foodRef.current;
    const direction = directionRef.current;
    
    // Update head position based on direction
    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
    }
    
    // Check for collisions with walls
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      handleGameOver();
      return;
    }
    
    // Check for collisions with self
    for (let i = 0; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        handleGameOver();
        return;
      }
    }
    
    // Add new head to snake
    snake.unshift(head);
    
    // Check if snake ate food
    if (head.x === food.x && head.y === food.y) {
      setScore(prevScore => {
        const newScore = prevScore + 1;
        
        // Update high score if needed
        if (newScore > highScore) {
          setHighScore(newScore);
          localStorage.setItem('snakeHighScore', newScore.toString());
        }
        
        // Speed up the game slightly
        speedRef.current = Math.max(50, INITIAL_SPEED - Math.floor(newScore / 5) * 10);
        
        return newScore;
      });
      
      // Generate new food
      generateFood();
    } else {
      // Remove tail if snake didn't eat
      snake.pop();
    }
    
    // Update snake state
    snakeRef.current = snake;
  }, [gameOver, isPaused, highScore, generateFood]);

  // Handle game over
  function handleGameOver() {
    setGameOver(true);
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
      gameLoopRef.current = null;
    }
    
    toast({
      title: "Game Over!",
      description: `You scored ${score} points.`,
      variant: "destructive"
    });
  }

  // Game loop
  const gameLoop = useCallback(() => {
    update();
    draw();
    
    // Schedule next frame
    gameLoopRef.current = requestAnimationFrame(() => {
      setTimeout(gameLoop, speedRef.current);
    });
  }, [update, draw]);

  // Start game
  const startGame = useCallback(() => {
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
    
    // Reset game state
    snakeRef.current = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];
    directionRef.current = 'RIGHT';
    speedRef.current = INITIAL_SPEED;
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    generateFood();
    
    // Start game loop
    gameLoopRef.current = requestAnimationFrame(() => {
      setTimeout(gameLoop, speedRef.current);
    });
    
    toast({
      title: "Game Started!",
      description: "Use arrow keys or touch controls to move the snake.",
    });
  }, [gameLoop, generateFood, toast]);

  // Pause/resume game
  const togglePause = () => {
    setIsPaused(prev => {
      if (!prev) {
        toast({
          title: "Game Paused",
          description: "Press play to resume.",
        });
      }
      return !prev;
    });
  };

  // Handle keyboard input
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameOver) return;
    
    const direction = directionRef.current;
    
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') directionRef.current = 'UP';
        break;
      case 'ArrowDown':
        if (direction !== 'UP') directionRef.current = 'DOWN';
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') directionRef.current = 'LEFT';
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') directionRef.current = 'RIGHT';
        break;
      case ' ':
        togglePause();
        break;
    }
  }, [gameOver]);

  // Handle direction control buttons
  const handleDirectionButton = (direction: Direction) => {
    if (gameOver || isPaused) return;
    
    const currentDirection = directionRef.current;
    
    // Prevent moving in opposite direction
    if (
      (direction === 'UP' && currentDirection !== 'DOWN') ||
      (direction === 'DOWN' && currentDirection !== 'UP') ||
      (direction === 'LEFT' && currentDirection !== 'RIGHT') ||
      (direction === 'RIGHT' && currentDirection !== 'LEFT')
    ) {
      directionRef.current = direction;
    }
  };

  // Set up event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [handleKeyDown]);

  // Start game on first render
  useEffect(() => {
    startGame();
    
    // Clean up on unmount
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [startGame]);

  // Resize canvas to fit container
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // For mobile, make the canvas smaller to fit on screen
      if (isMobile) {
        const containerSize = Math.min(window.innerWidth - 40, 320);
        canvas.width = containerSize;
        canvas.height = containerSize;
        canvas.style.width = `${containerSize}px`;
        canvas.style.height = `${containerSize}px`;
      } else {
        canvas.width = GRID_WIDTH;
        canvas.height = GRID_HEIGHT;
        canvas.style.width = `${GRID_WIDTH}px`;
        canvas.style.height = `${GRID_HEIGHT}px`;
      }
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [isMobile]);

  return (
    <GameLayout
      title="Snake Game"
      description="The classic Nokia Snake game. Eat food to grow longer, but don't hit the walls or yourself!"
      instructions="Use arrow keys on desktop or the touch controls on mobile to change direction. Collect as many red dots as possible without crashing."
      controls={{
        desktop: (
          <p className="text-muted-foreground">
            <span className="font-medium">Arrow keys</span>: Change direction<br />
            <span className="font-medium">Spacebar</span>: Pause/Resume
          </p>
        ),
        mobile: (
          <p className="text-muted-foreground">
            Use the direction buttons below the game to control the snake.
          </p>
        )
      }}
    >
      <div className="flex flex-col items-center">
        {/* Score display */}
        <div className="flex justify-between w-full max-w-sm mb-4">
          <div className="text-muted-foreground">
            <span className="font-medium">Score:</span> {score}
          </div>
          <div className="text-muted-foreground">
            <span className="font-medium">High Score:</span> {highScore}
          </div>
        </div>
        
        {/* Game canvas */}
        <div className={`relative ${isMobile ? 'max-w-[320px]' : ''} mx-auto rounded-lg overflow-hidden border-2 border-white/10`}>
          <canvas
            ref={canvasRef}
            width={GRID_WIDTH}
            height={GRID_HEIGHT}
            className={`bg-black/30 ${gameOver ? 'opacity-50' : ''}`}
          />
          
          {/* Game over overlay */}
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
              <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
              <p className="mb-4 text-muted-foreground">
                Your score: {score}
              </p>
              <Button onClick={startGame} className="bg-accent hover:bg-accent/90">
                Play Again
              </Button>
            </div>
          )}
          
          {/* Pause overlay */}
          {isPaused && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <h3 className="text-2xl font-bold">Paused</h3>
            </div>
          )}
        </div>
        
        {/* Game controls */}
        <div className="mt-6 flex flex-col items-center gap-2">
          {/* Mobile direction controls */}
          <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
            <div className="col-span-1"></div>
            <Button
              variant="outline"
              className="col-span-1 aspect-square p-0"
              onClick={() => handleDirectionButton('UP')}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <div className="col-span-1"></div>
            
            <Button
              variant="outline"
              className="col-span-1 aspect-square p-0"
              onClick={() => handleDirectionButton('LEFT')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="col-span-1"></div>
            <Button
              variant="outline"
              className="col-span-1 aspect-square p-0"
              onClick={() => handleDirectionButton('RIGHT')}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <div className="col-span-1"></div>
            <Button
              variant="outline"
              className="col-span-1 aspect-square p-0"
              onClick={() => handleDirectionButton('DOWN')}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
            <div className="col-span-1"></div>
          </div>
          
          {/* Game action buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="px-6"
              onClick={togglePause}
              disabled={gameOver}
            >
              {isPaused ? <Play className="mr-2 h-4 w-4" /> : <Pause className="mr-2 h-4 w-4" />}
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button
              variant="outline"
              className="px-6"
              onClick={startGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Restart
            </Button>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default SnakeGame;
