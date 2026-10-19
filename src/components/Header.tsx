'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 960) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header} id="siteHeader">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brandLogo} aria-label="LINENORA Home" onClick={closeMenu}>
          <span className={styles.logoMark}>L</span>
          <div className={styles.logoText}>
            <span className={styles.brandName}>LINENORA</span>
            <span className={styles.brandSub}>EGYPTIAN LINEN ATELIER</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks} id="navLinks">
          <a href="#about" className={styles.navLink}>Our Heritage</a>
          <a href="#swatches" className={styles.navLink}>Fabric Archive</a>
          <a href="#bespoke" className={styles.navLink}>Bespoke & Trade</a>
          <a href="#benefits" className={styles.navLink}>Founding Circle</a>
        </nav>

        <div className={styles.headerActions}>
          <a href="#waitlistCard" className={`btn btn-primary-outline btn-sm ${styles.desktopCta}`}>
            Join Waitlist
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className={styles.mobileNav}>
          <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>
            Our Heritage
          </a>
          <a href="#swatches" className={styles.mobileNavLink} onClick={closeMenu}>
            Fabric Archive
          </a>
          <a href="#bespoke" className={styles.mobileNavLink} onClick={closeMenu}>
            Bespoke & Trade
          </a>
          <a href="#benefits" className={styles.mobileNavLink} onClick={closeMenu}>
            Founding Circle
          </a>
          <a href="#faq" className={styles.mobileNavLink} onClick={closeMenu}>
            FAQ
          </a>
          <a
            href="#waitlistCard"
            className="btn btn-primary btn-block"
            onClick={closeMenu}
            style={{ marginTop: '0.75rem' }}
          >
            Claim Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}
