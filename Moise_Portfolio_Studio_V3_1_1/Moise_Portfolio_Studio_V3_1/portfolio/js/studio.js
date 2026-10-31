/* Shared, dependency-free presentation behavior. All content remains usable without JS. */
(() => {
  document.querySelectorAll('.gallery-arrows,.gallery-dots,.chapter-nav,.work-filters,.copy-email').forEach(element => element.hidden = false);
  const fr = document.documentElement.lang === 'fr';
  const homeData = document.querySelector('#home-data');
  if (homeData) {
    const projects = JSON.parse(homeData.textContent);
    let current = 0;
    const image = document.querySelector('[data-home-image]');
    const base = fr ? '../' : '';
    function show(index) {
      current = (index + projects.length) % projects.length;
      const project = projects[current];
      image.src = base + 'images/projects/' + project.asset;
      image.alt = project.title;
      document.querySelectorAll('[data-home-link]').forEach(link => link.href = 'projects/project-' + project.id + '.html');
      document.querySelector('[data-home-title]').textContent = project.title;
      document.querySelector('[data-home-category]').textContent = project.tags.slice(0, 2).join(' / ');
      document.querySelector('[data-home-count]').textContent = String(current + 1).padStart(2, '0') + ' / 05';
      document.querySelectorAll('[data-home-slide]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.homeSlide) === current)));
    }
    document.querySelectorAll('[data-home-slide]').forEach(button => button.addEventListener('click', () => show(Number(button.dataset.homeSlide))));
    document.querySelectorAll('[data-home-direction]').forEach(button => button.addEventListener('click', () => show(current + Number(button.dataset.homeDirection))));
  }
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  if (chapters.length) {
    function choose(button) {
      chapters.forEach(item => {
        const selected = item === button;
        item.setAttribute('aria-expanded', String(selected));
        document.getElementById(item.dataset.chapter).hidden = !selected;
      });
    }
    chapters.forEach(button => button.addEventListener('click', () => choose(button)));
    choose(chapters[0]);
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-category]').forEach(row => row.hidden = button.dataset.filter !== 'all' && row.dataset.category !== button.dataset.filter);
  }));
  const copy = document.querySelector('[data-copy-email]');
  copy?.addEventListener('click', async () => {
    const email = 'mugishamoise808@gmail.com';
    let success = false;
    try { await navigator.clipboard.writeText(email); success = true; } catch (error) {
      // Supports local HTTP/file previews where the Clipboard API is unavailable.
      const field = document.createElement('textarea');
      field.value = email; field.style.position = 'fixed'; field.style.opacity = '0';
      document.body.append(field); field.select();
      try { success = document.execCommand('copy'); } catch (error) {}
      field.remove(); copy.focus();
    }
    document.querySelector('.copy-message').textContent = success ? copy.dataset.success : copy.dataset.failure;
  });
})();
