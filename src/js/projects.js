const portfolioSection = document.getElementById('portfolio');
const appearModal = document.getElementById('modal');

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

const projectsHtml = gentateProjectHtml({
  name: 1,
  imageName: 'snapshoot-1.jpg',
  title: 'test',
  description: 'test',
  technologies: ['html', 'css', 'js'],
});

portfolioSection.innerHTML = projectsHtml;

projects.forEach((project,index) => {
  document.getElementById(`modal-btn-${index}`).addEventListener('click', () => 
  {
      appearModal.style.display = "flex";
  })    
});