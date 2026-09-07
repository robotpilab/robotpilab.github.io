/* Rice RobotΠ Lab — small progressive enhancements (no dependencies). */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var body = document.body;

  /* Transparent header over the homepage hero becomes solid once the page scrolls. */
  if (header && body.classList.contains('home')) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile navigation toggle. */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Hero video: respect reduced-motion preferences and fall back to the poster if autoplay is blocked. */
  var video = document.querySelector('.hero video');
  if (video) {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      video.removeAttribute('autoplay');
      video.pause();
    } else {
      var p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { video.classList.add('paused'); });
      }
    }
  }

  /* Publications: filter by type. */
  var filter = document.querySelector('.pub-filter');
  if (filter) {
    filter.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      var type = btn.getAttribute('data-filter');
      filter.querySelectorAll('button').forEach(function (b) { b.classList.toggle('active', b === btn); });
      document.querySelectorAll('.pub').forEach(function (li) {
        li.hidden = type !== 'all' && li.getAttribute('data-type') !== type;
      });
      document.querySelectorAll('.pub-year').forEach(function (sec) {
        sec.hidden = !sec.querySelector('.pub:not([hidden])');
      });
    });
  }

  /* Copy BibTeX to the clipboard. */
  document.querySelectorAll('.copy-bib').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = document.getElementById(btn.getAttribute('data-target'));
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        var old = btn.innerHTML;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.innerHTML = old; }, 1600);
      });
    });
  });
})();
