
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed?: number;
}

const DinoGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Game state
  const gameState = useRef({
    dino: {
      x: 50,
      y: 0,
      width: 40,
      height: 60,
      jumping: false,
      jumpVelocity: 0,
    },
    obstacles: [] as GameObject[],
    ground: {
      y: 0,
    },
    speed: 5,
    frameCount: 0,
    dinoSprite: 0,
    playing: false,
  });

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('dinoHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }

    // Set up canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set ground position
    gameState.current.ground.y = canvas.height - 30;
    gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;

    // Event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !gameState.current.dino.jumping) {
        jump();
      }
      
      if (e.code === 'Space' && !gameState.current.playing && !gameStarted) {
        startGame();
      }
      
      if (e.code === 'Space' && gameOver) {
        resetGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Update game loop when state changes
  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = requestAnimationFrame(updateGame);
    return () => cancelAnimationFrame(gameLoop);
  }, [gameStarted, gameOver]);

  const startGame = () => {
    if (gameStarted) return;
    
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    gameState.current.playing = true;
    gameState.current.obstacles = [];
    gameState.current.speed = 5;
    gameState.current.frameCount = 0;
  };

  const resetGame = () => {
    gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
    gameState.current.dino.jumping = false;
    gameState.current.obstacles = [];
    gameState.current.speed = 5;
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    gameState.current.playing = true;
    gameState.current.frameCount = 0;
  };

  const jump = () => {
    if (gameState.current.dino.jumping) return;
    
    gameState.current.dino.jumping = true;
    gameState.current.dino.jumpVelocity = -15;
  };

  const updateGame = () => {
    if (!canvasRef.current || gameOver) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update frame count
    gameState.current.frameCount++;
    
    // Update score
    if (gameState.current.frameCount % 5 === 0) {
      setScore(prev => prev + 1);
    }
    
    // Increase game speed gradually
    if (gameState.current.frameCount % 500 === 0) {
      gameState.current.speed += 0.5;
    }
    
    // Draw background
    drawBackground(ctx, canvas);
    
    // Update and draw dino
    updateDino();
    drawDino(ctx);
    
    // Generate obstacles
    if (gameState.current.frameCount % 100 === 0 || 
        (gameState.current.obstacles.length === 0 && gameState.current.frameCount > 60)) {
      generateObstacle();
    }
    
    // Update and draw obstacles
    updateObstacles();
    drawObstacles(ctx);
    
    // Check collisions
    if (checkCollisions()) {
      endGame();
      return;
    }
    
    // Continue the game loop
    requestAnimationFrame(updateGame);
  };

  const drawBackground = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Draw ground
    ctx.fillStyle = '#7a7a7a';
    ctx.fillRect(0, gameState.current.ground.y, canvas.width, 2);
  };

  const updateDino = () => {
    const dino = gameState.current.dino;
    
    // Handle jumping physics
    if (dino.jumping) {
      dino.y += dino.jumpVelocity;
      dino.jumpVelocity += 0.8; // Gravity
      
      // Check if landed
      if (dino.y >= gameState.current.ground.y - dino.height) {
        dino.y = gameState.current.ground.y - dino.height;
        dino.jumping = false;
      }
    }
    
    // Update sprite animation
    if (gameState.current.frameCount % 10 === 0 && !dino.jumping) {
      gameState.current.dinoSprite = (gameState.current.dinoSprite + 1) % 2;
    }
  };

  const drawDino = (ctx: CanvasRenderingContext2D) => {
    const dino = gameState.current.dino;
    
    // Draw dino
    ctx.fillStyle = '#535353';
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
    
    // Draw eye
    ctx.fillStyle = 'white';
    ctx.fillRect(dino.x + 30, dino.y + 10, 5, 5);
  };

  const generateObstacle = () => {
    const height = Math.random() * 30 + 20; // Random height between 20 and 50
    
    const obstacle = {
      x: canvasRef.current!.width,
      y: gameState.current.ground.y - height,
      width: 20,
      height: height,
      speed: gameState.current.speed,
    };
    
    gameState.current.obstacles.push(obstacle);
  };

  const updateObstacles = () => {
    gameState.current.obstacles = gameState.current.obstacles
      .map(obstacle => ({
        ...obstacle,
        x: obstacle.x - gameState.current.speed,
      }))
      .filter(obstacle => obstacle.x + obstacle.width > 0);
  };

  const drawObstacles = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#7D4E57';
    
    gameState.current.obstacles.forEach(obstacle => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
  };

  const checkCollisions = () => {
    const dino = gameState.current.dino;
    
    // Check collision with each obstacle
    return gameState.current.obstacles.some(obstacle => {
      return (
        dino.x < obstacle.x + obstacle.width &&
        dino.x + dino.width > obstacle.x &&
        dino.y < obstacle.y + obstacle.height &&
        dino.y + dino.height > obstacle.y
      );
    });
  };

  const endGame = () => {
    gameState.current.playing = false;
    setGameOver(true);
    
    // Update high score if needed
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('dinoHighScore', score.toString());
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-md">
        <Link
          to="/"
          className="self-start flex items-center text-muted-foreground hover:text-white transition-all group mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          <span className="text-gradient-primary">Dino Runner</span>
        </h1>
        
        <div className="flex items-center justify-between w-full mb-4">
          <div className="p-2">
            <p className="text-muted-foreground">Score</p>
            <p className="text-xl font-bold">{score}</p>
          </div>
          
          <div className="p-2">
            <p className="text-muted-foreground">High Score</p>
            <p className="text-xl font-bold">{highScore}</p>
          </div>
        </div>
        
        <div className="relative w-full border border-white/20 rounded-lg overflow-hidden">
          <canvas
            ref={canvasRef}
            width={600}
            height={200}
            className="bg-black/20 backdrop-blur-sm w-full"
          />
          
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-4">Press Space or click to start</p>
              <Button onClick={startGame} className="bg-accent hover:bg-accent/90">
                Start Game
              </Button>
            </div>
          )}
          
          {gameOver && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-2">Game Over</p>
              <p className="mb-4">Score: {score}</p>
              <Button onClick={resetGame} className="bg-accent hover:bg-accent/90">
                Try Again
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Press Space or Up Arrow to jump
          </p>
          
          <div className="mt-4 flex gap-2 justify-center">
            <Button onClick={jump} className="bg-primary/20 hover:bg-primary/30" disabled={!gameStarted || gameOver}>
              Jump
            </Button>
            {gameStarted && !gameOver ? (
              <Button onClick={() => setGameOver(true)} className="bg-destructive/20 hover:bg-destructive/30">
                End Game
              </Button>
            ) : (
              <Button onClick={gameStarted ? resetGame : startGame} className="bg-accent hover:bg-accent/90">
                {gameStarted ? "Restart" : "Start"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoGame;
