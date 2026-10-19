/**
 * LINENORA — The Artisan Linen Marketplace
 * Interactive Experience Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initWaitlistForm();
  initFabricExplorer();
  initFaqAccordion();
  initSupplierModal();
});

/* ==========================================================================
   1. Dynamic Countdown Timer
   ========================================================================== */
function initCountdown() {
  // Target date: 48 days into future
  const now = new Date();
  const targetDate = new Date(now.getTime() + (48 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000));

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function updateTimer() {
    const currentTime = new Date().getTime();
    const distance = targetDate - currentTime;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   2. Interactive Waitlist Subscription
   ========================================================================== */
function initWaitlistForm() {
  const form = document.getElementById('subscriptionForm');
  const emailInput = document.getElementById('subscriberEmail');
  const feedbackEl = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  const roleButtons = document.querySelectorAll('.role-btn');
  const waitlistCountEl = document.getElementById('waitlistCount');
  const spotsCounterEl = document.getElementById('spotsCounter');

  let activeRole = 'buyer';
  let currentCount = 3842;
  let remainingSpots = 94;

  // Restore stored state if user already subscribed
  const savedEmail = localStorage.getItem('linenora_vip_email');
  if (savedEmail && emailInput && feedbackEl) {
    emailInput.value = savedEmail;
    feedbackEl.textContent = '✓ You are already registered on our Founding VIP list!';
    feedbackEl.className = 'form-feedback success';
  }

  // Handle role selection
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRole = btn.dataset.role;

      if (activeRole === 'trade') {
        emailInput.placeholder = 'Enter studio / work email for trade perks...';
      } else {
        emailInput.placeholder = 'Enter your email for private access...';
      }
    });
  });

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      feedbackEl.textContent = 'Please enter a valid email address.';
      feedbackEl.className = 'form-feedback error';
      emailInput.focus();
      return;
    }

    // Processing animation
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Reserving...</span>`;
    feedbackEl.textContent = '';

    setTimeout(() => {
      // Save in local storage
      localStorage.setItem('linenora_vip_email', email);
      localStorage.setItem('linenora_vip_role', activeRole);

      // Increment waitlist count
      currentCount += 1;
      remainingSpots = Math.max(1, remainingSpots - 1);
      
      if (waitlistCountEl) {
        waitlistCountEl.textContent = currentCount.toLocaleString();
      }
      if (spotsCounterEl) {
        spotsCounterEl.textContent = `${remainingSpots} spots remaining`;
      }

      // Success feedback
      feedbackEl.innerHTML = `✦ <strong>Welcome to Founding Circle!</strong> An exclusive welcome invitation and swatch reservation has been queued for <em>${escapeHtml(email)}</em>.`;
      feedbackEl.className = 'form-feedback success';

      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Invitation Reserved</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      // Subtle celebration pulse on the waitlist card
      const card = document.getElementById('waitlistCard');
      if (card) {
        card.style.transition = 'box-shadow 0.4s ease';
        card.style.boxShadow = '0 0 0 3px rgba(186, 104, 73, 0.4), var(--shadow-hero)';
        setTimeout(() => {
          card.style.boxShadow = '';
        }, 2000);
      }
    }, 700);
  });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/* ==========================================================================
   3. Interactive Fabric Swatch & Category Explorer
   ========================================================================== */
const FABRIC_DATA = {
  washed: {
    badge: 'Everyday Luxury • 185 GSM',
    title: 'French Stonewashed Flax',
    desc: 'Pre-washed with organic volcanic pumice for a relaxed, billowy texture. Breathable, naturally thermo-regulating, and exceptionally soft from night one with no break-in period.',
    weight: '185 GSM (Medium-Light)',
    fiber: '100% Normandy Flax',
    use: 'Duvet Covers, Fitted Sheets, Pillowcases',
    dye: 'Low-Impact Botanical Pigments',
    colorHex: '#EFE9DE'
  },
  rustic: {
    badge: 'Heritage Heavyweight • 380 GSM',
    title: 'Belgian Rustic Weave',
    desc: 'Woven on vintage rapier looms with hearty long-staple flax yarns. High tensile strength, subtle organic slubs, and exceptional durability for bespoke upholstery and heirloom accents.',
    weight: '380 GSM (Heavyweight)',
    fiber: '100% Belgian Flax Master Looms',
    use: 'Sofa Slipcovers, Heavy Cushions, Headboards',
    dye: 'Unglazed Raw Earth Pigment',
    colorHex: '#DDD3C4'
  },
  sheer: {
    badge: 'Architectural Light • 110 GSM',
    title: 'Ethereal Voile Drapery',
    desc: 'Spun to an impossibly delicate, semi-translucent gauge. Diffuses intense Mediterranean or city sunlight into a soft, poetic golden glow while preserving complete privacy.',
    weight: '110 GSM (Airy & Sheer)',
    fiber: '100% Baltic Long-Fiber Flax',
    use: 'Floor-to-Ceiling Drapes, Canopy Sheers',
    dye: 'Sun-Bleached Organic White & Ecru',
    colorHex: '#F6F3ED'
  },
  waffle: {
    badge: 'Spa & Wellness • 290 GSM',
    title: 'Honeycomb Waffle Weave',
    desc: 'A three-dimensional woven waffle matrix designed to maximize surface absorption and rapid air drying. Gentle micro-exfoliation for bathing, sauna, and lounge ceremonies.',
    weight: '290 GSM (Textured Waffle)',
    fiber: '100% Pure Flax & Organic Cotton Core',
    use: 'Bath Sheets, Spa Robes, Textured Throws',
    dye: 'Mineral Washed Sage & Chalk',
    colorHex: '#E2E6E0'
  }
};

function initFabricExplorer() {
  const tabs = document.querySelectorAll('.swatch-tabs .tab-btn');
  const badgeEl = document.getElementById('fabricBadge');
  const titleEl = document.getElementById('fabricTitle');
  const descEl = document.getElementById('fabricDesc');
  const weightEl = document.getElementById('specWeight');
  const fiberEl = document.getElementById('specFiber');
  const useEl = document.getElementById('specUse');
  const dyeEl = document.getElementById('specDye');
  const macroTextureEl = document.getElementById('macroTexture');
  const colorDots = document.querySelectorAll('.color-dot');
  const selectedColorName = document.getElementById('selectedColorName');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.dataset.fabric;
      const data = FABRIC_DATA[key];
      if (!data) return;

      // Animate transition
      const previewCard = document.getElementById('fabricPreviewCard');
      previewCard.style.opacity = '0.6';
      previewCard.style.transform = 'translateY(4px)';

      setTimeout(() => {
        badgeEl.textContent = data.badge;
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        weightEl.textContent = data.weight;
        fiberEl.textContent = data.fiber;
        useEl.textContent = data.use;
        dyeEl.textContent = data.dye;
        if (macroTextureEl) {
          macroTextureEl.style.backgroundColor = data.colorHex;
        }

        previewCard.style.opacity = '1';
        previewCard.style.transform = 'translateY(0)';
      }, 150);
    });
  });

  // Color picker within fabric card
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const colorName = dot.dataset.color;
      const colorStyle = dot.style.getPropertyValue('--c').trim();

      if (selectedColorName) {
        selectedColorName.innerHTML = `Selected: <strong>${colorName}</strong>`;
      }
      if (macroTextureEl) {
        macroTextureEl.style.backgroundColor = colorStyle;
      }
    });
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.parentElement;
      const isOpen = parent.classList.contains('active');
      const answer = parent.querySelector('.faq-answer');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        item.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        parent.classList.add('active');
        q.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      }
    });
  });
}

/* ==========================================================================
   5. Artisan / Supplier Modal
   ========================================================================== */
function initSupplierModal() {
  const openBtn = document.getElementById('openSupplierModal');
  const modal = document.getElementById('supplierModal');
  const closeBtn = document.getElementById('closeSupplierModal');
  const form = document.getElementById('supplierForm');
  const successBox = document.getElementById('modalSuccess');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking outside card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('active');
      }
    });
  }
}
