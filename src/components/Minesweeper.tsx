import React, { useState, useEffect, useRef } from 'react';

interface Cell {
  x: number;
  y: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
}

export default function Minesweeper() {
  const [gridSize] = useState({ rows: 9, cols: 9 });
  const [mineCount] = useState(10);
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [minesRemaining, setMinesRemaining] = useState(10);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isClickingCell, setIsClickingCell] = useState(false);
  
  // Mobile-friendly interaction mode: 'reveal' or 'flag'
  const [mobileMode, setMobileMode] = useState<'reveal' | 'flag'>('reveal');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize/Reset game
  const initializeGame = () => {
    // Generate empty board
    const newGrid: Cell[][] = [];
    for (let r = 0; r < gridSize.rows; r++) {
      const row: Cell[] = [];
      for (let c = 0; c < gridSize.cols; c++) {
        row.push({
          x: r,
          y: c,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          neighborMines: 0,
        });
      }
      newGrid.push(row);
    }

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
      const randomRow = Math.floor(Math.random() * gridSize.rows);
      const randomCol = Math.floor(Math.random() * gridSize.cols);
      if (!newGrid[randomRow][randomCol].isMine) {
        newGrid[randomRow][randomCol].isMine = true;
        minesPlaced++;
      }
    }

    // Calculate neighbors
    for (let r = 0; r < gridSize.rows; r++) {
      for (let c = 0; c < gridSize.cols; c++) {
        if (!newGrid[r][c].isMine) {
          let count = 0;
          // Look at 8 directions
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < gridSize.rows && nc >= 0 && nc < gridSize.cols) {
                if (newGrid[nr][nc].isMine) count++;
              }
            }
          }
          newGrid[r][c].neighborMines = count;
        }
      }
    }

    setGrid(newGrid);
    setGameOver(false);
    setHasWon(false);
    setMinesRemaining(mineCount);
    setTimer(0);
    setGameStarted(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    initializeGame();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameStarted && !gameOver && !hasWon) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => Math.min(prev + 1, 999));
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [gameStarted, gameOver, hasWon]);

  // Reveal cell action
  const revealCell = (r: number, c: number) => {
    if (gameOver || hasWon || grid[r][c].isRevealed || grid[r][c].isFlagged) return;

    if (!gameStarted) {
      setGameStarted(true);
    }

    const newGrid = [...grid.map(row => [...row])];
    
    // If it's a mine, Boom!
    if (newGrid[r][c].isMine) {
      newGrid[r][c].isRevealed = true;
      revealAllMines(newGrid, r, c);
      setGameOver(true);
      return;
    }

    // Reveal current cell and cascading neighbor reveal if neighborCount is 0
    const queue: [number, number][] = [[r, c]];
    newGrid[r][c].isRevealed = true;

    while (queue.length > 0) {
      const [currentR, currentC] = queue.shift()!;
      if (newGrid[currentR][currentC].neighborMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = currentR + dr;
            const nc = currentC + dc;
            if (nr >= 0 && nr < gridSize.rows && nc >= 0 && nc < gridSize.cols) {
              const clickedCell = newGrid[nr][nc];
              if (!clickedCell.isMine && !clickedCell.isRevealed && !clickedCell.isFlagged) {
                clickedCell.isRevealed = true;
                queue.push([nr, nc]);
              }
            }
          }
        }
      }
    }

    setGrid(newGrid);
    checkWinCondition(newGrid);
  };

  const revealAllMines = (currentGrid: Cell[][], clickedR: number, clickedC: number) => {
    for (let r = 0; r < gridSize.rows; r++) {
      for (let c = 0; c < gridSize.cols; c++) {
        if (currentGrid[r][c].isMine) {
          currentGrid[r][c].isRevealed = true;
        }
      }
    }
    setGrid(currentGrid);
  };

  // Toggle flag cell
  const toggleFlag = (e: React.MouseEvent | null, r: number, c: number) => {
    if (e) e.preventDefault();
    if (gameOver || hasWon || grid[r][c].isRevealed) return;

    if (!gameStarted) {
      setGameStarted(true);
    }

    const newGrid = [...grid.map(row => [...row])];
    const isNowFlagged = !newGrid[r][c].isFlagged;
    newGrid[r][c].isFlagged = isNowFlagged;

    setGrid(newGrid);
    setMinesRemaining((prev) => prev + (isNowFlagged ? -1 : 1));
  };

  // Click handler wrapper (respects mobile mode)
  const handleCellClick = (r: number, c: number) => {
    if (mobileMode === 'flag') {
      toggleFlag(null, r, c);
    } else {
      revealCell(r, c);
    }
  };

  const checkWinCondition = (currentGrid: Cell[][]) => {
    let win = true;
    for (let r = 0; r < gridSize.rows; r++) {
      for (let c = 0; c < gridSize.cols; c++) {
        const cell = currentGrid[r][c];
        if (!cell.isMine && !cell.isRevealed) {
          win = false;
          break;
        }
      }
    }
    if (win) {
      setHasWon(true);
      // Flag all remaining mines
      const flaggedGrid = currentGrid.map(row => row.map(cell => {
        if (cell.isMine) {
          return { ...cell, isFlagged: true };
        }
        return cell;
      }));
      setGrid(flaggedGrid);
      setMinesRemaining(0);
    }
  };

  const emotionFace = () => {
    if (hasWon) return '😎';
    if (gameOver) return '😵';
    if (isClickingCell) return '😮';
    return '🙂';
  };

  const formatThreeDigits = (num: number) => {
    const clamped = Math.max(0, Math.min(999, num));
    return clamped.toString().padStart(3, '0');
  };

  return (
    <div className="flex flex-col items-center select-none" id="win-minesweeper-game">
      {/* Game Window Panel outset */}
      <div className="p-2 win98-outset flex flex-col gap-2 max-w-sm">
        
        {/* Scoreboard panel: LCD style inset */}
        <div className="win98-inset p-1.5 flex items-center justify-between bg-[#c0c0c0]">
          {/* Mine count */}
          <div className="bg-black text-red-500 font-mono text-xl px-2 py-0.5 rounded border border-gray-400 select-all">
            {formatThreeDigits(minesRemaining)}
          </div>

          {/* Reset Face button */}
          <button 
            id="mines-reset-btn"
            onClick={initializeGame}
            className="win98-button w-8 h-8 flex items-center justify-center text-lg active:scale-95 focus:outline-none"
          >
            {emotionFace()}
          </button>

          {/* Stopwatch */}
          <div className="bg-black text-red-500 font-mono text-xl px-2 py-0.5 rounded border border-gray-400 select-all">
            {formatThreeDigits(timer)}
          </div>
        </div>

        {/* The Grid Container */}
        <div className="win98-inset p-1 bg-[#808080]">
          <div className="grid grid-cols-9 gap-0.5">
            {grid.map((row, r) =>
              row.map((cell, c) => {
                let cellClass = "w-7 h-7 flex items-center justify-center font-bold text-xs select-none focus:outline-none ";
                let content: React.ReactNode = "";

                if (cell.isRevealed) {
                  cellClass += "bg-[#c0c0c0] border border-[#808080]";
                  if (cell.isMine) {
                    cellClass += " bg-red-600";
                    content = "💣";
                  } else if (cell.neighborMines > 0) {
                    content = cell.neighborMines;
                    // Colors based on counts
                    const colors = [
                      "", "text-blue-800", "text-green-700", "text-red-600",
                      "text-purple-900", "text-maroon-800", "text-teal-900",
                      "text-black", "text-gray-500"
                    ];
                    cellClass += " " + colors[cell.neighborMines];
                  }
                } else {
                  cellClass += "win98-button cursor-pointer active:bg-gray-300";
                  if (cell.isFlagged) {
                    content = "🚩";
                  }
                }

                return (
                  <button
                    key={`${r}-${c}`}
                    id={`cell-${r}-${c}`}
                    onClick={() => handleCellClick(r, c)}
                    onContextMenu={(e) => toggleFlag(e, r, c)}
                    onMouseDown={() => !cell.isRevealed && setIsClickingCell(true)}
                    onMouseUp={() => setIsClickingCell(false)}
                    className={cellClass}
                  >
                    {content}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Mobile controls & helper tips */}
        <div className="flex flex-col gap-1 mt-1 font-mono text-[10px] text-gray-700 leading-tight">
          <div className="flex gap-1 justify-center">
            <button
              id="mines-mode-reveal"
              onClick={() => setMobileMode('reveal')}
              className={`win98-button px-2.5 py-1 text-xs font-semibold ${mobileMode === 'reveal' ? 'win98-button-depressed bg-[#dfdfdf] font-bold' : ''}`}
            >
              ⛏️ Reveal
            </button>
            <button
              id="mines-mode-flag"
              onClick={() => setMobileMode('flag')}
              className={`win98-button px-2.5 py-1 text-xs font-semibold ${mobileMode === 'flag' ? 'win98-button-depressed bg-[#dfdfdf] font-bold' : ''}`}
            >
              🚩 Flag
            </button>
          </div>
          <span className="text-center mt-1">Right-click on desktop to flag coordinates.</span>
        </div>
      </div>
    </div>
  );
}
