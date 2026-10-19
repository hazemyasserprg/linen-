'use client';

import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 27,
    seconds: 55,
  });

  useEffect(() => {
    // 48 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 48);
    targetDate.setHours(targetDate.getHours() + 14);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" id="countdownSection">
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>GRAND ATELIER DEBUT</span>
          <h2 className={styles.title}>The Debut Collection Countdown</h2>
        </div>

        <div className={styles.timerGrid}>
          <div className={styles.timerBlock}>
            <span className={styles.timerNum}>{String(timeLeft.days).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Days</span>
          </div>
          <div className={styles.timerSep}>:</div>
          <div className={styles.timerBlock}>
            <span className={styles.timerNum}>{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Hours</span>
          </div>
          <div className={styles.timerSep}>:</div>
          <div className={styles.timerBlock}>
            <span className={styles.timerNum}>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Minutes</span>
          </div>
          <div className={styles.timerSep}>:</div>
          <div className={styles.timerBlock}>
            <span className={styles.timerNum}>{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className={styles.timerLabel}>Seconds</span>
          </div>
        </div>

        <div className={styles.action}>
          <a href="#waitlistCard" className="btn btn-secondary-glass">Reserve Founding Status</a>
        </div>
      </div>
    </div>
  );
}
