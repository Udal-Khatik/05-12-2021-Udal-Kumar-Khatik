import React from "react";
import "../App.css";
const Header = ({ text }) => {
  return (
    <header className="App-header">
      <h1 className="App-title">{text}</h1>
    </header>
  );
};

export default Header;
