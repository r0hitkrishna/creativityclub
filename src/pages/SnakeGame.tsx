
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

// Directions for the snake
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

// Cell types on the grid
enum CellType {
  EMPTY = 'EMPTY',
  SNAKE = 'SNAKE',
  FOOD = 'FOOD',
  HEAD = 'HEAD',
}

// Grid cell representation
interface Cell {
  type: CellType;
  x: number;
  y: number;
}

// Snake segment
interface SnakeSegment {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const INITIAL_SNAKE_LENGTH = 3;
const INITIAL_SPEED = 120; // ms per move

const SnakeGame = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [snake, setSnake] = useState<SnakeSegment[]>([]);
  const [direction, setDirection] = useState<Direction>(Direction.RIGHT);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(INITIAL_SPEED);
  const [foodPosition, setFoodPosition] = useState<{ x: number; y: number } | null>(null);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  
  // Refs for game loop
  const directionRef = useRef(direction);
  const gameOverRef = useRef(gameOver);
  const isPausedRef = useRef(isPaused);

  // Load high score on mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Update refs when states change
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    gameOverRef.current = gameOver;
  }, [gameOver]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Handle key presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        if (!gameStarted || gameOver) {
          startGame();
        } else {
          setIsPaused(prev => !prev);
        }
        return;
      }
      
      if (isPaused || gameOver) return;
      
      switch (e.code) {
        case 'ArrowUp':
          if (directionRef.current !== Direction.DOWN) {
            setDirection(Direction.UP);
          }
          break;
        case 'ArrowDown':
          if (directionRef.current !== Direction.UP) {
            setDirection(Direction.DOWN);
          }
          break;
        case 'ArrowLeft':
          if (directionRef.current !== Direction.RIGHT) {
            setDirection(Direction.LEFT);
          }
          break;
        case 'ArrowRight':
          if (directionRef.current !== Direction.LEFT) {
            setDirection(Direction.RIGHT);
          }
          break;
        case 'KeyP':
          setIsPaused(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted, gameOver, isPaused]);

  // Set game speed based on difficulty
  useEffect(() => {
    switch (difficulty) {
      case 'Easy':
        setGameSpeed(180);
        break;
      case 'Medium':
        setGameSpeed(120);
        break;
      case 'Hard':
        setGameSpeed(80);
        break;
    }
  }, [difficulty]);

  // Initialize game
  const initializeGame = () => {
    // Create empty grid
    const newGrid: Cell[][] = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row: Cell[] = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        row.push({
          type: CellType.EMPTY,
          x,
          y,
        });
      }
      newGrid.push(row);
    }

    // Create initial snake in the middle
    const startX = Math.floor(GRID_SIZE / 2);
    const startY = Math.floor(GRID_SIZE / 2);
    
    const newSnake: SnakeSegment[] = [];
    for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
      newSnake.push({ x: startX - i, y: startY });
    }

    // Set snake on the grid
    newSnake.forEach((segment, index) => {
      if (segment.y >= 0 && segment.y < GRID_SIZE && segment.x >= 0 && segment.x < GRID_SIZE) {
        newGrid[segment.y][segment.x].type = index === 0 ? CellType.HEAD : CellType.SNAKE;
      }
    });

    setSnake(newSnake);
    setGrid(newGrid);
    setDirection(Direction.RIGHT);
    setFoodPosition(null);
  };

  // Start game
  const startGame = () => {
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    initializeGame();
    setGameStarted(true);
    generateFood();
  };

  // Generate food in a random empty cell
  const generateFood = () => {
    const emptyCells: { x: number; y: number }[] = [];
    
    grid.forEach(row => {
      row.forEach(cell => {
        if (cell.type === CellType.EMPTY) {
          emptyCells.push({ x: cell.x, y: cell.y });
        }
      });
    });
    
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const newFoodPosition = emptyCells[randomIndex];
      setFoodPosition(newFoodPosition);
      
      const newGrid = [...grid];
      newGrid[newFoodPosition.y][newFoodPosition.x].type = CellType.FOOD;
      setGrid(newGrid);
    } else {
      // No empty cells, you've won!
      gameWon();
    }
  };

  // End game
  const endGame = () => {
    gameOverRef.current = true;
    setGameOver(true);
    setGameStarted(false);
    
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
      toast({
        title: "New High Score!",
        description: `You've set a new record: ${score}`,
      });
    } else {
      toast({
        title: "Game Over",
        description: `Your score: ${score}`,
      });
    }
  };

  // Win the game (filled the grid)
  const gameWon = () => {
    setGameOver(true);
    setGameStarted(false);
    toast({
      title: "Congratulations!",
      description: "You've filled the entire grid! Amazing!",
    });
  };

  // Move the snake
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;
    
    const gameLoop = setTimeout(() => {
      moveSnake();
    }, gameSpeed);
    
    return () => {
      clearTimeout(gameLoop);
    };
  }, [snake, gameStarted, gameOver, isPaused, gameSpeed]);

  // Handle snake movement
  const moveSnake = () => {
    if (gameOverRef.current || isPausedRef.current) return;
    
    // Get the head and calculate new head position
    const head = { ...snake[0] };
    let newHead: SnakeSegment;
    
    switch (directionRef.current) {
      case Direction.UP:
        newHead = { x: head.x, y: head.y - 1 };
        break;
      case Direction.DOWN:
        newHead = { x: head.x, y: head.y + 1 };
        break;
      case Direction.LEFT:
        newHead = { x: head.x - 1, y: head.y };
        break;
      case Direction.RIGHT:
        newHead = { x: head.x + 1, y: head.y };
        break;
      default:
        newHead = { x: head.x, y: head.y };
    }
    
    // Check if the snake hits the wall
    if (
      newHead.x < 0 ||
      newHead.x >= GRID_SIZE ||
      newHead.y < 0 ||
      newHead.y >= GRID_SIZE
    ) {
      endGame();
      return;
    }
    
    // Check if snake hits itself
    if (snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
      endGame();
      return;
    }
    
    // Create new snake array
    const newSnake = [newHead, ...snake];
    
    // Check if snake eats food
    const eatsFood = foodPosition && newHead.x === foodPosition.x && newHead.y === foodPosition.y;
    
    if (!eatsFood) {
      // Remove tail if no food was eaten
      newSnake.pop();
    } else {
      // Increment score and generate new food
      setScore(prev => prev + 1);
      generateFood();
    }
    
    // Update grid
    const newGrid = [...grid].map(row => 
      row.map(cell => ({ ...cell, type: CellType.EMPTY }))
    );
    
    // Place food on grid
    if (foodPosition) {
      newGrid[foodPosition.y][foodPosition.x].type = CellType.FOOD;
    }
    
    // Place snake on grid
    newSnake.forEach((segment, index) => {
      if (segment.y >= 0 && segment.y < GRID_SIZE && segment.x >= 0 && segment.x < GRID_SIZE) {
        newGrid[segment.y][segment.x].type = index === 0 ? CellType.HEAD : CellType.SNAKE;
      }
    });
    
    setSnake(newSnake);
    setGrid(newGrid);
  };

  // Handle touch events for mobile controls
  const handleSwipe = (direction: Direction) => {
    if (isPaused || gameOver) return;
    
    switch (direction) {
      case Direction.UP:
        if (directionRef.current !== Direction.DOWN) {
          setDirection(Direction.UP);
        }
        break;
      case Direction.DOWN:
        if (directionRef.current !== Direction.UP) {
          setDirection(Direction.DOWN);
        }
        break;
      case Direction.LEFT:
        if (directionRef.current !== Direction.RIGHT) {
          setDirection(Direction.LEFT);
        }
        break;
      case Direction.RIGHT:
        if (directionRef.current !== Direction.LEFT) {
          setDirection(Direction.RIGHT);
        }
        break;
    }
  };
  
  // Get cell styles based on the cell type
  const getCellStyle = (type: CellType) => {
    switch (type) {
      case CellType.EMPTY:
        return 'bg-card/20';
      case CellType.SNAKE:
        return 'bg-green-500';
      case CellType.HEAD:
        return 'bg-green-700';
      case CellType.FOOD:
        return 'bg-red-500';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-lg">
        <Link
          to="/"
          className="self-start flex items-center text-muted-foreground hover:text-white transition-all group mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          <span className="text-gradient-primary">Snake Game</span>
        </h1>
        
        <div className="flex items-center justify-between w-full mb-6">
          <Card className="p-4 bg-card/50 backdrop-blur-sm">
            <p className="text-muted-foreground">Score</p>
            <p className="text-2xl font-bold">{score}</p>
          </Card>
          
          <Card className="p-4 bg-card/50 backdrop-blur-sm">
            <p className="text-muted-foreground">High Score</p>
            <p className="text-2xl font-bold">{highScore}</p>
          </Card>
        </div>
        
        {/* Difficulty selector */}
        {(!gameStarted || gameOver) && (
          <div className="flex justify-center w-full mb-4">
            <div className="flex gap-2">
              <Button 
                onClick={() => setDifficulty('Easy')} 
                className={`${difficulty === 'Easy' ? 'bg-primary' : 'bg-primary/30'}`}
              >
                Easy
              </Button>
              <Button 
                onClick={() => setDifficulty('Medium')} 
                className={`${difficulty === 'Medium' ? 'bg-primary' : 'bg-primary/30'}`}
              >
                Medium
              </Button>
              <Button 
                onClick={() => setDifficulty('Hard')} 
                className={`${difficulty === 'Hard' ? 'bg-primary' : 'bg-primary/30'}`}
              >
                Hard
              </Button>
            </div>
          </div>
        )}
        
        {/* Game grid */}
        <div className="relative border border-white/20 rounded-lg overflow-hidden mb-6">
          <div 
            className="grid bg-black/20 backdrop-blur-sm w-full aspect-square"
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
              maxWidth: '500px',
              minWidth: '300px'
            }}
          >
            {grid.map((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${x}-${y}`}
                  className={`${getCellStyle(cell.type)} border-[0.5px] border-gray-800/20`}
                ></div>
              ))
            )}
          </div>
          
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-4">Press Space or tap to start</p>
              <Button onClick={startGame} className="bg-accent hover:bg-accent/90">
                Start Game
              </Button>
            </div>
          )}
          
          {gameOver && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-2">Game Over</p>
              <p className="mb-4">Score: {score}</p>
              <Button onClick={startGame} className="bg-accent hover:bg-accent/90">
                Play Again
              </Button>
            </div>
          )}
          
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <p className="text-xl mb-4">Game Paused</p>
              <Button onClick={() => setIsPaused(false)} className="bg-accent hover:bg-accent/90">
                Resume
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile controls */}
        <div className="md:hidden w-full mb-4">
          <div className="flex justify-center mb-2">
            <Button 
              onClick={() => handleSwipe(Direction.UP)} 
              className="w-16 h-16 text-xl p-1"
              disabled={!gameStarted || isPaused || gameOver}
            >
              ↑
            </Button>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={() => handleSwipe(Direction.LEFT)} 
              className="w-16 h-16 text-xl p-1 mr-4"
              disabled={!gameStarted || isPaused || gameOver}
            >
              ←
            </Button>
            <Button 
              onClick={() => handleSwipe(Direction.DOWN)} 
              className="w-16 h-16 text-xl p-1"
              disabled={!gameStarted || isPaused || gameOver}
            >
              ↓
            </Button>
            <Button 
              onClick={() => handleSwipe(Direction.RIGHT)} 
              className="w-16 h-16 text-xl p-1 ml-4"
              disabled={!gameStarted || isPaused || gameOver}
            >
              →
            </Button>
          </div>
        </div>
        
        {/* Game controls */}
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Use arrow keys to control the snake. Press P or Space to pause.
          </p>
          
          <div className="mt-4 flex gap-2 justify-center flex-wrap">
            {!gameStarted || gameOver ? (
              <Button onClick={startGame} className="bg-accent hover:bg-accent/90">
                {gameOver ? "Play Again" : "Start Game"}
              </Button>
            ) : (
              <>
                <Button 
                  onClick={() => setIsPaused(!isPaused)} 
                  className="bg-primary/20 hover:bg-primary/30"
                >
                  {isPaused ? "Resume" : "Pause"}
                </Button>
                <Button 
                  onClick={() => endGame()} 
                  className="bg-destructive/20 hover:bg-destructive/30"
                >
                  End Game
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
