import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";

/**
 * Optimized grid background that lights up tiles based on mouse position.
 * Performance improvements:
 * - Throttled mouse events
 * - Memoized calculations
 * - Reduced re-renders
 * - Better event handling
 */

const CELL_SIZE = 80; // px
const GAP = 8; // px
const MAX_LIGHT_DISTANCE = 4; // how many tiles away we still light up (reduced for performance)
const THROTTLE_MS = 32; // ~30fps throttling for better performance

export default function OptimizedHoverGridBackground() {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const throttleRef = useRef(null);
  const isMouseInsideRef = useRef(true);

  // Memoized cell width calculation
  const cellWidth = useMemo(() => CELL_SIZE + GAP, []);

  // Optimized grid computation with debouncing
  const computeGrid = useCallback(() => {
    const newCols = Math.max(1, Math.ceil(window.innerWidth / cellWidth));
    const newRows = Math.max(1, Math.ceil(window.innerHeight / cellWidth));
    setCols(newCols);
    setRows(newRows);
  }, [cellWidth]);

  // Setup grid dimensions
  useEffect(() => {
    computeGrid();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(computeGrid, 100); // Debounce resize
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [computeGrid]);

  // Throttled mouse event handler
  const handleMouseMove = useCallback(
    (e) => {
      if (!isMouseInsideRef.current) return;

      const x = e.clientX;
      const y = e.clientY;
      // const col = Math.floor(x / cellWidth);  // mouse offset for gap
      // const row = Math.floor(y / cellWidth);  // mouse offset for gap
      const col = Math.floor((x - GAP) / cellWidth);
      const row = Math.floor((y - GAP) / cellWidth);

      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        const newIndex = row * cols + col;
        setHoverIndex((prev) => (prev !== newIndex ? newIndex : prev));
      } else {
        setHoverIndex((prev) => (prev !== null ? null : prev));
      }
    },
    [cellWidth, cols, rows]
  );

  // Throttled mouse move with RAF and debouncing
  const throttledMouseMove = useCallback(
    (e) => {
      if (throttleRef.current) return;

      // Use setTimeout instead of RAF for less aggressive updates
      throttleRef.current = setTimeout(() => {
        handleMouseMove(e);
        throttleRef.current = null;
      }, THROTTLE_MS);
    },
    [handleMouseMove]
  );

  // Mouse event listeners
  useEffect(() => {
    const handleMouseEnter = () => {
      isMouseInsideRef.current = true;
    };

    const handleMouseLeave = () => {
      isMouseInsideRef.current = false;
      setHoverIndex(null);
    };

    // Use document instead of window for better compatibility
    document.addEventListener("mousemove", throttledMouseMove, {
      passive: true,
    });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Handle visibility change to clear hover when tab is not active
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setHoverIndex(null);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [throttledMouseMove]);

  // Memoized grid style
  const gridStyle = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
      gridAutoRows: `${CELL_SIZE}px`,
      gap: `${GAP}px`,
      padding: `${GAP}px`,
      placeItems: "center",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
    }),
    [cols]
  );

  // Memoized cells array - only recreate when grid size changes
  const cells = useMemo(
    () => Array.from({ length: cols * rows }, (_, idx) => idx),
    [cols, rows]
  );

  // Memoized hover position for calculations
  const hoverPosition = useMemo(() => {
    if (hoverIndex === null) return null;
    return {
      row: Math.floor(hoverIndex / cols),
      col: hoverIndex % cols,
    };
  }, [hoverIndex, cols]);

  // Early return if grid not ready
  if (!cols || !rows) return null;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      <div style={gridStyle}>
        {cells.map((idx) => (
          <GridCell
            key={idx}
            index={idx}
            cols={cols}
            hoverPosition={hoverPosition}
            cellSize={CELL_SIZE}
          />
        ))}
      </div>
    </div>
  );
}

// Memoized cell component to prevent unnecessary re-renders
const GridCell = React.memo(({ index, cols, hoverPosition, cellSize }) => {
  const r = Math.floor(index / cols);
  const c = index % cols;

  // Calculate intensity based on distance to hovered cell (optimized)
  let intensity = 0;
  if (
    hoverPosition &&
    Math.abs(r - hoverPosition.row) <= MAX_LIGHT_DISTANCE &&
    Math.abs(c - hoverPosition.col) <= MAX_LIGHT_DISTANCE
  ) {
    const dx = c - hoverPosition.col;
    const dy = r - hoverPosition.row;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= MAX_LIGHT_DISTANCE) {
      intensity = Math.max(0, 1 - dist / MAX_LIGHT_DISTANCE);
    }
  }

  // Optimized border color calculations
  const borderAlpha = intensity > 0 ? 0.2 + intensity * 0.8 : 0.1;
  const borderWidth = intensity > 0 ? 1 + intensity * 1 : 1; // 1px to 2px
  const scale = 1 + intensity * 0.03; // Subtle scale effect
  const shadowOpacity =
    intensity > 0 ? Math.min(0.1 + intensity * 0.15, 0.2) : 0;

  const cellStyle = useMemo(
    () => ({
      width: `${cellSize}px`,
      height: `${cellSize}px`,
      borderRadius: "6px",
      transition:
        intensity > 0
          ? "border-color 200ms ease, border-width 200ms ease, transform 200ms ease"
          : "border-color 400ms ease, border-width 400ms ease, transform 400ms ease",
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderWidth: `${borderWidth}px`,
      borderColor:
        intensity > 0
          ? `rgba(34,197,94,${borderAlpha})` // blue-500
          : `rgba(34,197,94,${borderAlpha})`,
      transform: `scale(${scale})`,
      pointerEvents: "none",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      boxShadow:
        shadowOpacity > 0
          ? `0 0 15px rgba(34,197,94,${shadowOpacity})` // green-500
          : "none",
    }),
    [cellSize, intensity, borderAlpha, borderWidth, scale, shadowOpacity]
  );

  return <div style={cellStyle} />;
});

GridCell.displayName = "GridCell";
