(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (!toggle || !menu) return;
  var close = menu.querySelector('.menu-close');
  function setOpen(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open) { close.focus(); } else { toggle.focus(); }
  }
  toggle.addEventListener('click', function () { setOpen(true); });
  close.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) setOpen(false);
  });
})();
