/* Language: first visit follows the browser language; the EN/FR switch is remembered. */
(function () {
    var K = 'moise-lang', se, sf, pref = null; try { pref = localStorage.getItem(K) } catch (e) { }
    document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('a[data-lang]'); if (a) { try { localStorage.setItem(K, a.dataset.lang) } catch (e) { } } });
    var on = location.pathname.indexOf('/fr/') > -1; var home = /\/(fr\/)?(index\.html)?$/.test(location.pathname); var want = pref || (!home ? (on ? 'fr' : 'en') : ((navigator.languages && navigator.languages[0] || navigator.language || 'en').slice(0, 2) === 'fr' ? 'fr' : 'en'));
    if (want === (on ? 'fr' : 'en')) return;
    function go() { var t = document.querySelector('a[data-lang="' + want + '"]'); if (t && t.getAttribute('href')) location.replace(t.href) }
    if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go)
})();
