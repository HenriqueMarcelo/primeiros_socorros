const searchInput = document.querySelector('#busca');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.situation-card')];
const counter = document.querySelector('#contador');
const emptyState = document.querySelector('#sem-resultados');

let activeFilter = 'todos';

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function updateList() {
  const term = normalizeText(searchInput.value);
  let visibleCount = 0;

  cards.forEach((card) => {
    const categoryMatches = activeFilter === 'todos' || card.dataset.category === activeFilter;
    const searchableContent = normalizeText(`${card.dataset.search} ${card.textContent}`);
    const searchMatches = !term || searchableContent.includes(term);
    const isVisible = categoryMatches && searchMatches;

    card.classList.toggle('hidden', !isVisible);
    if (isVisible) visibleCount += 1;
  });

  counter.textContent = `${visibleCount} ${visibleCount === 1 ? 'situação' : 'situações'}`;
  emptyState.classList.toggle('hidden', visibleCount !== 0);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    updateList();
  });
});

searchInput.addEventListener('input', updateList);

filterButtons.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));
});
