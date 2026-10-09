/* Undgår at et enkelt ord (eller en pil) står alene på sidste linje: binder de to sidste ord sammen med et hårdt mellemrum. */
(function () {
  var SEL = 'p, li, strong, h1, h2, h3, h4, summary, td, th, blockquote, label, .btn, .menubtn, .txt, .desc, .lede, .sub, .lab';
  function fix(el) {
    if (el.closest('script, style, svg, dialog, textarea, .track [aria-hidden]')) return;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n, last = null;
    while ((n = w.nextNode())) { if (n.nodeValue.trim()) last = n; }
    if (!last) return;
    var t = last.nodeValue, m = /^([\s\S]*\S)\s+(\S+)(\s*)$/.exec(t);
    var prev = /(\S+)$/.exec(m ? m[1] : ''); if (!m || m[2].length > 14 || m[1].length < 8 || (prev && prev[1].length + m[2].length > 18)) return;
    last.nodeValue = m[1] + ' ' + m[2] + m[3];
  }
  function run() { document.querySelectorAll(SEL).forEach(fix); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
