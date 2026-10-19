'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './FabricExplorer.module.css';

type FabricKey = 'washed' | 'rustic' | 'sheer' | 'waffle';

interface FabricInfo {
  badge: string;
  title: string;
  desc: string;
  weight: string;
  fiber: string;
  use: string;
  dye: string;
  colorHex: string;
}

const FABRICS: Record<FabricKey, FabricInfo> = {
  washed: {
    badge: 'Nile Everyday Luxury • 185 GSM',
    title: 'Egyptian Stonewashed Flax',
    desc: 'Crafted from long-staple Nile Delta flax and stone-softened for an effortless, billowy feel. Naturally thermo-regulating, cooling against summer heat, and wonderfully soft from night one.',
    weight: '185 GSM (Medium-Light)',
    fiber: '100% Nile Delta Long-Staple Flax',
    use: 'Duvet Covers, Sheet Sets, Pillowcases',
    dye: 'Low-Impact Botanical Pigments',
    colorHex: '#F4EFE6',
  },
  rustic: {
    badge: 'Heritage Heavyweight • 380 GSM',
    title: 'Nile Rustic Canvas Weave',
    desc: 'Woven from thick, uncombed Egyptian flax yarns on wide shuttle looms. High tensile strength and rich organic slubs ideal for heirloom upholstery, bespoke headboards, and heavy drapery.',
    weight: '380 GSM (Heavyweight Canvas)',
    fiber: '100% Authentic Egyptian Flax',
    use: 'Architectural Upholstery, Heavy Cushions, Headboards',
    dye: 'Raw Desert Silt & Mineral Washes',
    colorHex: '#DDD3C4',
  },
  sheer: {
    badge: 'Architectural Light • 110 GSM',
    title: 'Nile Breeze Voile Drapery',
    desc: 'Spun to an airy, delicate gauge inspired by ancient royal linens. Gently diffuses harsh sunlight into a calm, poetic golden ambiance while allowing natural desert breezes to flow.',
    weight: '110 GSM (Airy & Translucent)',
    fiber: '100% Combed Nile Delta Flax',
    use: 'Floor-to-Ceiling Drapery, Canopy Sheers',
    dye: 'Sun-Bleached Chalk & Raw Flax Ecru',
    colorHex: '#F6F3ED',
  },
  waffle: {
    badge: 'Alexandria Spa & Bath • 290 GSM',
    title: 'Nile Honeycomb Waffle Weave',
    desc: 'A three-dimensional woven waffle matrix engineered for rapid evaporation and maximum moisture absorption. Naturally antibacterial and hypoallergenic for everyday wellness ceremonies.',
    weight: '290 GSM (Textured Waffle)',
    fiber: '100% Pure Egyptian Flax',
    use: 'Bath Sheets, Spa Robes, Textured Throws',
    dye: 'Mineral Washed Sage & Chalk',
    colorHex: '#E2E6E0',
  },
};

const COLORWAYS = [
  { name: 'Desert Alabaster', hex: '#F4EFE6' },
  { name: 'Nile Oasis Sage', hex: '#E8ECE5' },
  { name: 'Red Sea Terracotta', hex: '#C07553' },
  { name: 'Delta Olive', hex: '#444E3F' },
  { name: 'Basalt Charcoal', hex: '#2D2723' },
];

export default function FabricExplorer() {
  const [activeTab, setActiveTab] = useState<FabricKey>('washed');
  const [selectedColor, setSelectedColor] = useState(COLORWAYS[0]);

  const activeFabric = FABRICS[activeTab];

  return (
    <section className="section" id="swatches">
      <div className="container">
        <div className={styles.headerSplit}>
          <div>
            <span className="section-tag">CURATED ARCHIVE</span>
            <h2 className="section-title">Explore Our Weaver Grades</h2>
            <p className="section-sub">
              Interact with signature weights, weaves, and natural dye formulations curated for our debut atelier collection.
            </p>
          </div>

          <div className={styles.tabs} role="tablist">
            <button
              className={`${styles.tabBtn} ${activeTab === 'washed' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('washed')}
            >
              Stonewashed Bedding
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'rustic' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('rustic')}
            >
              Heavy Rustic Upholstery
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'sheer' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('sheer')}
            >
              Ethereal Voile Drapery
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'waffle' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('waffle')}
            >
              Honeycomb Bath & Spa
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge}>{activeFabric.badge}</div>
            <h3 className={styles.title}>{activeFabric.title}</h3>
            <p className={styles.desc}>{activeFabric.desc}</p>

            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Weight</span>
                <strong className={styles.specValue}>{activeFabric.weight}</strong>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Fibers</span>
                <strong className={styles.specValue}>{activeFabric.fiber}</strong>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Ideal For</span>
                <strong className={styles.specValue}>{activeFabric.use}</strong>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Dye Method</span>
                <strong className={styles.specValue}>{activeFabric.dye}</strong>
              </div>
            </div>

            <div className={styles.swatchPicker}>
              <span className={styles.swatchLabel}>Signature Launch Colorways:</span>
              <div className={styles.dotsRow}>
                {COLORWAYS.map((c) => (
                  <button
                    key={c.name}
                    className={`${styles.colorDot} ${
                      selectedColor.name === c.name ? styles.dotActive : ''
                    }`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                    aria-label={c.name}
                  />
                ))}
              </div>
              <span className={styles.selectedName}>
                Selected: <strong>{selectedColor.name}</strong>
              </span>
            </div>
          </div>

          <div className={styles.visualSide}>
            <div className={styles.macroBox}>
              <div className={styles.macroBadge}>High-Density Weave Sample</div>
              <div
                className={styles.macroTexture}
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div className={styles.macroFooter}>
                <span>Free Swatch Kit for Founding Members</span>
                <a href="#waitlistCard" className={styles.macroLink}>
                  <span>Claim Kit</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
