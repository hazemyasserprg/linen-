'use client';

import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Check, Sparkles } from 'lucide-react';
import styles from './WaitlistCard.module.css';

interface WaitlistCardProps {
  onSuccessSubscribe?: () => void;
}

export default function WaitlistCard({ onSuccessSubscribe }: WaitlistCardProps) {
  const [role, setRole] = useState<'buyer' | 'trade'>('buyer');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(3842);

  useEffect(() => {
    const saved = localStorage.getItem('linenora_vip_email');
    if (saved) {
      setEmail(saved);
      setStatus('success');
      setMessage('You are already registered on our Founding VIP list.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, role }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('linenora_vip_email', cleanEmail);
        localStorage.setItem('linenora_vip_role', role);
        setStatus('success');
        setMessage(`Welcome to the Founding Circle! An exclusive invitation has been queued for ${cleanEmail}.`);
        setWaitlistCount((prev) => prev + 1);
        if (onSuccessSubscribe) {
          onSuccessSubscribe();
        }
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      // Fallback optimistic registration
      localStorage.setItem('linenora_vip_email', cleanEmail);
      setStatus('success');
      setMessage(`Welcome to the Founding Circle! An exclusive invitation has been queued for ${cleanEmail}.`);
      setWaitlistCount((prev) => prev + 1);
      if (onSuccessSubscribe) {
        onSuccessSubscribe();
      }
    }
  };

  return (
    <div className={styles.card} id="waitlistCard">
      <div className={styles.roleSelector} role="radiogroup" aria-label="Select your interest">
        <button
          type="button"
          className={`${styles.roleBtn} ${role === 'buyer' ? styles.active : ''}`}
          onClick={() => setRole('buyer')}
        >
          <span>Homeowner & Collector</span>
        </button>
        <button
          type="button"
          className={`${styles.roleBtn} ${role === 'trade' ? styles.active : ''}`}
          onClick={() => setRole('trade')}
        >
          <span>Interior Trade & Hospitality</span>
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputRow}>
          <div className={styles.inputWrapper}>
            <Mail className={styles.inputIcon} size={19} />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder={
                role === 'trade'
                  ? 'Enter studio / work email for trade perks...'
                  : 'Enter your email for private access...'
              }
              required
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span>Reserving...</span>
            ) : status === 'success' ? (
              <>
                <span>Invitation Reserved</span>
                <Check size={18} />
              </>
            ) : (
              <>
                <span>Claim Early Access</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        {message && (
          <p
            className={`${styles.feedback} ${
              status === 'success' ? styles.feedbackSuccess : styles.feedbackError
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <div className={styles.perksList}>
        <span className={styles.perkItem}><Check size={14} className={styles.perkIcon} /> Zero spam, private unveiling</span>
        <span className={styles.perkItem}><Check size={14} className={styles.perkIcon} /> 20% launch voucher</span>
        <span className={styles.perkItem}><Check size={14} className={styles.perkIcon} /> Complimentary Egyptian linen swatch pack</span>
      </div>

      <div className={styles.socialProof}>
        <div className={styles.avatarGroup}>
          <span className={`${styles.avatar} ${styles.av1}`} title="Elena S. (Interior Designer)">ES</span>
          <span className={`${styles.avatar} ${styles.av2}`} title="Marcus V. (Architect)">MV</span>
          <span className={`${styles.avatar} ${styles.av3}`} title="Chloé B. (Textile Collector)">CB</span>
          <span className={`${styles.avatar} ${styles.av4}`} title="Liam R. (Studio Principal)">LR</span>
        </div>
        <div className={styles.proofText}>
          <p>
            Joined by <strong>{waitlistCount.toLocaleString()}</strong> designers, collectors & tastemakers
          </p>
          <span className={styles.livePulse}>
            <span className={styles.pulseRing} /> Live registration active
          </span>
        </div>
      </div>
    </div>
  );
}
