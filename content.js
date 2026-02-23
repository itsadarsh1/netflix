const restoreNetflixControls = () => {
  // 1. REMOVE BLOCKING ELEMENTS (Same as before)
  const genericModal = document.querySelector('div.nf-modal.interstitial-full-screen');
  const householdButton = document.querySelector('[data-uia="EBI_BORROWER_CREATE_ACCOUNT_OR_SIGNOUT"]');
  const householdModal = householdButton ? householdButton.closest('.nf-modal') : null;

  [genericModal, householdModal].forEach(el => {
    if (el) {
      el.remove();
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  });

  // 2. FORCE SHOW CONTROLS & UI
  if (window.location.pathname.includes('/watch/')) {
    // Target the main player controls container
    const controls = document.querySelector('.watch-video--player-view');
    const video = document.querySelector('video');

    if (controls) {
      // Force visibility: opacity 1 makes it visible, pointer-events: all makes buttons clickable
      controls.style.opacity = '1';
      controls.style.visibility = 'visible';
      controls.style.pointerEvents = 'all';
    }

    // 3. FORCE PLAY
    if (video && video.paused) {
      video.play().catch(() => { /* User interaction may be needed */ });
    }
  }
};

// Continuous observation for dynamic changes
const observer = new MutationObserver(() => {
  restoreNetflixControls();
});

observer.observe(document.body || document.documentElement, {
  childList: true,
  subtree: true
});

// Initial run
restoreNetflixControls();