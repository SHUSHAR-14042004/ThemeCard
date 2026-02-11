import React, { useState, useEffect } from "react";
import ThemeCard from "./components/ThemeCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? "#121212"
      : "#f4f4f4";
  }, [darkMode]);

  useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Change Theme
      </button>

      <ThemeCard title=" Theme Card" darkMode={darkMode} />
    </div>
  );
}

export default App;
