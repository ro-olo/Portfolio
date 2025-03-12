// Development Projects Data
const devProjects = [
    {
        title: 'Tic Tac Toe',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Interactive game with engaging animations and multiplayer functionality',
        github: '#',
        live: '#'
    },
    {
        title: 'Rock Paper Scissors',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Classic game with modern interface and score tracking',
        github: '#',
        live: '#'
    },
    {
        title: 'Bookshelf App',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Books storage app',
        github: '#',
        live: '#'
    }
];

// Design Projects Data
const designProjects = [
    {
        title: 'Tic Tac Toe Design',
        tech: ['Figma', 'UI/UX'],
        description: 'Modern design concept for classic game interface',
        figma: '#'
    },
    {
        title: 'Rock Paper Scissors Design',
        tech: ['Figma', 'UI/UX'],
        description: 'Intuitive and engaging game interface design',
        figma: '#'
    },
    {
        title: 'Bookshelf App Design',
        tech: ['Figma', 'UI/UX'],
        description: 'Clean and user-friendly bookshelf app interface',
        figma: '#'
    }
];

// Create project card
function createProjectCard(project, type) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const imageHTML = `
        <div class="project-card__inner">
            <div class="project-card__image">
                <div class="project-card__image-placeholder"></div>
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <div class="project-card__tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <p class="project-card__description">${project.description}</p>
                ${type === 'dev' 
                    ? `<div class="project-card__links">
                        <a href="${project.github}" class="btn-github">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                        <a href="${project.live}" class="btn-live">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>`
                    : `<div class="project-card__links">
                        <a href="${project.figma}" class="btn-figma">
                            <i class="fab fa-figma"></i> View on Figma
                        </a>
                    </div>`
                }
            </div>
        </div>
    `;

    card.innerHTML = imageHTML;
    return card;
}

// Initialize projects
function initProjects() {
    const devContainer = document.getElementById('dev-projects');
    const designContainer = document.getElementById('design-projects');

    if (devContainer && designContainer) {
        // Add dev projects
        devProjects.forEach(project => {
            devContainer.appendChild(createProjectCard(project, 'dev'));
        });

        // Add design projects
        designProjects.forEach(project => {
            designContainer.appendChild(createProjectCard(project, 'design'));
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjects);
