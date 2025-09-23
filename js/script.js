let contador = 0;

function agregarAlCarrito() {
  contador++;
  document.getElementById('contador').textContent = contador;
}

// === Toggle de tema (claro/oscuro) ===
(function () {
  const STORAGE_KEY = 'theme';
  const btn = document.getElementById('theme-toggle');

  // Tema inicial: localStorage > prefers-color-scheme
  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  setTheme(initial);
  updateButton(initial);

  // Click del botón
  btn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
    updateButton(next);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function updateButton(theme) {
    if (!btn) return;
    const isLight = theme === 'light';
    btn.setAttribute('aria-pressed', String(isLight));
    btn.setAttribute('aria-label', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
    btn.textContent = isLight ? '☀️' : '🌙';
  }
})();
