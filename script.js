// Parallax background management
document.addEventListener('DOMContentLoaded', () => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    // Use a more sophisticated approach for ultra-smooth parallax
    let parallaxInstances = [];
    
    // Initialize parallax for each layer
    parallaxLayers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
        
        window.addEventListener('scroll', () => {
            // Use GSAP for smoother transitions with minimal lag
            gsap.to(layer, {
                y: -(window.scrollY * speed),
                ease: 'power1.out',
                duration: 0.5,
                overwrite: 'auto'
            });
        });
    });
    
    // Add GSAP library if not already present
    if (typeof gsap === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.async = true;
        script.onload = function() {
            // Initialize parallax after GSAP loads
            initParallax();
        };
        document.head.appendChild(script);
    } else {
        initParallax();
    }
    
    function initParallax() {
        // Initial position
        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            gsap.set(layer, {
                y: -(window.scrollY * speed)
            });
        });
    }

    // Projects display
    const devProjectsData = [
        // development project data here
    ];

    const designProjectsData = [
        // design project data here
    ];

    // Function to render projects
    function renderProjects(projectsData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            // Add project card content
            const card = createProjectCard(project);
            container.appendChild(card);
        });
    }

    // Render projects
    renderProjects(devProjectsData, 'devProjects');
    renderProjects(designProjectsData, 'designProjects');

    // Project carousel management
    document.querySelectorAll('.projects__section').forEach(section => {
        const carousel = section.querySelector('.projects__carousel');
        const prevBtn = section.querySelector('.prev');
        const nextBtn = section.querySelector('.next');

        if (carousel && prevBtn && nextBtn) {
            // Add carousel logic here
        }
    });
});

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
        },
        {
            title: "Weather App",
            description: "A weather application with real-time updates and 5-day forecast. Features include location detection and beautiful weather animations.",
            tech: ["HTML", "SCSS", "JS", "API"],
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
            tech: ["Figma", "UI Design"],
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
        },
        {
            title: "E-commerce Design",
            description: "Modern e-commerce platform design focusing on user experience and conversion optimization.",
            tech: ["Figma", "UI Design", "UX Research"],
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
                <a href="${project.github}" class="btn btn--outline" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${project.live}" class="btn btn--outline" target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsData = {
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
            },
            {
                title: "Weather App",
                description: "A weather application with real-time updates and 5-day forecast. Features include location detection and beautiful weather animations.",
                tech: ["HTML", "SCSS", "JS", "API"],
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
                tech: ["Figma", "UI Design"],
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
            },
            {
                title: "E-commerce Design",
                description: "Modern e-commerce platform design focusing on user experience and conversion optimization.",
                tech: ["Figma", "UI Design", "UX Research"],
                github: "#",
                live: "#",
                isDesign: true,
                image: "assets/images/RPS.png"
            }
        ]
    };

    class ProjectCarousel {
        constructor(container, projects, type) {
            this.track = container.querySelector('.projects__carousel');
            this.prevButton = container.querySelector('.prev');
            this.nextButton = container.querySelector('.next');
            this.projects = projects;
            this.currentIndex = 0;
            this.type = type;
            this.isAnimating = false;

            // Duplicate projects for circular effect
            this.allProjects = [...projects, ...projects, ...projects];
            
            this.initialize();
            this.setupEventListeners();
            this.updateCarousel();
            
            // Add listener for window resize
            window.addEventListener('resize', () => {
                this.updateActiveCards();
            });
        }

        initialize() {
            this.allProjects.forEach(project => {
                const card = createProjectCard(project);
                this.track.appendChild(card);
            });
            this.updateActiveCards();
        }

        setupEventListeners() {
            this.prevButton.addEventListener('click', () => {
                if (!this.isAnimating) this.slide('prev');
            });
            this.nextButton.addEventListener('click', () => {
                if (!this.isAnimating) this.slide('next');
            });

            this.track.addEventListener('transitionend', (e) => {
                // Ignore individual card transition events
                if (e.target !== this.track) return;
                
                this.isAnimating = false;
                if (this.currentIndex >= this.projects.length) {
                    this.resetToStart();
                } else if (this.currentIndex < 0) {
                    this.resetToEnd();
                }
            });
        }

        resetToStart() {
            // Temporarily remove active and center classes to avoid transitions
            this.updateActiveCards(true);
            
            this.track.style.transition = 'none';
            this.currentIndex = 0;
            this.track.style.transform = `translateX(0)`;
            this.track.offsetHeight;
            
            // Reapply classes without transition
            this.updateActiveCards(true);
            this.track.offsetHeight;
            
            // Reactivate transitions
            this.track.style.transition = 'transform 0.5s ease-out';
            
            // Reapply classes with transition
            setTimeout(() => {
                this.updateActiveCards();
            }, 50);
        }

        resetToEnd() {
            // Temporarily remove active and center classes to avoid transitions
            this.updateActiveCards(true);
            
            this.track.style.transition = 'none';
            this.currentIndex = this.projects.length - 1;
            const moveAmount = (330 + 64) * this.currentIndex;
            this.track.style.transform = `translateX(-${moveAmount}px)`;
            this.track.offsetHeight;
            
            // Reapply classes without transition
            this.updateActiveCards(true);
            this.track.offsetHeight;
            
            // Reactivate transitions
            this.track.style.transition = 'transform 0.5s ease-out';
            
            // Reapply classes with transition
            setTimeout(() => {
                this.updateActiveCards();
            }, 50);
        }

        slide(direction) {
            this.isAnimating = true;
            const cardWidth = 330;
            const gap = 64;
            const moveAmount = cardWidth + gap;
            
            if (direction === 'next') {
                this.currentIndex++;
            } else {
                this.currentIndex--;
            }

            const translateX = -(moveAmount * this.currentIndex);
            this.track.style.transform = `translateX(${translateX}px)`;
            this.updateCarousel();
        }

        updateCarousel() {
            this.updateActiveCards();
        }

        updateActiveCards(noTransition = false) {
            const cards = this.track.querySelectorAll('.project-card');
            const totalCards = cards.length;
            const windowWidth = window.innerWidth;
            let visibleCards = 3;
            
            // Determine the number of visible cards based on screen width
            if (windowWidth <= 1100 && windowWidth > 800) {
                visibleCards = 2;
            } else if (windowWidth <= 800) {
                visibleCards = 1;
            }
            
            cards.forEach((card, index) => {
                if (noTransition) {
                    card.style.transition = 'none';
                    card.offsetHeight;
                }
                
                card.classList.remove('active', 'center');
                
                const relativeIndex = (index - this.currentIndex + totalCards) % totalCards;
                
                if (relativeIndex >= 0 && relativeIndex < visibleCards) {
                    card.classList.add('active');
                    
                    // Add center class only if there are 3 visible cards
                    if (visibleCards === 3 && relativeIndex === 1) {
                        card.classList.add('center');
                    }
                }
                
                if (noTransition) {
                    setTimeout(() => {
                        card.style.transition = '';
                    }, 0);
                }
            });
        }
    }

    // Initialize carousels
    const devSection = document.querySelector('.projects__section--dev');
    const designSection = document.querySelector('.projects__section--design');

    if (devSection && designSection) {
        new ProjectCarousel(devSection, projectsData.dev, 'dev');
        new ProjectCarousel(designSection, projectsData.design, 'design');
    }

    // Animation for sections when they enter the viewport
    function setupScrollAnimations() {
        // Select all elements to animate
        const devSection = document.querySelector('.projects__section--dev');
        const designSection = document.querySelector('.projects__section--design');
        const contactSection = document.querySelector('.contact');
        
        // Array of elements to animate
        const elementsToAnimate = [
            { element: devSection, threshold: 0.05 },
            { element: designSection, threshold: 0.05 },
            { element: contactSection, threshold: 0.1 }
        ];
        
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When an element enters the viewport
                if (entry.isIntersecting) {
                    // Add the 'visible' class to activate the animation
                    entry.target.classList.add('visible');
                    
                    // Stop observing after the animation has been activated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Use the viewport as the container
            rootMargin: '0px 0px -100px 0px' // Negative margin to anticipate activation
        });

        // Observe all elements to animate
        elementsToAnimate.forEach(item => {
            if (item.element) {
                observer.observe(item.element);
            }
        });
    }

    // Run the function after the page has loaded
    setupScrollAnimations();

    // Intersection Observer for title animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section titles
    document.querySelectorAll('.projects__title').forEach(title => {
        observer.observe(title);
    });

    // Animation for project cards when they enter the viewport
    function setupCardAnimations() {
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When a card enters the viewport
                if (entry.isIntersecting) {
                    // Add the 'visible' class with a delay based on the index
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, entry.target.dataset.index * 150); // Progressive delay for each card
                    
                    // Stop observing the element after it has been animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Use the viewport as the container
            rootMargin: '0px', // No margin
            threshold: 0.1 // Activate when at least 10% of the card is visible
        });

        // Observe all project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            // Add a data-index attribute for the progressive delay
            card.dataset.index = index;
            observer.observe(card);
        });
    }

    // Run the function after the cards have been created
    const checkCardsInterval = setInterval(() => {
        const cards = document.querySelectorAll('.project-card');
        if (cards.length > 0) {
            setupCardAnimations();
            clearInterval(checkCardsInterval);
        }
    }, 100);

    // Animation for the projects section when it enters the viewport
    function setupProjectsAnimation() {
        const projectsSection = document.querySelector('.projects');
        
        if (!projectsSection) return;
        
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When the projects section enters the viewport
                if (entry.isIntersecting) {
                    // Add the 'visible' class to activate the animation
                    projectsSection.classList.add('visible');
                    
                    // Stop observing after the animation has been activated
                    observer.unobserve(projectsSection);
                }
            });
        }, {
            root: null, // Use the viewport as the container
            rootMargin: '0px', // No margin
            threshold: 0.1 // Activate when at least 10% of the section is visible
        });

        // Observe the projects section
        observer.observe(projectsSection);
    }

    // Run the function after the page has loaded
    setupProjectsAnimation();

    // Theme Switcher
    const themeLinks = document.querySelectorAll('.dropdown-link');
    
    // Theme change management
    themeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove the 'active' class from all links
            themeLinks.forEach(item => item.classList.remove('active'));
            
            // Add the 'active' class to the clicked link
            link.classList.add('active');
            
            // Get the selected theme from the data-theme attribute
            const selectedTheme = link.getAttribute('data-theme');
            
            // Save the selected theme in localStorage for persistence
            localStorage.setItem('selectedTheme', selectedTheme);
            
            // Apply the selected theme
            applyTheme(selectedTheme);
        });
    });
    
    // Function to apply the theme
    function applyTheme(theme) {
        // Remove any existing theme classes from the body
        document.body.classList.remove('theme-coolest-ever', 'theme-coolest-earth', 'theme-boring');
        
        // Add the class of the selected theme
        document.body.classList.add(`theme-${theme}`);
        
        // Save the selected theme in localStorage
        localStorage.setItem('selectedTheme', theme);
        
        // Handle theme change
        if (theme === 'boring') {
            // Redirect to the "boring" version of the site
            window.location.href = 'boring.html';
        } else if (theme === 'coolest-earth') {
            // Redirect to the "coolest on earth" version of the site
            window.location.href = 'coolest-earth.html';
        } else if (theme !== 'coolest-ever') {
            // For other themes not yet implemented
            alert(`The "${theme}" theme will be implemented soon! For now, the current theme remains.`);
        }
    }
    
    // Check if a theme is saved in localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        // Find the link corresponding to the saved theme
        const themeLink = document.querySelector(`.dropdown-link[data-theme="${savedTheme}"]`);
        if (themeLink) {
            // Remove the 'active' class from all links
            themeLinks.forEach(item => item.classList.remove('active'));
            
            // Add the 'active' class to the link of the saved theme
            themeLink.classList.add('active');
            
            // Apply the saved theme only if we're not already on the index page
            // and the page was just loaded (not if the user is actively switching themes)
            const isInitialLoad = !document.referrer || document.referrer.includes('index.html');
            if (!isInitialLoad || (savedTheme !== 'coolest-earth' && savedTheme !== 'boring')) {
                applyTheme(savedTheme);
            }
        }
    }

    // Improvement of the theme dropdown menu
    const themeDropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let isMenuOpen = false;
    let timeoutId;
    
    if (themeDropdown && dropdownToggle && dropdownMenu) {
        // Handle click on the toggle
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isMenuOpen) {
                // Open the menu
                dropdownMenu.classList.add('show');
                isMenuOpen = true;
            } else {
                // Close the menu
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }
        });
        
        // Handle hover on the dropdown
        themeDropdown.addEventListener('mouseenter', () => {
            // Cancel any close timeouts
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            // Show the menu
            dropdownMenu.classList.add('show');
            isMenuOpen = true;
        });
        
        themeDropdown.addEventListener('mouseleave', () => {
            // Set a timeout to close the menu
            timeoutId = setTimeout(() => {
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }, 3000); // 3-second delay before closing
        });
        
        // Close the menu when an option is clicked
        dropdownMenu.addEventListener('click', (e) => {
            // Do not close immediately to give time for the theme click event to be handled
            setTimeout(() => {
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }, 100);
        });
        
        // Close the menu when clicked outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !themeDropdown.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }
        });
    }
});
