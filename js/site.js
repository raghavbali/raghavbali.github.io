(() => {
  'use strict';
  const root = document.getElementById('personal-site');
  const site = root.querySelector('.site');
  const theme = root.querySelector('.theme-button');
  const menu = root.querySelector('.menu-button');
  const nav = root.querySelector('.site-nav');
  const tools = root.querySelector('.page-tools');
  const modes = ['auto', 'light', 'dark'];
  let appearance = document.documentElement.dataset.appearance || 'auto';
  function applyTheme() {
    document.documentElement.style.colorScheme = appearance === 'auto' ? 'light dark' : appearance;
    site.dataset.appearance = appearance;
    theme.querySelectorAll('[data-appearance-icon]').forEach(icon => { icon.hidden = icon.dataset.appearanceIcon !== appearance; });
    const current = appearance === 'auto' ? 'system' : appearance;
    const next = modes[(modes.indexOf(appearance) + 1) % modes.length];
    const description = `Appearance: ${current}. Switch to ${next === 'auto' ? 'system' : next} mode.`;
    theme.setAttribute('aria-label', description);
    theme.title = description;
  }
  applyTheme();
  theme.addEventListener('click', () => {
    appearance = modes[(modes.indexOf(appearance) + 1) % modes.length];
    try { localStorage.setItem('appearance', appearance); } catch (_) { /* Storage is optional. */ }
    applyTheme();
  });
  menu.addEventListener('click', () => menu.setAttribute('aria-expanded', String(nav.classList.toggle('is-open'))));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
    }
  });
  function updateTools() { tools.hidden = window.scrollY < 180; }
  window.addEventListener('scroll', updateTools, { passive: true });
  updateTools();
  root.querySelector('[data-back-to-top]').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    root.querySelector('.site-brand').focus({ preventScroll: true });
  });
  const category = root.querySelector('[data-crumb-filter="category"]');
  const tag = root.querySelector('[data-crumb-filter="tag"]');
  function filterNotes() {
    let count = 0;
    root.querySelectorAll('.crumb-entry').forEach(entry => {
      entry.hidden = !((category.value === 'all' || entry.dataset.crumbCategory === category.value) &&
        (tag.value === 'all' || entry.dataset.crumbTags.split('|').includes(tag.value)));
      if (!entry.hidden) count++;
    });
    root.querySelectorAll('.crumb-month').forEach(month => { month.hidden = !month.querySelector('.crumb-entry:not([hidden])'); });
    root.querySelector('.crumb-count').textContent = `${count} ${count === 1 ? 'note' : 'notes'}`;
    root.querySelector('.crumb-empty').hidden = count > 0;
  }
  if (category && tag) { category.addEventListener('change', filterNotes); tag.addEventListener('change', filterNotes); filterNotes(); }
  // Elsewhere links land on a useful focus target for keyboard navigation.
  if (location.hash === '#elsewhere') root.querySelector('#elsewhere a')?.focus({ preventScroll: true });
})();
