'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import styles from './TiersSection.module.css';

export default function TiersSection() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">EXCLUSIVE INVITATION</span>
          <h2 className="section-title">Founding Circle Privileges</h2>
          <p className="section-sub">
            Subscribing today grants you lifetime founding privileges before our global public rollout.
          </p>
        </div>

        <div className={styles.comparison}>
          <div className={styles.standardCard}>
            <div className={styles.cardHeader}>
              <span className={styles.eyebrow}>STANDARD LAUNCH</span>
              <h3 className={styles.tierTitle}>Public Guest</h3>
              <p className={styles.desc}>General atelier catalog access upon public unveiling.</p>
            </div>
            <ul className={styles.features}>
              <li><Check size={16} className={styles.check} /> Standard Egyptian linen collection</li>
              <li><Check size={16} className={styles.check} /> Standard seasonal bedding & drapes</li>
              <li className={styles.disabled}><X size={16} className={styles.cross} /> 20% Founder Discount</li>
              <li className={styles.disabled}><X size={16} className={styles.cross} /> Complimentary Tactile Swatch Kit</li>
              <li className={styles.disabled}><X size={16} className={styles.cross} /> 72-Hour Private Shopping Window</li>
              <li className={styles.disabled}><X size={16} className={styles.cross} /> Rare Numbered Loom Drops</li>
            </ul>
            <div className={styles.footer}>
              <span className={styles.status}>Available at Launch</span>
            </div>
          </div>

          <div className={styles.founderCard}>
            <div className={styles.featuredBadge}>LIMITED FOUNDING INVITATION</div>
            <div className={styles.cardHeader}>
              <span className={styles.founderEyebrow}>VIP EARLY ACCESS</span>
              <h3 className={styles.tierTitle}>Founding Circle Member</h3>
              <p className={styles.desc}>Reserved for our first subscribers and industry partners.</p>
            </div>
            <ul className={styles.features}>
              <li><Check size={16} className={styles.check} /> <strong>Full Egyptian linen debut collection</strong></li>
              <li><Check size={16} className={styles.check} /> <strong>20% Lifetime Debut Voucher</strong></li>
              <li><Check size={16} className={styles.check} /> <strong>Free Egyptian Linen Swatch Box</strong> (Sent to your door)</li>
              <li><Check size={16} className={styles.check} /> <strong>72-Hour Exclusive Pre-Opening Window</strong></li>
              <li><Check size={16} className={styles.check} /> <strong>Access to rare numbered loom drops</strong></li>
              <li><Check size={16} className={styles.check} /> <strong>Complimentary Bespoke Sizing Consultation</strong></li>
            </ul>
            <div className={styles.footer}>
              <a href="#waitlistCard" className="btn btn-primary btn-block">Claim Founding Status Free</a>
              <span className={styles.fineprint}>100% Free • No commitments or obligations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
