'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <section className="section" id="finalCta">
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.sparkleTitle}>
              <Sparkles size={14} />
              <span>JOIN THE FOUNDING CIRCLE</span>
            </div>
            <h2 className={styles.ctaHeading}>Elevate Your Living Space with Honest, Timeless Flax.</h2>
            <p className={styles.ctaText}>
              Be part of the inaugural circle shaping the future of conscious luxury textiles.
            </p>
            <div className={styles.ctaAction}>
              <a href="#waitlistCard" className="btn btn-primary btn-lg">Secure Your Place on the Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.brandCol}>
            <span className={styles.brandName}>LINENORA</span>
            <p className={styles.tagline}>
              Bespoke authentic Egyptian flax bedding, architectural drapery, and heirloom textiles cultivated along the fertile Nile Delta.
            </p>
            <div className={styles.badges}>
              <span className={styles.certPill}>100% Egyptian Flax</span>
              <span className={styles.certPill}>Nile Delta Origin</span>
              <span className={styles.certPill}>Direct from Looms</span>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Navigation</h4>
            <ul className={styles.links}>
              <li><a href="#about">Our Heritage</a></li>
              <li><a href="#swatches">Fabric Archive</a></li>
              <li><a href="#bespoke">Bespoke & Trade</a></li>
              <li><a href="#benefits">Founding Circle</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Categories Preview</h4>
            <ul className={styles.links}>
              <li><a href="#swatches">Egyptian Stonewashed Bedding</a></li>
              <li><a href="#swatches">Nile Breeze Drapery</a></li>
              <li><a href="#swatches">Table & Kitchen Linen</a></li>
              <li><a href="#swatches">Raw Bolts by the Yard</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.heading}>Connect & Inquiries</h4>
            <p className={styles.contact}>hello@linenora.com</p>
            <p className={styles.contact}>Cairo • Alexandria • Paris • New York</p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Pinterest">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="20"/>
                  <line x1="4" y1="12" x2="20" y2="12"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={`container ${styles.footerBottom}`}>
          <p>© 2026 LINENORA Atelier Inc. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Concierge</a>
            <span>•</span>
            <a href="#">Supply Chain Provenance</a>
          </div>
        </div>
      </footer>
    </>
  );
}
