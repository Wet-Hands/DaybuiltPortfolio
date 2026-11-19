/* ═══════════════════════════════════════════════════════════════════════════
   common.js — behaviour shared by every page: taskbar clock, keyboard
   support, dialogs (focus handling) and the image lightbox.
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


// ── KEYBOARD ────────────────────────────────────────────────────────────────
// Remember whether the user is on keyboard or mouse, so focus moved by script
// only shows the dotted focus ring for keyboard users.
var keyboardMode = false;
document.addEventListener('keydown',     function() { keyboardMode = true;  }, true);
document.addEventListener('pointerdown', function() { keyboardMode = false; }, true);

function focusElement(el) {
  if (el && el.focus) el.focus({ focusVisible: keyboardMode });
}

// Elements marked role="button" (cards, images…) activate with Enter / Space,
// like real buttons.
document.addEventListener('keydown', function(e) {
  var el = e.target;
  if ((e.key === 'Enter' || e.key === ' ') &&
      el.getAttribute && el.getAttribute('role') === 'button' &&
      el.tagName !== 'BUTTON' && el.tagName !== 'A') {
    e.preventDefault();
    el.click();
  }
});


// ── DIALOGS ─────────────────────────────────────────────────────────────────
// openDialog(el, close, initialFocus) — moves focus into `el`, keeps Tab inside
//   it, and lets Escape call `close`. Dialogs stack: Escape closes the top one.
// closeDialog(el) — call from the dialog's close function; restores focus to
//   whatever was focused before it opened.
var FOCUSABLE = 'a[href], button:not([disabled]), iframe, select, [tabindex]:not([tabindex="-1"])';
var openDialogs = [];

function focusablesIn(container) {
  return Array.prototype.filter.call(container.querySelectorAll(FOCUSABLE), function(el) {
    return el.getClientRects().length > 0;   // skip hidden elements
  });
}

function openDialog(el, close, initialFocus) {
  if (openDialogs.some(function(d) { return d.el === el; })) return;
  openDialogs.push({ el: el, close: close, returnFocus: document.activeElement });
  focusElement(initialFocus || focusablesIn(el)[0]);
}

function closeDialog(el) {
  var i = openDialogs.findIndex(function(d) { return d.el === el; });
  if (i === -1) return;
  var returnFocus = openDialogs.splice(i, 1)[0].returnFocus;
  if (returnFocus && document.contains(returnFocus)) focusElement(returnFocus);
}

document.addEventListener('keydown', function(e) {
  var top = openDialogs[openDialogs.length - 1];
  if (!top) return;

  if (e.key === 'Escape') {
    e.preventDefault();
    e.stopImmediatePropagation();
    top.close();
  } else if (e.key === 'Tab') {
    var items = focusablesIn(top.el);
    if (!items.length) { e.preventDefault(); return; }
    var first = items[0], last = items[items.length - 1];
    var inside = top.el.contains(document.activeElement);
    if (!inside || (e.shiftKey && document.activeElement === first)) {
      e.preventDefault();
      focusElement(e.shiftKey ? last : first);
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      focusElement(first);
    }
  }
});


// ── LIGHTBOX ────────────────────────────────────────────────────────────────
// Pages that use it include the #lightbox markup. Kept global because images
// call openLightbox(src, alt) from inline onclick= attributes.
function openLightbox(src, alt) {
  var lightbox = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt || '';
  document.getElementById('lightbox-caption').textContent = alt || '';
  lightbox.classList.add('open');
  openDialog(lightbox, closeLightbox, lightbox.querySelector('.win-btn'));
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
  closeDialog(lightbox);
}
