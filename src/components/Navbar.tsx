import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src="/icon2.png" alt="RCA-SK Logo" width={100} height={40} className={styles.logoImage} />
      </Link>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link href="/committee" onClick={() => setIsMenuOpen(false)}>
          Committee
        </Link>
        <Link href="/businesses" onClick={() => setIsMenuOpen(false)}>
          Businesses
        </Link>
        <Link href="/announcements" onClick={() => setIsMenuOpen(false)}>
          Announcements
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
