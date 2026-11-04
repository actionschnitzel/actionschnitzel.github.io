/* Actionschnitzel Redesign: mobile Navigation und GOG-Filter */
(function () {
  'use strict';

  // Mobile Navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // GOG Suche und Filter
  var table = document.getElementById('gog-table');
  if (!table) return;
  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var input = document.getElementById('gog-search');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  var counter = document.getElementById('gog-count');
  var empty = document.getElementById('gog-empty');
  var total = rows.length;
  var filter = 'alle';

  rows.forEach(function (r) { r._text = r.textContent.toLowerCase(); });

  function apply() {
    var q = (input.value || '').trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (r) {
      var okFilter = filter === 'alle' || r.getAttribute('data-' + filter) === '1';
      var okQuery = !q || r._text.indexOf(q) !== -1;
      var vis = okFilter && okQuery;
      r.hidden = !vis;
      if (vis) shown++;
    });
    counter.textContent = shown + ' von ' + total + ' Spielen';
    empty.hidden = shown !== 0;
  }

  input.addEventListener('input', apply);
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      filter = c.getAttribute('data-filter');
      chips.forEach(function (o) { o.setAttribute('aria-pressed', o === c ? 'true' : 'false'); });
      apply();
    });
  });
  apply();
})();
