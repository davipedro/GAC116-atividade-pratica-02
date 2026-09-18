(() => {
  const storageKey = 'davi-portfolio-theme';
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const label = document.querySelector('[data-theme-label]');

  let savedTheme = null;
  try { savedTheme = localStorage.getItem(storageKey); } catch (_) {}
  const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';

  function applyTheme(theme, save = false) {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    if (button) {
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', `Alternar tema. Tema atual: ${isDark ? 'escuro' : 'claro'}.`);
    }
    if (label) label.textContent = isDark ? 'Escuro' : 'Claro';
    if (save) {
      try { localStorage.setItem(storageKey, theme); } catch (_) {}
    }
  }

  applyTheme(initialTheme);
  button?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });
})();

