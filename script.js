const projects = {
    dev: [
        {
            title: "Project 1",
            description: "Description of project 1",
            tech: ["HTML", "SCSS", "JavaScript"],
            github: "#",
            live: "#"
        },
        // Add more dev projects here
    ],
    design: [
        {
            title: "Design Project 1",
            description: "Description of design project 1",
            tech: ["Figma", "Adobe XD"],
            github: "#",
            live: "#",
            isDesign: true
        },
        // Add more design projects here
    ]
};

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card' + (project.isDesign ? ' project-card--design' : '');

    card.innerHTML = `
        <div class="project-card__image">
            <div class="project-card__image-placeholder"></div>
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">${project.title}</h3>
            <div class="project-card__tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <p class="project-card__description">${project.description}</p>
            <div class="project-card__links">
                <a href="${project.github}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.live}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;

    return card;
}

// Populate projects
const devProjectsContainer = document.getElementById('dev-projects');
const designProjectsContainer = document.getElementById('design-projects');

projects.dev.forEach(project => {
    devProjectsContainer.appendChild(createProjectCard(project));
});

projects.design.forEach(project => {
    designProjectsContainer.appendChild(createProjectCard(project));
});
