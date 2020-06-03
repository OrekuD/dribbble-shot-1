import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h3> illustration. </h3>
      <div>
        <a href="/" className="home"> Home </a>
        <a href="/"> Plans </a>
        <a href="/"> Support </a>
      </div>
      <div className="button-container">
        <button>
          <p>Download</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
