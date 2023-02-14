if ('OTPCredential' in window) {
  window.addEventListener('DOMContentLoaded', (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    const ac = new AbortController();

    navigator.credentials
      .get({
        otp: { transport: ['sms'] },
        signal: ac.signal,
      })
      .then((otp) => {
        alert(otp.code);
        input.value = otp.code;
      })
      .catch((err) => {
        alert('Error');
      })
      .finally(() => {
        ac.abort();
      });
  });
}
