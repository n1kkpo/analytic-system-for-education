/* =========================================================
   ПСЕВДО-КОНВЕРСИИ
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Кнопка «Регистрация» на главной ---------- */
  var registerBtn = document.getElementById('registerBtn');
  if (registerBtn) {
    registerBtn.addEventListener('click', function () {
      // GA4
      if (typeof gtag === 'function') {
        gtag('event', 'sign_up', { method: 'button' });
      }
      // Метрика
      if (typeof ym === 'function' && typeof YM_COUNTER_ID !== 'undefined') {
        ym(YM_COUNTER_ID, 'reachGoal', 'sign_up');
      }
      // Обратная связь пользователю
      var msg = document.getElementById('registerMsg');
      if (msg) {
        msg.textContent = '✅ Регистрация выполнена (псевдо-конверсия).';
      }
      console.log('[analytics] sign_up sent');
    });
  }

  /* ---------- Форма обратной связи на contacts.html ---------- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // GA4
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { form: 'contact' });
      }
      // Метрика
      if (typeof ym === 'function' && typeof YM_COUNTER_ID !== 'undefined') {
        ym(YM_COUNTER_ID, 'reachGoal', 'form_submit');
      }

      var formMsg = document.getElementById('formMsg');
      if (formMsg) {
        formMsg.textContent = '✅ Сообщение отправлено (псевдо-конверсия).';
      }
      contactForm.reset();
      console.log('[analytics] generate_lead sent');
    });
  }

  /* ---------- Логирование UTM-меток (для проверки) ---------- */
  var params = new URLSearchParams(window.location.search);
  if (params.has('utm_source')) {
    console.log('[analytics] UTM:', {
      source: params.get('utm_source'),
      medium: params.get('utm_medium'),
      campaign: params.get('utm_campaign')
    });
  }
});