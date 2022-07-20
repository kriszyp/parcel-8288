import Firecracker from 'firecracker.js/dist/index';

const $ = Firecracker.DQuery,
  listen = Firecracker.Delegate,
  svgs = $('#mobile-menu-button svg');

$(document.body).on('click', (e) => {
  // Mobile menu
  listen('#mobile-menu-button', () => {
    // Change icon
    svgs.forEach((el) => {
      el.toggle('hidden');
      el.toggle('block');
    });

    // Show menu
    $('#mobile-menu')[0].toggle('hidden');
  })(e);

  // Chapter toggle
  listen('#chapter-toggle', () => {
    document.querySelectorAll('details').forEach((a) => {
      a.open = !a.open;
    });
  })(e);
});