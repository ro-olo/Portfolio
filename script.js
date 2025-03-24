const projects = {
    dev: [
        {
            title: "Tic Tac Toe",
            description: "A classic Tic Tac Toe game built with vanilla JavaScript. Features include player vs player mode, win detection, and a clean, modern interface.",
            tech: ["HTML", "CSS", "JS"],
            github: "#",
            live: "#",
            image: "assets/images/RPS.png"
        },
        {
            title: "Rock Paper Scissors",
            description: "An interactive Rock Paper Scissors game against the computer. Includes score tracking, animated transitions, and responsive design.",
            tech: ["HTML", "SCSS", "JS"],
            github: "#",
            live: "#",
            image: "assets/images/RPS.png"
        },
        {
            title: "Bookshelf App",
            description: "A web application to manage your reading list. Features include book tracking, search functionality, and local storage for data persistence.",
            tech: ["HTML", "SCSS", "JS"],
            github: "#",
            live: "#",
            image: "assets/images/RPS.png"
        }
    ],
    design: [
        {
            title: "Bookshelf App",
            description: "A web application to manage your reading list. Features include book tracking, search functionality, and local storage for data persistence.",
            tech: ["Figma", "Procreate"],
            github: "#",
            live: "#",
            isDesign: true,
            image: "assets/images/RPS.png"
        },
        {
            title: "Portfolio Design",
            description: "Clean and intuitive weather application design with focus on data visualization and daily/weekly forecast views.",
            tech: ["Adobe XD", "UI Design", "Interaction Design"],
            github: "#",
            live: "#",
            isDesign: true,
            image: "assets/images/RPS.png"
        },
        {
            title: "App redesign",
            description: "Minimalist task management application design with focus on productivity and ease of use. Features dark mode and customizable categories.",
            tech: ["Figma", "UI Design", "Design System"],
            github: "#",
            live: "#",
            isDesign: true,
            image: "assets/images/RPS.png"
        }
    ]
};

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card' + (project.isDesign ? ' project-card--design' : '');

    card.innerHTML = `
        <div class="project-card__image">
            <img src="${project.image}" alt="${project.title} image">
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

// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Populate projects
    const devProjectsContainer = document.getElementById('dev-projects');
    const designProjectsContainer = document.getElementById('design-projects');

    if (devProjectsContainer && designProjectsContainer) {
        projects.dev.forEach(project => {
            devProjectsContainer.appendChild(createProjectCard(project));
        });

        projects.design.forEach(project => {
            designProjectsContainer.appendChild(createProjectCard(project));
        });
    }
});
