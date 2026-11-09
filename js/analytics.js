/* =========================================================
   ЕДИНЫЙ ФАЙЛ АНАЛИТИКИ
   Замените G-XXXXXXXXXX и XXXXXXXX на свои ID.
   ========================================================= */

/* ---------- 1. Google Analytics 4 (gtag.js) ---------- */
(function () {
  var GA_ID = 'G-XXXXXXXXXX'; // <-- ВАШ ID GA4

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();

/* ---------- 2. Яндекс.Метрика ---------- */
(function () {
  var YM_ID = XXXXXXXX; // <-- ВАШ номер счётчика (число!)
  window.YM_COUNTER_ID = YM_ID;

  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) { return; }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0],
    k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

  ym(YM_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });
})();

/* ---------- 3. Нетскрипт-пиксель Метрики ---------- */
(function () {
  var YM_ID = XXXXXXXX; // <-- ВАШ номер счётчика
  var noScript = document.createElement('noscript');
  var div = document.createElement('div');
  var img = document.createElement('img');
  img.src = 'https://mc.yandex.ru/watch/' + YM_ID;
  img.style.position = 'absolute';
  img.style.left = '-9999px';
  img.alt = '';
  div.appendChild(img);
  noScript.appendChild(div);
  document.body.appendChild(noScript);
})();