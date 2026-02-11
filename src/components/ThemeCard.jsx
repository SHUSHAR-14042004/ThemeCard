import React from "react";

const ThemeCard = ({ title, darkMode }) => {
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        width: "300px",
        textAlign: "center",
        transition: "all 0.3s ease"
      }}
    >
      <h2>{title}</h2>
      <p>This is the ThemeCard</p>
    </div>
  );
};

export default ThemeCard;
