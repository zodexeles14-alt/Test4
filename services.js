// ===== DATA =====
const services = [
  {
    title: 'Website Design',
    category: 'frontend',
    description: 'Custom-built marketing and product sites, designed to convert visitors and reflect your brand.',
  },
  {
    title: 'App Development',
    category: 'frontend',
    description: 'Responsive, fast web apps built with modern frontend frameworks.',
  },
  {
    title: 'UI/UX Design',
    category: 'design',
    description: 'Interface and experience design grounded in real user research, not guesswork.',
  },
  {
    title: 'Backend Systems',
    category: 'backend',
    description: 'APIs, databases, and infrastructure built to scale with your product.',
  },
  {
    title: 'Animations & Transitions',
    category: 'frontend',
    description: 'Purposeful motion design that guides attention without slowing the page down.',
  },
  {
    title: 'Software Engineering',
    category: 'backend',
    description: 'General engineering support — architecture, code review, and long-term maintenance.',
  },
];

// ===== RENDER =====
function renderServices(filter) {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  services
    .filter((service) => filter === 'all' || service.category === filter)
    .forEach((service) => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <span class="service-tag">${service.category}</span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      grid.appendChild(card);
    });
}

// ===== FILTER HANDLING =====
function filterServices(category, buttonEl) {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.remove('active');
  });
  buttonEl.classList.add('active');
  renderServices(category);
}

// ===== CTA HANDLING =====
function handleStartProject() {
  const cta = document.querySelector('.cta-box');
  if (cta) {
    cta.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderServices('all');

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => filterServices(btn.dataset.filter, btn));
  });

  document.querySelectorAll('[data-action="start-project"]').forEach((btn) => {
    btn.addEventListener('click', handleStartProject);
  });
});
