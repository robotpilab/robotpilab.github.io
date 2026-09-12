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

  /* Publications: free-text search, type filter and research-direction filter. */
  var filter = document.querySelector('.pub-filter');
  var search = document.getElementById('pub-search');
  if (filter && search) {
    var pubs = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var years = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));
    var status = document.getElementById('pub-status');
    var empty = document.getElementById('pub-empty');
    var type = 'all';
    var dir = '';
    var dirNames = {};
    try { dirNames = JSON.parse(document.querySelector('.pubs').getAttribute('data-directions') || '{}'); } catch (e) {}

    var inDir = function (li) {
      if (!dir) return true;
      return (' ' + (li.getAttribute('data-dir') || '') + ' ').indexOf(' ' + dir + ' ') !== -1;
    };

    var apply = function () {
      var words = search.value.toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;
      pubs.forEach(function (li) {
        var hay = li.getAttribute('data-search') || '';
        var ok = (type === 'all' || li.getAttribute('data-type') === type) && inDir(li) &&
          words.every(function (w) { return hay.indexOf(w) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
      });
      years.forEach(function (sec) {
        sec.hidden = !sec.querySelector('.pub:not([hidden])');
      });
      if (status) {
        status.hidden = !(words.length || type !== 'all' || dir);
        status.textContent = shown + ' of ' + pubs.length + ' publications' +
          (dir && dirNames[dir] ? ' in ' + dirNames[dir] : '') +
          (words.length ? ' match “' + search.value.trim() + '”' : '');
        if (dir) {
          var clear = document.createElement('button');
          clear.type = 'button';
          clear.className = 'pub-clear';
          clear.textContent = 'Show all';
          clear.addEventListener('click', function () {
            dir = '';
            history.replaceState(null, '', window.location.pathname);
            apply();
          });
          status.appendChild(document.createTextNode(' '));
          status.appendChild(clear);
        }
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

    /* Deep links: /publication/?q=caging and /publication/?d=active-perception */
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    dir = params.get('d') || '';
    if (q) search.value = q;
    if (q || dir) apply();
  }

  /* Research directions: horizontal reel with arrow buttons. */
  var reel = document.querySelector('.reel');
  var reelNav = document.querySelector('.reel-nav');
  if (reel && reelNav) {
    var card = reel.querySelector('.rcard');
    var update = function () {
      var max = reel.scrollWidth - reel.clientWidth - 2;
      reelNav.hidden = max <= 0;
      reelNav.querySelector('[data-step="-1"]').disabled = reel.scrollLeft <= 2;
      reelNav.querySelector('[data-step="1"]').disabled = reel.scrollLeft >= max;
    };
    reelNav.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-step]');
      if (!btn || !card) return;
      var step = card.offsetWidth + 20;
      reel.scrollBy({ left: step * parseInt(btn.getAttribute('data-step'), 10), behavior: 'smooth' });
    });
    reel.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
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
