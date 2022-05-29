import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__link">
          <Link to="/">Все котики</Link>
        </div>
        <div className="header__link">
          <Link to="/liked">Любимые котики</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
