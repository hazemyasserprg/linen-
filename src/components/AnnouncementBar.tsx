'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import styles from './AnnouncementBar.module.css';

interface AnnouncementBarProps {
  spotsRemaining: number;
}

export default function AnnouncementBar({ spotsRemaining }: AnnouncementBarProps) {
  return (
    <aside className={styles.bar} id="announcementBar">
      <div className={styles.content}>
        <Sparkles size={14} className={styles.sparkle} />
        <p>
          <strong>Founding Circle Launch:</strong> First 500 members receive a complimentary tactile Egyptian Linen Swatch Booklet + 20% off debut collections.
        </p>
        <span className={styles.spotsBadge}>{spotsRemaining} spots remaining</span>
      </div>
    </aside>
  );
}
