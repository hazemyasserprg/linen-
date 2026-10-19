'use client';

import React from 'react';
import { ShieldCheck, Compass, Home } from 'lucide-react';
import styles from './PillarsSection.module.css';

export default function PillarsSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">WHY LINENORA</span>
          <h2 className="section-title">The Antidote to Fast Furnishings</h2>
          <p className="section-sub">
            Linen is one of humanity’s oldest, most resilient, and sustainable natural fibers. We created Linenora to champion genuine craftsmanship over mass-produced synthetics.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={28} />
            </div>
            <h3 className={styles.cardTitle}>The Ancient Cradle of Linen</h3>
            <p className={styles.cardText}>
              Ancient Egyptians celebrated linen as &ldquo;woven moonlight.&rdquo; For over 5,000 years, the Nile basin has yielded the world&apos;s most coveted bast fibers—hypoallergenic, breathable, and enduring.
            </p>
            <span className={styles.meta}>100% Pure Egyptian Flax</span>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Compass size={28} />
            </div>
            <h3 className={styles.cardTitle}>Single-Source Nile Provenance</h3>
            <p className={styles.cardText}>
              Sustainably cultivated in the mineral-rich black silt of the Nile Delta, spun on heritage looms, and hand-finished in our atelier. Absolute transparency with zero middlemen.
            </p>
            <span className={styles.meta}>Nile Delta Origin & In-House Looms</span>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Home size={28} />
            </div>
            <h3 className={styles.cardTitle}>Bespoke Atelier & Trade</h3>
            <p className={styles.cardText}>
              Tailored services for interior architects and discerning homes: custom architectural drapery drops, bespoke mattress depths, and complimentary memo swatch rings.
            </p>
            <span className={styles.meta}>Bespoke Sizing & Trade Accounts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
