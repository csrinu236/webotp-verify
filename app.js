if ('OTPCredential' in window) {
  window.addEventListener('DOMContentLoaded', (e) => {
    console.log('hello');
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    const ac = new AbortController();
    const form = input.closest('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        ac.abort();
      });
    }
    navigator.credentials
      .get({
        otp: { transport: ['sms'] },
        signal: ac.signal,
      })
      .then((otp) => {
        input.value = otp.code;
        if (form) form.submit();
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally((err) => {
        alert(err.toString());
      });
  });
}
