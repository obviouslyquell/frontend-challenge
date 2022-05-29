import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">Все котики</Link>
        <Link to="/liked">Любимые котики</Link>
      </div>
    </header>
  );
}

export default Header;
