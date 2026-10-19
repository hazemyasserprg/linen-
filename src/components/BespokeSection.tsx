'use client';

import React from 'react';
import Image from 'next/image';
import { Scissors, Briefcase, Award } from 'lucide-react';
import styles from './BespokeSection.module.css';

interface BespokeSectionProps {
  onOpenTradeModal: () => void;
}

export default function BespokeSection({ onOpenTradeModal }: BespokeSectionProps) {
  return (
    <section className="section" id="bespoke">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <div className={styles.imgContainer}>
              <Image
                src="/images/fabric-stack.jpg"
                alt="Stacked bolts of bespoke organic linen fabric"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.img}
              />
            </div>
            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>
                &ldquo;By cultivating our own long-staple Nile flax and operating our own looms, we revive the golden age of Egyptian weaving. Every drape, sheet set, and custom commission is tailored to architectural perfection.&rdquo;
              </p>
              <cite className={styles.quoteAuthor}>
                — Master Atelier Studio, Linenora
              </cite>
            </div>
          </div>
        </div>

        <div className={styles.text}>
          <span className="section-tag">BESPOKE ATELIER & TRADE CONCIERGE</span>
          <h2 className="section-title">Made-to-Measure Craftsmanship for Discerning Interiors</h2>
          <p className={styles.lead}>
            Unlike mass retailers with synthetic blends or fixed sizes, we weave authentic Egyptian flax directly on our own looms. We offer made-to-measure curtain drops, bespoke Egyptian linen bedding suites, and tailored yardages for luxury residences and boutique hotels.
          </p>

          <ul className={styles.checklist}>
            <li>
              <div className={styles.checkIcon}>
                <Scissors size={15} />
              </div>
              <div>
                <strong>Architectural Drapery & Sizing</strong>
                <p>Floor-to-ceiling custom lengths, double-width seamless panels, pinch pleat and wave-fold tailor finishing.</p>
              </div>
            </li>
            <li>
              <div className={styles.checkIcon}>
                <Briefcase size={15} />
              </div>
              <div>
                <strong>Interior Designer Trade Concierge</strong>
                <p>Dedicated studio accounts, wholesale trade tiers, custom dye-lot matching, and complimentary memo ring swatches.</p>
              </div>
            </li>
            <li>
              <div className={styles.checkIcon}>
                <Award size={15} />
              </div>
              <div>
                <strong>Boutique Hospitality & Yacht Commissions</strong>
                <p>High-tensile, laundry-tested linen suites customized with bespoke monogramming and custom GSM specifications.</p>
              </div>
            </li>
          </ul>

          <div className={styles.cta}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenTradeModal}
            >
              Inquire for Bespoke & Trade Concierge
            </button>
            <span className={styles.note}>Trade memo kits dispatched within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
