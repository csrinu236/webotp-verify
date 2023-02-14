if ('OTPCredential' in window) {
  window.addEventListener('DOMContentLoaded', (e) => {
    console.log('hello1');
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    console.log('hello2');

    const ac = new AbortController();
    const form = input.closest('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        console.log('hello3');

        ac.abort();
      });
    }
    navigator.credentials
      .get({
        otp: { transport: ['sms'] },
        signal: ac.signal,
      })
      .then((otp) => {
        console.log('hello4');

        input.value = otp.code;
        if (form) form.submit();
      })
      .catch((err) => {
        console.log('hello5');

        alert(err.toString());
      })
      .finally((err) => {
        console.log('hello6');
        alert(err.toString());
      });
    console.log('hello7');
  });
}
