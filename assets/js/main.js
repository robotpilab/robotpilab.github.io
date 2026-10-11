(function () {
  "use strict";

  var SITE = window.LAB_SITE || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var NAV = [
    { label: "Home", href: "index.html" },
    { label: "Publications", href: "publications.html" },
    { label: "People", href: "people.html" },
    { label: "Join Us", href: "join.html" }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function ext(url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""; }
  function labEmail() { return (SITE.email || []).join("@"); }

  function brand() {
    return '<a class="brand" href="index.html"><span class="brand-name">' + esc(SITE.name).replace("Π", '<span class="brand-pi">Π</span>') +
      '</span><span class="brand-uni">' + esc(SITE.university) + "</span></a>";
  }

  // ---------- Header and footer (shared by every page) ----------

  function renderChrome() {
    var page = location.pathname.split("/").pop() || "index.html";
    var header = $("site-header");
    if (header) {
      header.innerHTML = '<div class="wrap">' + brand() +
        '<button class="nav-toggle" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '<nav class="nav" aria-label="Primary">' + NAV.map(function (n) {
          return '<a href="' + n.href + '"' + (n.href === page ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
        }).join("") + "</nav></div>";

      var toggle = header.querySelector(".nav-toggle");
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open);
        syncHeader();
      });
    }

    var footer = $("site-footer");
    if (footer) {
      var mail = labEmail();
      footer.innerHTML = '<div class="wrap"><div>' + brand() +
        "<p>" + esc(SITE.fullName) + ", " + esc(SITE.department) + ", " + esc(SITE.university) + ".</p></div>" +
        "<div><h2>Contact</h2><ul>" +
        '<li><a href="mailto:' + esc(mail) + '">' + esc(mail) + "</a></li>" +
        (SITE.address || []).map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") +
        "</ul></div><div><h2>Links</h2><ul>" +
        (SITE.links || []).map(function (l) { return '<li><a href="' + esc(l.url) + '"' + ext(l.url) + ">" + esc(l.label) + "</a></li>"; }).join("") +
        "</ul></div></div>" +
        '<div class="footer-base"><div class="wrap">© ' + new Date().getFullYear() + " " + esc(SITE.name) + ", " + esc(SITE.university) + "</div></div>";
    }
  }

  // The header is transparent while the hero video is behind it.
  function syncHeader() {
    var header = $("site-header"), hero = document.querySelector(".hero");
    if (!header || !hero) return;
    var overHero = window.scrollY < hero.offsetHeight - header.offsetHeight - 8;
    header.classList.toggle("is-clear", overHero && !header.classList.contains("nav-open"));
  }

  // ---------- Hero video ----------

  function initHero() {
    var video = document.querySelector(".hero-video"), btn = document.querySelector(".hero-toggle");
    if (!video || !btn) return;
    function sync() {
      btn.classList.toggle("is-paused", video.paused);
      btn.setAttribute("aria-label", video.paused ? "Play background video" : "Pause background video");
    }
    btn.addEventListener("click", function () { video.paused ? video.play() : video.pause(); });
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    if (reduceMotion) video.pause();
    else { var p = video.play(); if (p && p.catch) p.catch(sync); }
    sync();

    // Corner inset: visible only while the main video is between its data-from and data-to.
    var inset = document.querySelector(".hero-inset");
    if (!inset) return;
    var from = Number(inset.getAttribute("data-from")), to = Number(inset.getAttribute("data-to"));
    function syncInset() {
      var on = video.currentTime >= from && video.currentTime < to;
      if (!on && inset.classList.contains("is-on")) inset.currentTime = 0;
      inset.classList.toggle("is-on", on);
      if (on && !video.paused) { var q = inset.play(); if (q && q.catch) q.catch(function () {}); }
      else inset.pause();
    }
    ["timeupdate", "play", "pause", "seeked"].forEach(function (name) { video.addEventListener(name, syncInset); });
  }

  // ---------- Rolling rows ----------
  // A horizontally scrollable row that drifts on its own and loops seamlessly once it is on screen.
  // It pauses under the pointer, and can still be scrolled, swiped or stepped with the arrows.

  function initRoller(el, speed, minCard) {
    var track = el.querySelector(".roller-track");
    var originals = Array.prototype.slice.call(track.children);
    if (!originals.length) return;
    var section = el.closest("section");
    var setWidth = 0, pos = 0, last = 0, hover = false, holdUntil = 0;

    // With only a few cards there is nothing to roll: if they all fit, show them as a fixed row.
    var style = getComputedStyle(el);
    var room = el.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    if (originals.length * minCard + (originals.length - 1) * 16 <= room) {
      el.classList.add("is-static");
      track.style.gridTemplateColumns = "repeat(" + Math.max(originals.length, 3) + ", minmax(0, 1fr))";
      var controls = section && section.querySelector(".roller-controls");
      if (controls) controls.hidden = true;
      return;
    }

    if (!reduceMotion) {
      var addCopy = function () {
        originals.forEach(function (node) {
          var copy = node.cloneNode(true);
          copy.setAttribute("aria-hidden", "true");
          if (copy.tagName === "A") copy.tabIndex = -1;
          Array.prototype.forEach.call(copy.querySelectorAll("a"), function (a) { a.tabIndex = -1; });
          track.appendChild(copy);
        });
      };
      addCopy();
      setWidth = track.children[originals.length].offsetLeft - track.children[0].offsetLeft;
      // Enough copies that the row never runs out on a very wide screen.
      var copies = 1 + Math.ceil(Math.max(el.clientWidth, window.screen.width) / setWidth);
      for (var i = 2; i < copies; i++) addCopy();

      el.addEventListener("mouseenter", function () { hover = true; });
      el.addEventListener("mouseleave", function () { hover = false; });
      el.addEventListener("focusin", function () { hover = true; });
      el.addEventListener("focusout", function () { hover = false; });
      el.addEventListener("touchstart", function () { holdUntil = Infinity; }, { passive: true });
      el.addEventListener("touchend", function () { holdUntil = performance.now() + 2500; }, { passive: true });
      el.addEventListener("wheel", function () { holdUntil = performance.now() + 1500; }, { passive: true });

      // Roll only while the row is on screen: it starts from the first card the moment it scrolls into view.
      var inView = !("IntersectionObserver" in window);
      if (!inView) {
        new IntersectionObserver(function (entries) { inView = entries[0].isIntersecting; }).observe(el);
      }

      requestAnimationFrame(function tick(now) {
        var dt = Math.min(now - last, 50);
        last = now;
        if (inView && !hover && now > holdUntil && !document.hidden) {
          if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;
          pos += speed * dt / 1000;
          if (pos >= setWidth) pos -= setWidth;
          el.scrollLeft = pos;
        }
        requestAnimationFrame(tick);
      });
    }

    Array.prototype.forEach.call(section ? section.querySelectorAll("[data-roll]") : [], function (btn) {
      btn.addEventListener("click", function () {
        var dir = Number(btn.getAttribute("data-roll"));
        var step = originals[0].offsetWidth + 16;
        holdUntil = performance.now() + 1400;
        if (setWidth && dir < 0 && el.scrollLeft < step) el.scrollLeft += setWidth;
        el.scrollBy({ left: dir * step, behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  // Videos in a row only play while they are on screen.
  function playWhenVisible(root) {
    var videos = root.querySelectorAll("video");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(videos, function (v) { v.controls = true; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { var p = e.target.play(); if (p && p.catch) p.catch(function () {}); }
        else e.target.pause();
      });
    }, { threshold: 0.35 });
    Array.prototype.forEach.call(videos, function (v) { io.observe(v); });
  }

  // ---------- Home ----------

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function formatDate(iso) {
    var p = iso.split("-");
    return MONTHS[Number(p[1]) - 1] + " " + Number(p[2]) + ", " + p[0];
  }

  function renderHighlights() {
    var el = $("recent-work");
    if (!el) return;
    el.querySelector(".roller-track").innerHTML = (window.LAB_HIGHLIGHTS || []).map(function (h) {
      var tag = h.url ? "a" : "div";
      return "<" + tag + ' class="highlight"' + (h.url ? ' href="' + esc(h.url) + '"' + ext(h.url) : "") + ">" +
        '<video muted loop playsinline preload="none" poster="' + esc(h.poster) + '" src="' + esc(h.video) + '" aria-label="' + esc(h.title) + '"></video>' +
        '<div class="highlight-body"><span class="highlight-venue">' + esc(h.venue) + "</span><h3>" + esc(h.title) + "</h3></div></" + tag + ">";
    }).join("");
    initRoller(el, 34, 300);
    playWhenVisible(el);
  }

  var NEWS_SHOWN = 6; // items visible before "Show all"

  // Escapes text and turns any web address in it into a link.
  function linkify(text) {
    return esc(text).replace(/https?:\/\/[^\s<]*[^\s<.,;:)]/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + "</a>";
    });
  }

  function renderNews() {
    var el = $("news");
    if (!el) return;
    var news = window.LAB_NEWS || [];
    el.innerHTML = news.map(function (n, i) {
      var title = n.url ? '<a href="' + esc(n.url) + '"' + ext(n.url) + ">" + esc(n.title) + "</a>" : esc(n.title);
      var more = n.more && n.more.length
        ? '<div class="news-more" hidden>' + n.more.map(function (p) { return "<p>" + linkify(p) + "</p>"; }).join("") + "</div>" +
          '<button class="news-toggle" type="button" aria-expanded="false">Read more</button>'
        : "";
      return "<li" + (i >= NEWS_SHOWN ? " hidden" : "") + '><time datetime="' + esc(n.date) + '">' + formatDate(n.date) + "</time>" +
        (n.image ? '<img src="' + esc(n.image) + '" alt="" loading="lazy">' : "<span></span>") +
        "<div><h3>" + title + "</h3>" + (n.text ? "<p>" + esc(n.text) + "</p>" : "") + more +
        (n.linkLabel && n.url ? '<a class="news-link" href="' + esc(n.url) + '"' + ext(n.url) + ">" + esc(n.linkLabel) + "</a>" : "") + "</div></li>";
    }).join("");

    el.addEventListener("click", function (e) {
      var btn = e.target.closest(".news-toggle");
      if (!btn) return;
      var body = btn.previousElementSibling, open = body.hidden;
      body.hidden = !open;
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "Show less" : "Read more";
    });

    if (news.length <= NEWS_SHOWN) return;
    var all = document.createElement("button");
    all.type = "button";
    all.className = "btn btn-ghost news-all";
    all.setAttribute("aria-expanded", "false");
    all.textContent = "Show all " + news.length + " news items";
    all.addEventListener("click", function () {
      var expand = all.getAttribute("aria-expanded") !== "true";
      Array.prototype.forEach.call(el.children, function (li, i) { if (i >= NEWS_SHOWN) li.hidden = !expand; });
      all.setAttribute("aria-expanded", expand);
      all.textContent = expand ? "Show fewer" : "Show all " + news.length + " news items";
      if (!expand) el.closest("section").scrollIntoView({ block: "start" });
    });
    el.parentNode.insertBefore(all, el.nextSibling);
  }

  function renderAwards() {
    var el = $("awards");
    if (!el) return;
    el.querySelector(".roller-track").innerHTML = (window.LAB_AWARDS || []).map(function (a) {
      var tag = a.url ? "a" : "article";
      return "<" + tag + ' class="award"' + (a.url ? ' href="' + esc(a.url) + '"' + ext(a.url) + (a.paper ? ' title="' + esc(a.paper) + '"' : "") : "") + ">" +
        (a.image ? '<img src="' + esc(a.image) + '" alt="" loading="lazy">' : "") +
        '<div class="award-body"><span class="award-year">' + esc(a.year) + "</span><h3>" + esc(a.title) + "</h3><p>" + esc(a.detail) + "</p>" +
        (a.note ? '<span class="award-note">' + esc(a.note) + "</span>" : "") + "</div></" + tag + ">";
    }).join("");
    initRoller(el, 26, 250);
  }

  // ---------- Publications ----------

  var LINK_ORDER = ["Project", "PDF", "Arxiv", "DOI", "Source Document"];
  // Venue filter. Each paper goes in the first group whose pattern matches its venue; the rest are "Others".
  var VENUE_GROUPS = [
    ["Science Robotics", /Science Robotics/], ["T-RO", /\(T-?RO\)/], ["IJRR", /\(IJRR\)/], ["RSS", /\(RSS\)/],
    ["RA-L", /\(RA-?L\)/], ["ICRA", /\(ICRA\)/], ["IROS", /\(IROS\)/]
  ];
  function venueGroup(p) {
    if (p.type === "preprint" || /arxiv/i.test(p.venue)) return "Preprint";
    for (var i = 0; i < VENUE_GROUPS.length; i++) if (VENUE_GROUPS[i][1].test(p.venue)) return VENUE_GROUPS[i][0];
    return "Others";
  }

  function labMembers() {
    var p = window.LAB_PEOPLE || {}, names = {};
    [[p.pi], p.phd, p.visiting, p.alumni].forEach(function (group) {
      (group || []).forEach(function (m) { if (m) names[m.name] = true; });
    });
    return names;
  }

  function initPublications() {
    var list = $("pub-list");
    if (!list) return;
    var pubs = window.LAB_PUBLICATIONS || [];
    var members = labMembers();
    var search = $("pub-search"), count = $("pub-count"), chips = $("pub-chips"), yearSelect = $("pub-year");
    var venue = "All";

    var years = [];
    pubs.forEach(function (p) { if (years.indexOf(p.year) === -1) years.push(p.year); });
    years.sort(function (a, b) { return b - a; });
    yearSelect.innerHTML = '<option value="">All years</option>' + years.map(function (y) { return '<option value="' + y + '">' + y + "</option>"; }).join("");

    chips.innerHTML = ["All"].concat(VENUE_GROUPS.map(function (g) { return g[0]; }), ["Preprint", "Others"])
      .map(function (v) { return '<button class="chip" type="button" data-venue="' + v + '" aria-pressed="' + (v === venue) + '">' + v + "</button>"; }).join("");

    function primaryLink(p) {
      for (var i = 0; i < LINK_ORDER.length; i++) {
        for (var j = 0; j < p.links.length; j++) if (p.links[j].label === LINK_ORDER[i]) return p.links[j].url;
      }
      return p.links.length ? p.links[0].url : "";
    }

    function item(p) {
      var url = primaryLink(p);
      var title = url ? '<a href="' + esc(url) + '"' + ext(url) + ">" + esc(p.title) + "</a>" : esc(p.title);
      var authors = p.authors.map(function (a) { return members[a] ? "<b>" + esc(a) + "</b>" : esc(a); }).join(", ");
      var links = p.links.map(function (l) { return '<a href="' + esc(l.url) + '"' + ext(l.url) + ">" + esc(l.label) + "</a>"; }).join("");
      return '<li class="pub"><h3>' + title + '</h3><p class="pub-authors">' + authors + '</p><p class="pub-meta"><span class="pub-venue">' +
        esc(p.venue) + "</span>" + (links ? '<span class="pub-links">' + links + "</span>" : "") + "</p></li>";
    }

    function render() {
      var q = search.value.trim().toLowerCase();
      var shown = pubs.filter(function (p) {
        if (venue !== "All" && venueGroup(p) !== venue) return false;
        if (yearSelect.value && String(p.year) !== yearSelect.value) return false;
        return !q || (p.title + " " + p.authors.join(" ") + " " + p.venue + " " + p.year).toLowerCase().indexOf(q) !== -1;
      });
      var years = [], byYear = {};
      shown.forEach(function (p) {
        if (!byYear[p.year]) { byYear[p.year] = []; years.push(p.year); }
        byYear[p.year].push(p);
      });
      years.sort(function (a, b) { return b - a; });
      list.innerHTML = years.map(function (y) {
        return '<section class="pub-year"><h2>' + y + '</h2><ul class="pub-list">' + byYear[y].map(item).join("") + "</ul></section>";
      }).join("") || '<p class="pub-empty">No publications match your search.</p>';
      count.textContent = shown.length === pubs.length ? pubs.length + " publications" : shown.length + " of " + pubs.length + " publications";
    }

    search.addEventListener("input", render);
    yearSelect.addEventListener("change", render);
    chips.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      venue = btn.getAttribute("data-venue");
      Array.prototype.forEach.call(chips.children, function (c) { c.setAttribute("aria-pressed", c === btn); });
      render();
    });
    render();
  }

  // ---------- People ----------

  function personLinks(m) {
    var out = [];
    if (m.website) out.push('<a href="' + esc(m.website) + '"' + ext(m.website) + ">" + (/linkedin\.com/.test(m.website) ? "LinkedIn" : "Website") + "</a>");
    if (m.email) out.push('<a href="mailto:' + esc(m.email) + '">Email</a>');
    return out.length ? '<div class="person-links">' + out.join("") + "</div>" : "";
  }

  function personCard(m) {
    var role = m.role || m.was + (m.now ? " → " + m.now : "");
    return '<li class="person"><img src="' + esc(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy"><h3>' + esc(m.name) + "</h3><p>" + esc(role) + "</p>" + personLinks(m) + "</li>";
  }

  function renderPeople() {
    var p = window.LAB_PEOPLE;
    if (!p || !$("pi")) return;

    var pi = p.pi;
    $("pi").innerHTML = '<img src="' + esc(pi.photo) + '" alt="' + esc(pi.name) + '"><div><h3>' + esc(pi.name) + '</h3><p class="pi-role">' + esc(pi.role) + "</p>" +
      pi.bio.map(function (b) { return "<p>" + esc(b) + "</p>"; }).join("") +
      '<div class="pi-links">' + pi.links.map(function (l) { return '<a href="' + esc(l.url) + '"' + ext(l.url) + ">" + esc(l.label) + "</a>"; }).join("") + "</div></div>";

    $("phd").innerHTML = p.phd.map(personCard).join("");

    if (p.visiting && p.visiting.length) $("visiting").innerHTML = p.visiting.map(personCard).join("");
    else {
      // No visiting students: hide that section and keep the white / tinted bands alternating.
      $("visiting").closest("section").hidden = true;
      $("alumni").closest("section").classList.remove("section-tint");
    }

    $("alumni").innerHTML = p.alumni.map(personCard).join("");
  }

  // ---------- Boot ----------

  renderChrome();
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
  window.addEventListener("resize", syncHeader);

  Array.prototype.forEach.call(document.querySelectorAll("[data-lab-email]"), function (a) {
    a.href = "mailto:" + labEmail();
    a.textContent = labEmail();
  });

  initHero();
  renderHighlights();
  renderNews();
  renderAwards();
  initPublications();
  renderPeople();
})();
