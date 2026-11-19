/* ═══════════════════════════════════════════════════════════════════════════
   common.js — behaviour shared by every page (taskbar clock + image lightbox).
   Load at the end of <body>, after the taskbar and lightbox markup.
   ═══════════════════════════════════════════════════════════════════════════ */

// ── TASKBAR CLOCK ───────────────────────────────────────────────────────────
function updateClock() {
  var now = new Date();
  document.getElementById('clock').textContent =
    String(now.getHours()).padStart(2, '0') + ':' +
    String(now.getMinutes()).padStart(2, '0');
}
updateClock();
setInterval(updateClock, 10000);


// ── LIGHTBOX ────────────────────────────────────────────────────────────────
// Pages that use it include the #lightbox markup. Kept global because images
// call openLightbox(src, alt) from inline onclick= attributes.
function openLightbox(src, alt) {
  var img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt || '';
  document.getElementById('lightbox-caption').textContent = alt || '';
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('open');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
