import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../@assets/icon2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="RCA-SK Logo" className={styles.logoImage} />
      </Link>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/committee" onClick={() => setIsMenuOpen(false)}>
          Committee
        </Link>
        <Link to="/businesses" onClick={() => setIsMenuOpen(false)}>
          Businesses
        </Link>
        <Link to="/announcements" onClick={() => setIsMenuOpen(false)}>
          Announcements
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
