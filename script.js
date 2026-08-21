(function () {
  // Mobile menu
  var btn = document.querySelector('.navtoggle');
  var links = document.getElementById('navlinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? 'Close' : 'Menu';
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }

  // Hold the electrons still for anyone who's asked for reduced motion
  var svg = document.getElementById('orbit-svg');
  if (svg && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (typeof svg.pauseAnimations === 'function') svg.pauseAnimations();
  }
})();
