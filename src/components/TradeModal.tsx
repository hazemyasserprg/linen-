'use client';

import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import styles from './TradeModal.module.css';

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TradeModal({ isOpen, onClose }: TradeModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studioName: '',
    email: '',
    projectType: '',
    timeline: '',
  });

  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalCard}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className={styles.header}>
              <span className="section-tag">TRADE & BESPOKE INQUIRY</span>
              <h3 className={styles.title}>Atelier Trade Services</h3>
              <p className={styles.sub}>
                Request custom drapery calculations, trade memo sample rings of authentic Egyptian linen, or bespoke hospitality yardage runs.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="studioName">Design Studio / Firm / Project Name</label>
                <input
                  type="text"
                  id="studioName"
                  placeholder="e.g. Studio Laurent Interiors"
                  required
                  value={formData.studioName}
                  onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contactEmail">Work Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="designer@studiolaurent.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="projectType">Primary Service Requirement</label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="">Select your requirement...</option>
                  <option value="drapery">Made-to-Measure Architectural Drapery</option>
                  <option value="bedding">Custom Dimensions Bedding & Sizing</option>
                  <option value="hospitality">Hospitality & Commercial Contract Run</option>
                  <option value="memo">Complimentary Trade Memo Swatch Ring</option>
                  <option value="bolts">Raw Fabric Bolts by the Yard</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="timeline">Estimated Project Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  placeholder="e.g. Q1 2026, Immediate sample review"
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Request Trade Access & Samples
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successBox}>
            <div className={styles.successIconWrapper}>
              <CheckCircle2 size={40} className={styles.successIcon} />
            </div>
            <h4 className={styles.successTitle}>Inquiry Registered</h4>
            <p className={styles.successText}>
              Our trade concierge director will prepare your tailored specification catalog and dispatch your complimentary Egyptian linen memo swatches.
            </p>
            <button
              type="button"
              className="btn btn-primary-outline btn-sm"
              onClick={onClose}
              style={{ marginTop: '1.5rem' }}
            >
              Return to Atelier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
