'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Sparkles } from 'lucide-react';
import WaitlistCard from './WaitlistCard';
import styles from './Hero.module.css';

interface HeroProps {
  onSuccessSubscribe?: () => void;
}

export default function Hero({ onSuccessSubscribe }: HeroProps) {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span>100% Certified Egyptian Flax • Nile Delta Harvest</span>
          </div>

          <h1 className={styles.heroTitle}>
            Pure Egyptian Linen. <br />
            <span className="italic-serif">Direct from Nile Looms.</span>
          </h1>

          <p className={styles.heroDescription}>
            Rooted in 5,000 years of Mediterranean textile mastery. We harvest long-staple flax along the fertile Nile Delta and weave every collection under our own master roof—offering pure, breathable Egyptian linen bedding, architectural drapery, and heirloom textiles with complete provenance.
          </p>

          <WaitlistCard onSuccessSubscribe={onSuccessSubscribe} />
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualCardWrapper}>
            <div className={styles.mainFrame}>
              <Image
                src="/images/hero-drapes.jpg"
                alt="Authentic Egyptian linen textiles draped in sunlit Mediterranean architectural interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.heroImg}
              />
              <div className={styles.visualOverlay} />

              <div className={`${styles.glassPill} ${styles.topPill}`}>
                <div className={styles.pillIconWrapper}>
                  <Leaf size={18} />
                </div>
                <div>
                  <strong>Nile Delta Harvest</strong>
                  <small>5,000-Year Egyptian Flax Heritage</small>
                </div>
              </div>

              <div className={`${styles.glassPill} ${styles.bottomPill}`}>
                <div className={styles.pillIconWrapper}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <strong>Woven Sunlight</strong>
                  <small>Extra-long staple fibers & cooling drape</small>
                </div>
              </div>
            </div>

            <div className={styles.secondaryFrame}>
              <Image
                src="/images/fabric-stack.jpg"
                alt="Folded natural linen fabric swatches in terracotta and sage"
                fill
                sizes="200px"
                className={styles.secondaryImg}
              />
              <div className={styles.secondaryBadge}>
                <span className={styles.badgeNumber}>100%</span>
                <span className={styles.badgeLabel}>Biodegradable Flax</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
