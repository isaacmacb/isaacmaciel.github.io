// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('pref-theme', newTheme);
    });
}

// ============================================
// KEYBOARD SHORTCUT (Alt + T)
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('pref-theme', newTheme);
    }
});

// ============================================
// TOP LINK (Scroll to top)
// ============================================
const topLink = document.getElementById('top-link');

if (topLink) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topLink.classList.add('visible');
        } else {
            topLink.classList.remove('visible');
        }
    });

    topLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// FILTER PROJECTS
// ============================================
const filterTabs = document.querySelectorAll('.filter-tab');
const projects = document.querySelectorAll('.project-card');

if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const filter = this.dataset.filter;

            projects.forEach(project => {
                const categories = project.dataset.category;
                if (filter === 'all' || categories.includes(filter)) {
                    project.style.display = 'flex';
                    // Pequena animação de fade
                    project.style.opacity = '0';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transition = 'opacity 0.3s ease';
                    }, 50);
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// MENU SCROLL POSITION
// ============================================
const menu = document.getElementById('menu');
if (menu) {
    const scrollPosition = localStorage.getItem('menu-scroll-position');
    if (scrollPosition) {
        menu.scrollLeft = parseInt(scrollPosition, 10);
    }
    menu.onscroll = function () {
        localStorage.setItem('menu-scroll-position', menu.scrollLeft);
    }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const id = href.substr(1);
        const target = document.querySelector(`[id='${decodeURIComponent(id)}']`);
        
        if (target) {
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                target.scrollIntoView();
            }
            
            if (id === 'top') {
                history.replaceState(null, null, ' ');
            } else {
                history.pushState(null, null, `#${id}`);
            }
        }
    });
});

// ============================================
// CONSOLE MESSAGE (opcional)
// ============================================
console.log('%c Isaac Maciel 🚀 ', 'background: #58a6ff; color: #0d1117; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 4px;');
console.log('%c Desenvolvedor Backend | Automação | BI ', 'background: #0d1117; color: #58a6ff; font-size: 12px; padding: 5px 10px; border: 1px solid #58a6ff; border-radius: 4px;');