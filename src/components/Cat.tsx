import { useState, useEffect, useCallback } from "react";

interface CatProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

type CatState = "walking" | "stopping" | "looking";

export default function Cat({ containerRef }: CatProps) {
  const [position, setPosition] = useState(50); // percentage
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [state, setState] = useState<CatState>("walking");
  const [tailAngle, setTailAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Colors based on dark mode - white in dark mode, black in light mode
  const catColor = isDark ? "#f5f5f5" : "#1a1a1a";
  const innerEarColor = isDark ? "#d4d4d4" : "#4a4a4a";
  const noseColor = isDark ? "#d4d4d4" : "#4a4a4a";
  const whiskerColor = isDark ? "#a3a3a3" : "#3a3a3a";

  // Handle cat click - make it jump
  const handleClick = () => {
    if (isJumping) return;

    setIsJumping(true);
    setIsPaused(true);

    // Jump animation lasts 600ms
    setTimeout(() => {
      setIsJumping(false);
      setIsPaused(false);
    }, 600);
  };

  // Get container width for boundary calculations
  const getContainerWidth = useCallback(() => {
    return containerRef.current?.offsetWidth || window.innerWidth;
  }, [containerRef]);

  // Random cat behavior
  useEffect(() => {
    if (isPaused || isJumping) return;

    const getRandomBehavior = () => {
      const rand = Math.random();
      if (rand < 0.6)
        return {
          state: "walking" as CatState,
          duration: 2000 + Math.random() * 3000,
        };
      if (rand < 0.85)
        return {
          state: "stopping" as CatState,
          duration: 1000 + Math.random() * 2000,
        };
      return {
        state: "looking" as CatState,
        duration: 500 + Math.random() * 1500,
      };
    };

    const behavior = getRandomBehavior();
    setState(behavior.state);

    const timer = setTimeout(() => {
      if (behavior.state === "walking") {
        if (Math.random() < 0.3) {
          setDirection((prev) => -prev);
        }
      }
    }, behavior.duration);

    return () => clearTimeout(timer);
  }, [state, isPaused, isJumping]);

  // Walking movement
  useEffect(() => {
    if (state !== "walking" || isPaused || isJumping) return;

    const moveCat = () => {
      setPosition((prev) => {
        const speed = 0.15 + Math.random() * 0.1;
        let newPos = prev + direction * speed;

        if (newPos <= 2) {
          setDirection(1);
          newPos = 2;
        } else if (newPos >= 98) {
          setDirection(-1);
          newPos = 98;
        }

        return newPos;
      });
    };

    const interval = setInterval(moveCat, 16);
    return () => clearInterval(interval);
  }, [state, direction, isPaused, isJumping]);

  // Tail wagging animation
  useEffect(() => {
    const wagTail = () => {
      setTailAngle((prev) => {
        const newAngle = Math.sin(Date.now() / 200) * 25;
        return newAngle;
      });
    };

    const interval = setInterval(wagTail, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    if (!isJumping) setIsPaused(true);
  };
  const handleMouseLeave = () => {
    if (!isJumping) setIsPaused(false);
  };

  // Calculate jump transform
  const jumpTransform = isJumping
    ? `translateX(-50%) translateY(-90%) translateY(-20px)`
    : `translateX(-50%) translateY(-90%)`;

  return (
    <div
      className="absolute top-0 left-0 w-10 h-8 cursor-pointer z-50"
      style={{
        left: `${position}%`,
        transform: jumpTransform,
        transition: isJumping
          ? "transform 0.15s ease-out"
          : "transform 0.3s ease",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        viewBox="0 0 60 45"
        className="w-full h-full"
        style={{
          transform: direction === 1 ? "scaleX(-1)" : "scaleX(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Tail */}
        <path
          d="M 50 30 Q 55 20 52 10"
          stroke={catColor}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{
            transform: `rotate(${tailAngle}deg)`,
            transformOrigin: "50px 30px",
            transition: "transform 0.1s ease",
          }}
        />

        {/* Back leg */}
        <ellipse cx="40" cy="35" rx="6" ry="8" fill={catColor} />

        {/* Body */}
        <ellipse cx="30" cy="30" rx="16" ry="12" fill={catColor} />

        {/* Front leg */}
        <ellipse cx="18" cy="35" rx="5" ry="7" fill={catColor} />

        {/* Head */}
        <circle cx="12" cy="20" r="10" fill={catColor} />

        {/* Left ear */}
        <path d="M 5 12 L 8 2 L 15 10" fill={catColor} />

        {/* Right ear */}
        <path d="M 20 10 L 22 2 L 25 12" fill={catColor} />

        {/* Inner ear left */}
        <path d="M 7 11 L 9 5 L 13 10" fill={innerEarColor} />

        {/* Inner ear right */}
        <path d="M 18 10 L 20 5 L 23 11" fill={innerEarColor} />

        {/* Eyes */}
        {state === "looking" ? (
          <>
            <ellipse cx="8" cy="18" rx="2" ry="1" fill="#fbbf24" />
            <ellipse cx="16" cy="18" rx="2" ry="1" fill="#fbbf24" />
          </>
        ) : state === "stopping" ? (
          <>
            <path d="M 6 18 L 10 18" stroke="#fbbf24" strokeWidth="1.5" />
            <path d="M 14 18 L 18 18" stroke="#fbbf24" strokeWidth="1.5" />
          </>
        ) : (
          <>
            <ellipse cx="8" cy="18" rx="2.5" ry="2.5" fill="#fbbf24" />
            <ellipse cx="16" cy="18" rx="2.5" ry="2.5" fill="#fbbf24" />
            <ellipse cx="9" cy="18" rx="1" ry="1.5" fill={catColor} />
            <ellipse cx="15" cy="18" rx="1" ry="1.5" fill={catColor} />
          </>
        )}

        {/* Nose */}
        <path d="M 12 22 L 11 24 L 13 24 Z" fill={noseColor} />

        {/* Whiskers */}
        <line
          x1="5"
          y1="22"
          x2="0"
          y2="20"
          stroke={whiskerColor}
          strokeWidth="0.5"
        />
        <line
          x1="5"
          y1="23"
          x2="0"
          y2="23"
          stroke={whiskerColor}
          strokeWidth="0.5"
        />
        <line
          x1="5"
          y1="24"
          x2="0"
          y2="26"
          stroke={whiskerColor}
          strokeWidth="0.5"
        />
        <line
          x1="19"
          y1="22"
          x2="24"
          y2="20"
          stroke={whiskerColor}
          strokeWidth="0.5"
        />
        <line
          x1="19"
          y1="23"
          x2="24"
          y2="23"
          stroke={whiskerColor}
          strokeWidth="0.5"
        />
        <line
          x1="19"
          y1="24"
          x2="24"
          y2="26"
          stroke={whiskerColor}
          strokeWidth="0.5"
        />
      </svg>

      {/* Tooltip */}
      {isJumping ? (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-accent text-white px-2 py-0.5 rounded whitespace-nowrap">
          🐱 Meow!
        </div>
      ) : isPaused ? (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-black dark:bg-white dark:text-black text-white px-2 py-0.5 rounded opacity-70 whitespace-nowrap">
          ✨ Purr~
        </div>
      ) : null}
    </div>
  );
}
