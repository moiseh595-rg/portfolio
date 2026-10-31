/* One language policy. Deep links retain their explicit language. */
(function () {
  var key = 'portfolio-language', preferred = null;
  try {
    preferred = localStorage.getItem(key) || localStorage.getItem('moise-lang');
    if (preferred === 'en' || preferred === 'fr') localStorage.setItem(key, preferred);
    localStorage.removeItem('moise-lang');
  } catch (error) {}
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-lang]');
    if (!link) return;
    try { localStorage.setItem(key, link.dataset.lang); } catch (error) {}
  });
  var french = document.documentElement.lang === 'fr';
  // Only the English entry point auto-selects; explicit French/deep URLs remain stable.
  if (french || !/\/(index\.html)?$/.test(location.pathname)) return;
  var first = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  var wanted = preferred === 'en' || preferred === 'fr' ? preferred : (/^fr(?:-|$)/i.test(first) ? 'fr' : 'en');
  if (wanted !== 'fr') return;
  function redirect() {
    var link = document.querySelector('a[data-lang="fr"]');
    if (!link) return;
    var target = new URL(link.href, location.href);
    target.search = location.search; target.hash = location.hash;
    if (target.href !== location.href) location.replace(target.href);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', redirect);
  else redirect();
})();
