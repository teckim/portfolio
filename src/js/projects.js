const portfolioSection = document.getElementById('portfolio');
const projectModal = document.getElementById('modal');

const projects = [
  {
    title: 'To-Do List web application',
    imageName: 'screenshot-1.png',
    description: 'ToDo List web application, built to help users manage their list of tasks. Users can add, edit, remove, and reorder a list of tasks. And they can also mark a task as completed.',
    technologies: ['html', 'css', 'js', 'webpack'],
    company: 'Microverse',
    type: 'Front End Dev',
    year: '2022',
    links: {
      live: 'https://teckim.github.io/todo-list/',
      source: 'https://github.com/teckim/todo-list',
    },
  },
  {
    title: 'JS Conference landing page',
    imageName: 'screenshot-2.png',
    description: 'This is the first capstone project in Microverse.',
    technologies: ['html', 'css', 'js'],
    company: 'Microverse',
    type: 'Front End Dev',
    year: '2022',
    links: {
      live: 'https://teckim.github.io/js-conference/',
      source: 'https://github.com/teckim/js-conference',
    },
  },
];

function gentateProjectHtml({
  id, imageName, title, description, technologies, company, type, year,
}) {
  return `
    <div class="project-card">
      <img
        class="project-card__image"
        src="./assets/images/${imageName}"
        alt="${imageName}"
      />
      <div class="project-card__body">
        <div class="project-card__header">
          <h2 class="project-card__header-title">${title}</h2>
          <div class="project-card__header-subtitle">
            <span>${company}</span>
            <span>${type}</span>
            <span>${year}</span>
          </div>
        </div>
        <p class="project-card__description">${description}</p>
        <ul class="project-card__tags-list">
          ${technologies.map((technology) => `<li class="project-card__tags-list-item">${technology}</li>`).join('')}
        </ul>
        <div class="project-card__actions">
          <button class="button" id="project-button-${id}" type="button">See Project</button>
        </div>
      </div>
    </div>
  `;
}

function generateProjectModalHtml({
  imageName, title, description, technologies, company, type, year, links,
}) {
  return `
    <div class="project-modal__container">
      <button class="project-modal__close-button" type="button">
        <img src="./assets/icons/close-black.svg" alt="Close modal icon" />
      </button>
      <div class="project-modal__header">
        <h2 class="project-modal__header-title">${title}</h2>
        <div class="project-modal__header-subtitle">
          <span>${company}</span>
          <span>${type}</span>
          <span>${year}</span>
        </div>
      </div>
      <div class="project-modal__image-container">
        <img
          class="project-modal__image"
          src="./assets/images/${imageName}"
          alt="${imageName}"
        />
      </div>
      <div class="project-modal__body">
        <p class="project-modal__description">
          ${description}
        </p>
        <ul class="project-modal__tags-list">
          ${technologies.map((technology) => `<li class="project-modal__tags-list-item">${technology}</li>`).join('')}
        </ul>
        <hr class="project-modal__separator">
        <div class="project-modal__actions">
          <a href="${links.live}" target="_blank" class="button">
            <span>See Live</span>
            <img class="button__icon" src="./assets/icons/external-link.svg" alt="External link icon">
          </a>
          <a href="${links.source}" target="_blank" class="button">
            <span>See Source</span>
            <img class="button__icon" src="./assets/icons/github-primary.svg" alt="Github primary icon">
          </a>
        </div>
      </div>
    </div>
  `;
}

portfolioSection.innerHTML = projects
  .map((project, index) => gentateProjectHtml({ id: index, ...project }))
  .join('');

projects.forEach((project, index) => {
  document.getElementById(`project-button-${index}`).addEventListener('click', () => {
    projectModal.innerHTML = generateProjectModalHtml({ id: index, ...project });

    const projectModalCloseButton = document.querySelector('.project-modal__close-button');

    projectModalCloseButton.addEventListener('click', () => {
      projectModal.style.display = 'none';
    });

    projectModal.style.display = 'flex';
  });
});
