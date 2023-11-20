const form = document.getElementById('myForm');
const closeButton = document.getElementById("closeButton");
const popup = document.getElementById("popup");
const register = document.getElementById("authentication-modal");
const body = document.body;

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Perhatikan pemanggilan yang benar
    register.classList.add('hidden');
    popup.classList.remove('hide');
});

// closeButton.addEventListener('click', function() {
//   const backdrop = document.querySelector('[modal-backdrop=""]');
//   if (backdrop) {
//     // backdrop.classList.add('hide');
//     backdrop.remove();
//   }
//   popup.classList.add('hide');
//   document.body.classList.remove('overflow-hidden');
//   register.setAttribute('aria-hidden', 'true');
//   register.removeAttribute('role', 'dialog');
//   register.removeAttribute('aria-modal', 'true');
//   register.classList.remove('flex');
// });



closeButton.addEventListener('click', function () {
    // Ganti 'backdrop' dengan ID backdrop yang sesuai
    popup.classList.add('hide');
    document.body.classList.remove('overflow-hidden');
    register.setAttribute('aria-hidden', 'true');
    register.removeAttribute('role', 'dialog');
    register.removeAttribute('aria-modal', 'true');
    register.classList.remove('flex');

});