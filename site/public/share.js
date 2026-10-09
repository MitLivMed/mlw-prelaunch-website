/* Del med en, du holder af. Ingen sporing, ingen lagring: intet om afsender eller modtager forlader browseren. */
(function () {
  var ORIGIN = location.origin, A = 'mitlivmed_assets/', uid = 0;
  var TARGETS = {
    forside: { label: 'Forsiden', title: 'Hvad sker der efter diagnosen?', desc: 'Fællesskab for mennesker med bipolar', img: A + 'lasse-bjerg.jpg', path: '/til-dig' },
    grupper: { label: 'Trivselsgrupper', title: 'Trivselsgrupper', desc: 'Grupper for mennesker med bipolar', img: A + 'lasse-skov.jpg', path: '/trivselsgrupper.html?fra=del' }
  };
  var TONES = [
    { id: 'blid', label: 'Blid', text: 'Hej. Jeg faldt over MitLivMed, hvor mennesker med bipolar deler deres egne erfaringer. Jeg kom til at tænke på dig. Du skal ikke gøre noget med det, jeg ville bare dele det.' },
    { id: 'kort', label: 'Kort', text: 'Tænkte på dig, da jeg så det her.' },
    { id: 'personlig', label: 'Fra mig', text: 'Jeg prøver at forstå, hvordan det er for dig. Jeg faldt over det her, og måske kan du bruge det. Ingen forventninger, og vi behøver ikke tale om det.' }
  ];
  var ICON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v13"/><path d="M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>';
  var coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function resolve(t) {
    if (typeof t === 'object' && t) return t;
    return TARGETS[t] || TARGETS.forside;
  }
  function Panel(root, opts) {
    var id = 'mlm' + (++uid), st = { target: resolve(opts.target), tone: 'blid', text: '', custom: null, extra: opts.extra || null };
    st.text = TONES[0].text;
    var chips = [TARGETS.forside, TARGETS.grupper];
    if (st.extra) chips.push(st.extra);
    if (st.target !== TARGETS.forside && st.target !== TARGETS.grupper && !st.extra) { st.extra = st.target; chips.push(st.extra); }
    function url() { return ORIGIN + st.target.path; }
    function full() { return st.text + '\n' + url(); }
    function shown() { return location.host + st.target.path; }
    function render() {
      var h = '<div class="mlm-panel">';
      h += '<div><span class="mlm-label" id="' + id + 'l1">Hvad vil du dele?</span><div class="mlm-chips" role="group" aria-labelledby="' + id + 'l1">';
      chips.forEach(function (c, i) { h += '<button type="button" class="mlm-chip" data-i="' + i + '" aria-pressed="' + (c === st.target) + '">' + esc(c.label || c.title) + '</button>'; });
      h += '</div></div>';
      h += '<div><span class="mlm-label" id="' + id + 'l2">Din besked <span class="mlm-hint">Du kan rette i den</span></span><div class="mlm-tones" role="group" aria-labelledby="' + id + 'l2">';
      TONES.forEach(function (t) { h += '<button type="button" class="mlm-tone" data-t="' + t.id + '" aria-pressed="' + (t.id === st.tone) + '">' + t.label + '</button>'; });
      h += '</div><label class="mlm-label" for="' + id + 't" style="position:absolute;left:-9999px;">Din besked</label><textarea class="mlm-text" id="' + id + 't" rows="4" style="margin-top:8px;">' + esc(st.text) + '</textarea></div>';
      h += '<div class="mlm-prev"><img src="' + esc(st.target.img) + '" alt=""><div><strong>' + esc(st.target.title) + '</strong><span>' + esc(st.target.desc) + '</span><span>' + esc(shown()) + '</span></div></div>';
      h += '<div class="mlm-acts">';
      var nat = !!navigator.share;
      h += nat ? '<button type="button" class="mlm-b pri" data-a="native">' + ICON + 'Del</button>' : '<button type="button" class="mlm-b pri" data-a="copy">Kopiér link</button>';
      h += '<div class="mlm-btns">';
      if (coarse) h += '<button type="button" class="mlm-b" data-a="sms">SMS</button>';
      h += '<button type="button" class="mlm-b" data-a="wa">WhatsApp</button><button type="button" class="mlm-b" data-a="mail">Mail</button>';
      if (nat) h += '<button type="button" class="mlm-b" data-a="copy">Kopiér</button>';
      h += '</div></div>';
      h += '<p class="mlm-note">Linket indeholder ikke dit navn. Vi gemmer ikke, hvem du deler med.</p><p class="mlm-stat" role="status" aria-live="polite"></p></div>';
      root.innerHTML = h;
      bind();
    }
    function stat(m) { var s = root.querySelector('.mlm-stat'); if (s) s.textContent = m; }
    function thanks() {
      root.innerHTML = '<div class="mlm-thanks"><img src="' + A + 'group-trio.svg" alt=""><h3 tabindex="-1">Tak, fordi du <em>delte det</em></h3><p style="margin:0">Det er ikke sikkert, de svarer med det samme. Det er helt okay. Linket virker, når de er klar.</p><div class="mlm-you"><strong>Og hvad med dig?</strong><p style="margin:0 0 8px">Det kan også være hårdt at stå ved siden af. Der findes gratis rådgivning til pårørende.</p><a href="hjaelp.html#paaroerende" target="_blank" rel="noopener">Find gratis rådgivning →</a></div><div class="mlm-btns">' + (opts.onClose ? '<button type="button" class="mlm-b" data-a="close">Luk</button>' : '') + '<button type="button" class="mlm-b" data-a="again">Del igen</button></div></div>';
      root.querySelector('h3').focus({ preventScroll: true });
      root.querySelectorAll('[data-a]').forEach(function (b) {
        b.addEventListener('click', function () { if (b.dataset.a === 'close') opts.onClose(); else render(); });
      });
    }
    function bind() {
      root.querySelectorAll('.mlm-chip').forEach(function (b) { b.addEventListener('click', function () { st.target = chips[+b.dataset.i]; render(); root.querySelector('.mlm-chip[aria-pressed="true"]').focus(); }); });
      root.querySelectorAll('.mlm-tone').forEach(function (b) { b.addEventListener('click', function () { st.tone = b.dataset.t; st.text = TONES.filter(function (t) { return t.id === st.tone; })[0].text; render(); root.querySelector('.mlm-tone[aria-pressed="true"]').focus(); }); });
      root.querySelector('.mlm-text').addEventListener('input', function (e) { st.text = e.target.value; });
      root.querySelectorAll('[data-a]').forEach(function (b) { b.addEventListener('click', function () { act(b.dataset.a); }); });
    }
    function act(a) {
      var enc = encodeURIComponent;
      if (a === 'native') { navigator.share({ title: st.target.title, text: st.text, url: url() }).then(thanks, function (e) { if (e && e.name !== 'AbortError') stat('Kunne ikke åbne deling. Brug Kopiér i stedet.'); }); }
      else if (a === 'sms') { location.href = 'sms:?&body=' + enc(full()); setTimeout(thanks, 400); }
      else if (a === 'wa') { window.open('https://wa.me/?text=' + enc(full()), '_blank', 'noopener'); thanks(); }
      else if (a === 'mail') { location.href = 'mailto:?subject=' + enc('Jeg tænkte på dig') + '&body=' + enc(full()); setTimeout(thanks, 400); }
      else if (a === 'copy') {
        var ok = function () { stat('Linket og beskeden er kopieret. Du kan sætte dem ind i en besked.'); };
        var legacy = function () { var t = document.createElement('textarea'); t.value = full(); t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;opacity:0;'; document.body.appendChild(t); t.select(); try { document.execCommand('copy') ? ok() : stat('Kunne ikke kopiere. Markér linket selv: ' + url()); } catch (e) { stat('Kunne ikke kopiere. Markér linket selv: ' + url()); } t.remove(); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(full()).then(ok, legacy); else legacy();
      }
    }
    render();
    return { copy: function () { act('copy'); } };
  }

  /* Delearket (dialog) */
  var dlg;
  function openSheet(t, extra) {
    if (!dlg) {
      dlg = document.createElement('dialog'); dlg.className = 'mlm-sheet'; dlg.setAttribute('aria-labelledby', 'mlmH');
      dlg.innerHTML = '<div class="in"><div class="hd"><h2 id="mlmH">Send det videre</h2><button type="button" class="mlm-x" aria-label="Luk">×</button></div><div id="mlmBody"></div></div>';
      document.body.appendChild(dlg);
      dlg.querySelector('.mlm-x').addEventListener('click', function () { dlg.close(); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('close', function () { if (dlg._from && dlg._from.focus) dlg._from.focus(); });
    }
    dlg._from = document.activeElement;
    Panel(dlg.querySelector('#mlmBody'), { target: t, extra: extra, onClose: function () { dlg.close(); } });
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  window.MLMShare = { open: openSheet };

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-share]'); if (!b) return;
    var v = b.getAttribute('data-share'), extra = null, t = v;
    if (v === 'interview') { extra = { label: b.dataset.title, title: b.dataset.title, desc: 'Interview på MitLivMed', img: b.dataset.img, path: '/til-dig' }; t = extra; }
    e.preventDefault();
    openSheet(t, extra);
  });

  /* Inline-modul på desktop */
  var mount = document.getElementById('shareMount');
  if (mount) { Panel(mount, { target: 'forside' }); }
  var quick = document.getElementById('shareQuick');
  if (quick) quick.addEventListener('click', function () {
    var msg = TONES[0].text + '\n' + ORIGIN + TARGETS.forside.path, st = document.getElementById('shareQuickStat');
    function ok() { st.textContent = 'Linket og beskeden er kopieret.'; }
    function fail() { st.textContent = 'Kunne ikke kopiere. Brug Del MitLivMed i stedet.'; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(msg).then(ok, fail); else fail();
  });

  /* Modtagerens rolige linje */
  if (location.pathname === '/til-dig' || /[?&]fra=del\b/.test(location.search)) {
    var p = document.createElement('p'); p.className = 'mlm-from'; p.setAttribute('role', 'note'); p.textContent = 'En, der holder af dig, har sendt dig det her.';
    document.body.insertBefore(p, document.body.firstChild);
  }
})();
