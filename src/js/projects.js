const portfolioSection = document.getElementById('portfolio');
const projectModal = document.getElementById('modal');
const projectModalCloseButton = document.querySelector('.project-modal__close-button');

function gentateProjectHtml({
  id, imageName, title, description, technologies,
}) {
  return `
    <div class="project-card">
      <img
        class="project-card__image"
        src="./assets/images/${imageName}"
        alt="Snapshoot 1"
      />
      <div class="project-card__body">
        <div class="project-card__header">
          <h2 class="project-card__header-title">${title}</h2>
          <div class="project-card__header-subtitle">
            <span>CANOPY</span>
            <span>Back End Dev</span>
            <span>2015</span>
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

const projects = [
  {
    title: 'Multi-Post Stories',
    imageName: 'snapshoot-1.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'js'],
  },
  {
    title: 'Tonic',
    imageName: 'snapshoot-1.jpg',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'js'],
  },
  {
    title: 'Facebook 360',
    imageName: 'snapshoot-1.jpg',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'js'],
  },
  {
    title: 'Uber Navigation',
    imageName: 'snapshoot-1.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'js'],
  },
  {
    title: 'Multi-Post Stories',
    imageName: 'snapshoot-1.jpg',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'js'],
  },
  {
    title: 'Tonic',
    imageName: 'snapshoot-1.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'js'],
  },
];

portfolioSection.innerHTML = projects
  .map((project, index) => gentateProjectHtml({ id: index, ...project }))
  .join('');

projects.forEach((_, index) => {
  document.getElementById(`project-button-${index}`).addEventListener('click', () => {
    projectModal.style.display = 'flex';
  });
});

projectModalCloseButton.addEventListener('click', () => {
  projectModal.style.display = 'none';
});
