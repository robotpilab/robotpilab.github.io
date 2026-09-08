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

  /* Publications: free-text search combined with the type filter. */
  var filter = document.querySelector('.pub-filter');
  var search = document.getElementById('pub-search');
  if (filter && search) {
    var pubs = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var years = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));
    var status = document.getElementById('pub-status');
    var empty = document.getElementById('pub-empty');
    var type = 'all';

    var apply = function () {
      var words = search.value.toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;
      pubs.forEach(function (li) {
        var hay = li.getAttribute('data-search') || '';
        var ok = (type === 'all' || li.getAttribute('data-type') === type) &&
          words.every(function (w) { return hay.indexOf(w) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
      });
      years.forEach(function (sec) {
        sec.hidden = !sec.querySelector('.pub:not([hidden])');
      });
      var filtering = words.length > 0 || type !== 'all';
      if (status) {
        status.hidden = !filtering;
        status.textContent = shown + ' of ' + pubs.length + ' publications' + (words.length ? ' match “' + search.value.trim() + '”' : '');
      }
      if (empty) empty.hidden = shown !== 0;
    };

    filter.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      type = btn.getAttribute('data-filter');
      filter.querySelectorAll('button').forEach(function (b) { b.classList.toggle('active', b === btn); });
      apply();
    });
    search.addEventListener('input', apply);
    search.addEventListener('keydown', function (e) { if (e.key === 'Escape') { search.value = ''; apply(); } });

    /* Allow linking to a search, e.g. /publication/?q=caging */
    var q = new URLSearchParams(window.location.search).get('q');
    if (q) { search.value = q; apply(); }
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
