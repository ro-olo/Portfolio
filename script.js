// Gestione parallax background
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

    // Visualizzazione dei progetti
    const devProjectsData = [
        // I tuoi dati dei progetti di sviluppo qui
    ];

    const designProjectsData = [
        // I tuoi dati dei progetti di design qui
    ];

    // Funzione per rendere i progetti
    function renderProjects(projectsData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            // Aggiungi il contenuto della card del progetto
        });
    }

    // Renderizza i progetti
    renderProjects(devProjectsData, 'devProjects');
    renderProjects(designProjectsData, 'designProjects');

    // Gestione carousel progetti
    document.querySelectorAll('.projects__section').forEach(section => {
        const carousel = section.querySelector('.projects__carousel');
        const prevBtn = section.querySelector('.prev');
        const nextBtn = section.querySelector('.next');

        if (carousel && prevBtn && nextBtn) {
            // Aggiungi la logica del carousel qui
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

            // Duplica i progetti per l'effetto circolare
            this.allProjects = [...projects, ...projects, ...projects];
            
            this.initialize();
            this.setupEventListeners();
            this.updateCarousel();
            
            // Aggiungi listener per il resize della finestra
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
                // Ignora gli eventi di transizione delle cards individuali
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
            // Rimuovi temporaneamente le classi active e center per evitare transizioni
            this.updateActiveCards(true);
            
            this.track.style.transition = 'none';
            this.currentIndex = 0;
            this.track.style.transform = `translateX(0)`;
            this.track.offsetHeight;
            
            // Riapplica le classi senza transizione
            this.updateActiveCards(true);
            this.track.offsetHeight;
            
            // Riattiva le transizioni
            this.track.style.transition = 'transform 0.5s ease-out';
            
            // Riapplica le classi con transizione
            setTimeout(() => {
                this.updateActiveCards();
            }, 50);
        }

        resetToEnd() {
            // Rimuovi temporaneamente le classi active e center per evitare transizioni
            this.updateActiveCards(true);
            
            this.track.style.transition = 'none';
            this.currentIndex = this.projects.length - 1;
            const moveAmount = (330 + 64) * this.currentIndex;
            this.track.style.transform = `translateX(-${moveAmount}px)`;
            this.track.offsetHeight;
            
            // Riapplica le classi senza transizione
            this.updateActiveCards(true);
            this.track.offsetHeight;
            
            // Riattiva le transizioni
            this.track.style.transition = 'transform 0.5s ease-out';
            
            // Riapplica le classi con transizione
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
            
            // Determina il numero di cards visibili in base alla larghezza dello schermo
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
                    
                    // Aggiungi la classe center solo se ci sono 3 cards visibili
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

    // Animazione per le sezioni quando entrano nel viewport
    function setupScrollAnimations() {
        // Seleziona tutti gli elementi da animare
        const devSection = document.querySelector('.projects__section--dev');
        const designSection = document.querySelector('.projects__section--design');
        const contactSection = document.querySelector('.contact');
        
        // Array di elementi da animare
        const elementsToAnimate = [
            { element: devSection, threshold: 0.05 },
            { element: designSection, threshold: 0.05 },
            { element: contactSection, threshold: 0.1 }
        ];
        
        // Crea un Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Quando un elemento entra nel viewport
                if (entry.isIntersecting) {
                    // Aggiungi la classe 'visible' per attivare l'animazione
                    entry.target.classList.add('visible');
                    
                    // Smetti di osservare dopo che l'animazione è stata attivata
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Usa il viewport come container
            rootMargin: '0px 0px -100px 0px' // Margine negativo per anticipare l'attivazione
        });

        // Osserva tutti gli elementi da animare
        elementsToAnimate.forEach(item => {
            if (item.element) {
                observer.observe(item.element);
            }
        });
    }

    // Esegui la funzione dopo che la pagina è caricata
    setupScrollAnimations();

    // Intersection Observer per le animazioni dei titoli
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

    // Osserva i titoli delle sezioni
    document.querySelectorAll('.projects__title').forEach(title => {
        observer.observe(title);
    });

    // Animazione per le card dei progetti quando entrano nel viewport
    function setupCardAnimations() {
        // Crea un Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Quando una card entra nel viewport
                if (entry.isIntersecting) {
                    // Aggiungi la classe 'visible' con un ritardo basato sull'indice
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, entry.target.dataset.index * 150); // Ritardo progressivo per ogni card
                    
                    // Smetti di osservare l'elemento dopo che è stato animato
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Usa il viewport come container
            rootMargin: '0px', // Nessun margine
            threshold: 0.1 // Attiva quando almeno il 10% della card è visibile
        });

        // Osserva tutte le card dei progetti
        document.querySelectorAll('.project-card').forEach((card, index) => {
            // Aggiungi un attributo data-index per il ritardo progressivo
            card.dataset.index = index;
            observer.observe(card);
        });
    }

    // Esegui la funzione dopo che le card sono state create
    const checkCardsInterval = setInterval(() => {
        const cards = document.querySelectorAll('.project-card');
        if (cards.length > 0) {
            setupCardAnimations();
            clearInterval(checkCardsInterval);
        }
    }, 100);

    // Animazione per la sezione progetti quando entra nel viewport
    function setupProjectsAnimation() {
        const projectsSection = document.querySelector('.projects');
        
        if (!projectsSection) return;
        
        // Crea un Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Quando la sezione progetti entra nel viewport
                if (entry.isIntersecting) {
                    // Aggiungi la classe 'visible' per attivare l'animazione
                    projectsSection.classList.add('visible');
                    
                    // Smetti di osservare dopo che l'animazione è stata attivata
                    observer.unobserve(projectsSection);
                }
            });
        }, {
            root: null, // Usa il viewport come container
            rootMargin: '0px', // Nessun margine
            threshold: 0.1 // Attiva quando almeno il 10% della sezione è visibile
        });

        // Osserva la sezione progetti
        observer.observe(projectsSection);
    }

    // Esegui la funzione dopo che la pagina è caricata
    setupProjectsAnimation();

    // Theme Switcher
    const themeLinks = document.querySelectorAll('.dropdown-link');
    
    // Gestione del cambio tema
    themeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Rimuovi la classe 'active' da tutti i link
            themeLinks.forEach(item => item.classList.remove('active'));
            
            // Aggiungi la classe 'active' al link cliccato
            link.classList.add('active');
            
            // Ottieni il tema selezionato dall'attributo data-theme
            const selectedTheme = link.getAttribute('data-theme');
            
            // Salva il tema selezionato in localStorage per persistenza
            localStorage.setItem('selectedTheme', selectedTheme);
            
            // Applica il tema selezionato
            applyTheme(selectedTheme);
        });
    });
    
    // Funzione per applicare il tema
    function applyTheme(theme) {
        // Rimuovi eventuali classi di tema esistenti dal body
        document.body.classList.remove('theme-coolest-ever', 'theme-coolest-earth', 'theme-boring');
        
        // Aggiungi la classe del tema selezionato
        document.body.classList.add(`theme-${theme}`);
        
        // Salva il tema selezionato in localStorage
        localStorage.setItem('selectedTheme', theme);
        
        // Gestisci il cambio di tema
        if (theme === 'boring') {
            // Reindirizza alla versione "boring" del sito
            window.location.href = 'boring.html';
        } else if (theme !== 'coolest-ever') {
            // Per gli altri temi non ancora implementati
            alert(`Il tema "${theme}" sarà implementato a breve! Per ora rimane il tema attuale.`);
        }
    }
    
    // Controlla se c'è un tema salvato in localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        // Trova il link corrispondente al tema salvato
        const themeLink = document.querySelector(`.dropdown-link[data-theme="${savedTheme}"]`);
        if (themeLink) {
            // Rimuovi la classe 'active' da tutti i link
            themeLinks.forEach(item => item.classList.remove('active'));
            
            // Aggiungi la classe 'active' al link del tema salvato
            themeLink.classList.add('active');
            
            // Applica il tema salvato
            applyTheme(savedTheme);
        }
    }

    // Miglioramento del menu a discesa dei temi
    const themeDropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let isMenuOpen = false;
    let timeoutId;
    
    if (themeDropdown && dropdownToggle && dropdownMenu) {
        // Gestione click sul toggle
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isMenuOpen) {
                // Apri il menu
                dropdownMenu.classList.add('show');
                isMenuOpen = true;
            } else {
                // Chiudi il menu
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }
        });
        
        // Gestione hover sul dropdown
        themeDropdown.addEventListener('mouseenter', () => {
            // Cancella eventuali timeout di chiusura
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            // Mostra il menu
            dropdownMenu.classList.add('show');
            isMenuOpen = true;
        });
        
        themeDropdown.addEventListener('mouseleave', () => {
            // Imposta un timeout per chiudere il menu
            timeoutId = setTimeout(() => {
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }, 3000); // 3 secondi di ritardo prima di chiudere
        });
        
        // Chiudi il menu quando si clicca su un'opzione
        dropdownMenu.addEventListener('click', (e) => {
            // Non chiudere immediatamente per dare tempo all'evento click del tema di essere gestito
            setTimeout(() => {
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }, 100);
        });
        
        // Chiudi il menu quando si clicca fuori
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !themeDropdown.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                isMenuOpen = false;
            }
        });
    }
});
