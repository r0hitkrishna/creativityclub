
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed?: number;
  blinking?: boolean;
  blinkState?: boolean;
  type?: string;
  wingUp?: boolean;
}

const DinoGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [nightMode, setNightMode] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Game state
  const gameState = useRef({
    dino: {
      x: 50,
      y: 0,
      width: 40,
      height: 60,
      jumping: false,
      jumpVelocity: 0,
      ducking: false,
    },
    obstacles: [] as GameObject[],
    clouds: [] as GameObject[],
    stars: [] as GameObject[],
    ground: {
      y: 0,
    },
    speed: 5,
    frameCount: 0,
    dinoSprite: 0,
    playing: false,
    lastObstacleTime: 0,
    dayNightCycle: 0,
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
      if (gameOver) {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
          resetGame();
          return;
        }
      }
      
      if (!gameStarted) {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
          startGame();
          return;
        }
      }
      
      if (isPaused) return;
      
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !gameState.current.dino.jumping) {
        jump();
      }
      
      if (e.code === 'ArrowDown') {
        gameState.current.dino.ducking = true;
        gameState.current.dino.height = 30; // Shorter while ducking
        gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown') {
        gameState.current.dino.ducking = false;
        gameState.current.dino.height = 60; // Normal height
        gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
      }
      
      if (e.code === 'KeyP') {
        togglePause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameOver, gameStarted, isPaused]);

  // Update game loop when state changes
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;

    const gameLoop = requestAnimationFrame(updateGame);
    return () => cancelAnimationFrame(gameLoop);
  }, [gameStarted, gameOver, isPaused, nightMode]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const startGame = () => {
    if (gameStarted && !gameOver) return;
    
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    gameState.current.playing = true;
    gameState.current.obstacles = [];
    gameState.current.clouds = [];
    gameState.current.stars = [];
    gameState.current.speed = 5;
    gameState.current.frameCount = 0;
    gameState.current.dayNightCycle = 0;
    setNightMode(false);
    
    // Add initial clouds
    for (let i = 0; i < 3; i++) {
      generateCloud(true);
    }
  };

  const resetGame = () => {
    gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
    gameState.current.dino.jumping = false;
    gameState.current.dino.ducking = false;
    gameState.current.dino.height = 60;
    gameState.current.obstacles = [];
    gameState.current.clouds = [];
    gameState.current.stars = [];
    gameState.current.speed = 5;
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    gameState.current.playing = true;
    gameState.current.frameCount = 0;
    gameState.current.dayNightCycle = 0;
    setNightMode(false);
    setIsPaused(false);
  };

  const jump = () => {
    if (gameState.current.dino.jumping) return;
    
    gameState.current.dino.jumping = true;
    gameState.current.dino.jumpVelocity = -15;
  };

  const updateGame = () => {
    if (!canvasRef.current || gameOver || !gameStarted || isPaused) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update frame count
    gameState.current.frameCount++;
    
    // Update day/night cycle
    gameState.current.dayNightCycle++;
    if (gameState.current.dayNightCycle >= 1000) {
      setNightMode(prev => !prev);
      gameState.current.dayNightCycle = 0;
      
      // Generate stars when transitioning to night
      if (!nightMode) {
        for (let i = 0; i < 20; i++) {
          generateStar();
        }
      }
    }
    
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
    if (gameState.current.frameCount - gameState.current.lastObstacleTime > 50 + Math.floor(Math.random() * 100)) {
      generateObstacle();
      gameState.current.lastObstacleTime = gameState.current.frameCount;
    }
    
    // Generate clouds occasionally
    if (gameState.current.frameCount % 200 === 0) {
      generateCloud();
    }
    
    // Update and draw obstacles
    updateObstacles();
    drawObstacles(ctx);
    
    // Update and draw clouds
    updateClouds();
    drawClouds(ctx);
    
    // Update and draw stars if night mode
    if (nightMode) {
      updateStars();
      drawStars(ctx);
    }
    
    // Check collisions
    if (checkCollisions()) {
      endGame();
      return;
    }
    
    // Continue the game loop
    requestAnimationFrame(updateGame);
  };

  const drawBackground = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Set background color based on day/night
    if (nightMode) {
      ctx.fillStyle = '#003';
    } else {
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGradient.addColorStop(0, "#87CEEB");
      skyGradient.addColorStop(1, "#E0F7FF");
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Draw ground
    ctx.fillStyle = nightMode ? '#333' : '#7a7a7a';
    ctx.fillRect(0, gameState.current.ground.y, canvas.width, 2);
    
    // Draw ground details
    for (let i = 0; i < canvas.width; i += 50) {
      ctx.fillRect(i, gameState.current.ground.y + 3, 30, 1);
    }
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
    ctx.fillStyle = nightMode ? '#aaa' : '#535353';
    
    if (dino.ducking) {
      // Draw crouching dino
      ctx.fillRect(dino.x, dino.y, dino.width + 10, dino.height);
    } else {
      // Draw regular dino
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      
      // Draw legs, alternating based on sprite
      if (gameState.current.dinoSprite === 0) {
        ctx.fillRect(dino.x + 10, dino.y + dino.height, 10, 10);
      } else {
        ctx.fillRect(dino.x + 25, dino.y + dino.height, 10, 10);
      }
    }
    
    // Draw eye
    ctx.fillStyle = 'white';
    ctx.fillRect(dino.x + 30, dino.y + 10, 5, 5);
  };

  const generateObstacle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Random obstacle type: 0 = cactus, 1 = bird
    const obstacleType = Math.random() > 0.8 ? 1 : 0;
    
    if (obstacleType === 0) {
      // Cactus
      const height = Math.random() * 30 + 20; // Random height between 20 and 50
      const obstacle = {
        x: canvas.width,
        y: gameState.current.ground.y - height,
        width: 20,
        height: height,
        speed: gameState.current.speed,
        type: 'cactus'
      };
      gameState.current.obstacles.push(obstacle);
    } else {
      // Bird at random height
      const birdHeight = Math.random() > 0.5 ? 50 : 80;
      const obstacle = {
        x: canvas.width,
        y: gameState.current.ground.y - birdHeight,
        width: 30,
        height: 20,
        speed: gameState.current.speed * 1.2, // Birds are a bit faster
        type: 'bird',
        wingUp: true
      };
      gameState.current.obstacles.push(obstacle);
    }
  };

  const generateCloud = (isInitial = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const cloud = {
      x: isInitial ? Math.random() * canvas.width : canvas.width,
      y: Math.random() * (canvas.height / 2),
      width: Math.random() * 50 + 30,
      height: Math.random() * 20 + 10,
      speed: gameState.current.speed * 0.3,
    };
    
    gameState.current.clouds.push(cloud);
  };
  
  const generateStar = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const star = {
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height / 2),
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      blinking: Math.random() > 0.7,
      blinkState: true
    };
    
    gameState.current.stars.push(star);
  };

  const updateObstacles = () => {
    gameState.current.obstacles = gameState.current.obstacles
      .map((obstacle: any) => {
        // For birds, update wing state
        if (obstacle.type === 'bird' && gameState.current.frameCount % 15 === 0) {
          obstacle.wingUp = !obstacle.wingUp;
        }
        
        return {
          ...obstacle,
          x: obstacle.x - obstacle.speed,
        };
      })
      .filter(obstacle => obstacle.x + obstacle.width > 0);
  };

  const updateClouds = () => {
    gameState.current.clouds = gameState.current.clouds
      .map(cloud => ({
        ...cloud,
        x: cloud.x - cloud.speed,
      }))
      .filter(cloud => cloud.x + cloud.width > 0);
  };
  
  const updateStars = () => {
    gameState.current.stars = gameState.current.stars.map(star => {
      // Update blinking state for some stars
      if (star.blinking && gameState.current.frameCount % 50 === 0) {
        return { ...star, blinkState: !star.blinkState };
      }
      return star;
    });
  };

  const drawObstacles = (ctx: CanvasRenderingContext2D) => {
    gameState.current.obstacles.forEach((obstacle: any) => {
      if (obstacle.type === 'cactus') {
        ctx.fillStyle = '#7D4E57';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        
        // Draw cactus details
        ctx.fillRect(obstacle.x + 5, obstacle.y + 10, 10, 5);
      } else if (obstacle.type === 'bird') {
        ctx.fillStyle = '#745D8C';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        
        // Draw wings in different positions
        if (obstacle.wingUp) {
          ctx.fillRect(obstacle.x + 5, obstacle.y - 10, 20, 5);
        } else {
          ctx.fillRect(obstacle.x + 5, obstacle.y + obstacle.height, 20, 5);
        }
      }
    });
  };

  const drawClouds = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = nightMode ? 'rgba(200, 200, 200, 0.5)' : 'rgba(255, 255, 255, 0.8)';
    
    gameState.current.clouds.forEach(cloud => {
      ctx.beginPath();
      ctx.arc(cloud.x, cloud.y, cloud.width / 3, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.width / 3, cloud.y - cloud.height / 3, cloud.width / 4, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.width / 2, cloud.y, cloud.width / 3, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.width / 1.5, cloud.y - cloud.height / 4, cloud.width / 4, 0, Math.PI * 2);
      ctx.fill();
    });
  };
  
  const drawStars = (ctx: CanvasRenderingContext2D) => {
    gameState.current.stars.forEach((star: any) => {
      if (star.blinking && !star.blinkState) return;
      
      ctx.fillStyle = 'white';
      ctx.fillRect(star.x, star.y, star.width, star.height);
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
      toast({
        title: "New High Score!",
        description: `You've set a new record: ${score}`,
      });
    }
  };
  
  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (gameOver) {
      resetGame();
      return;
    }
    
    if (!gameStarted) {
      startGame();
      return;
    }
    
    // Jump on touch in the top two-thirds of the screen
    const touchY = e.touches[0].clientY;
    const canvas = canvasRef.current;
    if (canvas && touchY < canvas.getBoundingClientRect().height * 0.66) {
      jump();
    } else {
      // Duck when touching the bottom third
      gameState.current.dino.ducking = true;
      gameState.current.dino.height = 30;
      gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
      
      const handleTouchEnd = () => {
        gameState.current.dino.ducking = false;
        gameState.current.dino.height = 60;
        gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchend', handleTouchEnd);
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
            onTouchStart={handleTouchStart}
          />
          
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-4">Press Space or tap to start</p>
              <Button onClick={startGame} className="bg-accent hover:bg-accent/90">
                Start Game
              </Button>
            </div>
          )}
          
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-4">Game Paused</p>
              <Button onClick={togglePause} className="bg-accent hover:bg-accent/90">
                Resume
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
            Press Space/Up Arrow to jump, Down Arrow to duck
          </p>
          
          <div className="mt-4 flex gap-2 justify-center flex-wrap">
            {!gameStarted || gameOver ? (
              <Button onClick={gameStarted ? resetGame : startGame} className="bg-accent hover:bg-accent/90">
                {gameStarted ? "Restart" : "Start"}
              </Button>
            ) : (
              <>
                <Button onClick={jump} className="bg-primary/20 hover:bg-primary/30" disabled={isPaused}>
                  Jump
                </Button>
                <Button onClick={togglePause} className="bg-primary/20 hover:bg-primary/30">
                  {isPaused ? "Resume" : "Pause"}
                </Button>
                <Button 
                  onClick={() => {
                    gameState.current.dino.ducking = true;
                    gameState.current.dino.height = 30;
                    gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
                    
                    const handleMouseUp = () => {
                      gameState.current.dino.ducking = false;
                      gameState.current.dino.height = 60;
                      gameState.current.dino.y = gameState.current.ground.y - gameState.current.dino.height;
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    document.addEventListener('mouseup', handleMouseUp);
                  }} 
                  className="bg-primary/20 hover:bg-primary/30"
                  disabled={isPaused || gameOver}
                >
                  Duck (Hold)
                </Button>
              </>
            )}
            
            {gameStarted && !gameOver && (
              <Button onClick={() => setGameOver(true)} className="bg-destructive/20 hover:bg-destructive/30">
                End Game
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoGame;
