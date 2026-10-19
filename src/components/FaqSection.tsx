'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FaqSection.module.css';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What makes authentic Egyptian linen so extraordinary?',
    a: 'Egyptian linen carries an unrivaled 5,000-year legacy as the sacred royal cloth of antiquity. Cultivated in the fertile silt of the Nile Delta, the flax develops extra-long staple bast fibers that are naturally thermo-regulating, cooling against summer warmth, and soften to a buttery hand over decades.',
  },
  {
    q: 'Where is your flax cultivated and woven?',
    a: 'Our flax is grown along the historic Nile Delta agricultural belt in Egypt, where centuries-old natural irrigation and rich minerals produce superior fiber tensile strength. We weave and tailor our collections on our dedicated looms with zero intermediary markups.',
  },
  {
    q: 'Are your collections produced by third-party sellers or a marketplace?',
    a: 'No. Linenora is a direct Egyptian atelier and the sole creator and source of truth. Every collection is exclusively designed by our studio and crafted in-house to guarantee 100% pure Egyptian flax authenticity.',
  },
  {
    q: 'Can I order custom sizes or architectural curtain drops?',
    a: 'Yes. Because we control our own looms and workrooms, we specialize in bespoke made-to-measure window drapery (up to double-width seamless panels), custom bedding dimensions, and tailored hospitality table linens.',
  },
  {
    q: 'How do I receive the complimentary Egyptian Linen Swatch Booklet?',
    a: 'Subscribers who register on our early access circle will receive a private email to confirm their shipping address. We dispatch swatch booklets internationally in 100% recyclable, plastic-free packaging.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faq">
      <div className={`container ${styles.faqContainer}`}>
        <div className="section-header text-center">
          <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-sub">Transparent answers about our direct looms, bespoke tailoring, and trade services.</p>
        </div>

        <div className={styles.accordion}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={19}
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                  />
                </button>
                <div
                  className={styles.answerWrapper}
                  style={{ maxHeight: isOpen ? '600px' : '0px' }}
                >
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
