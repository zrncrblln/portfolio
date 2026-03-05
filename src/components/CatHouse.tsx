import { useState, useEffect } from "react";

export default function CatHouse() {
  const [isDark, setIsDark] = useState(false);

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

  // Colors based on dark mode
  const houseColor = isDark ? "#e5e5e5" : "#8B4513";
  const roofColor = isDark ? "#404040" : "#A0522D";
  const entranceColor = isDark ? "#1a1a1a" : "#3d2314";

  return (
    <div className="absolute left-4 -top-12 w-12 h-14 z-40 pointer-events-none">
      <svg viewBox="0 0 50 55" className="w-full h-full">
        {/* Roof */}
        <path d="M 25 0 L 48 20 L 2 20 Z" fill={roofColor} />

        {/* House body */}
        <rect x="5" y="20" width="40" height="35" fill={houseColor} />

        {/* Entrance/hole */}
        <ellipse cx="25" cy="42" rx="10" ry="12" fill={entranceColor} />

        {/* Window */}
        <rect
          x="12"
          y="28"
          width="8"
          height="8"
          fill={isDark ? "#404040" : "#87CEEB"}
          stroke={houseColor}
          strokeWidth="1"
        />

        {/* Window pane */}
        <line
          x1="16"
          y1="28"
          x2="16"
          y2="36"
          stroke={houseColor}
          strokeWidth="1"
        />
        <line
          x1="12"
          y1="32"
          x2="20"
          y2="32"
          stroke={houseColor}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
