document.addEventListener('DOMContentLoaded', () => {
    // ---- THEME SELECTOR & LOCAL STORAGE ----
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fas fa-sun text-yellow-400';
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.className = 'fas fa-moon text-indigo-500';
    }

    // Toggle theme button action
    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeIcon.className = 'fas fa-moon text-indigo-500';
            showToast('🌞 Light mode activated!');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.className = 'fas fa-sun text-yellow-400';
            showToast('🌙 Dark mode activated!');
        }
    });

    // ---- MOBILE MENU BAR ----
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.className = 'fas fa-bars text-2xl';
        } else {
            icon.className = 'fas fa-times text-2xl';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.querySelector('i').className = 'fas fa-bars text-2xl';
        });
    });

    // ---- PROGRESSIVE SCROLL BAR INDICATOR ----
    const scrollIndicator = document.getElementById('scroll-indicator');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollIndicator) {
            scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
        }
    });

    // ---- HERO TEXT TYPING ANIMATION ----
    const typingSpan = document.querySelector('.typing-text');
    const roles = ["Embedded Software Engineer", "Systems Architect", "Machine Learning Builder", "Automotive Specialist", "AI & Cybersecurity Researcher"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // faster deletion
        } else {
            typingSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // normal typing
        }

        if (!isDeleting && charIndex === currentRole.length) {
            // Wait at completed role
            typingSpeed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400; // wait before starting next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (typingSpan) {
        typeEffect();
    }

    // ---- PORTFOLIO FILTERING & GRID INTERACTION ----
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active style from all filtering buttons
            filterButtons.forEach(b => {
                b.classList.remove('active', 'bg-indigo-600', 'text-white');
                b.classList.add('bg-white', 'dark:bg-slate-900', 'text-slate-700', 'dark:text-slate-350');
            });
            
            btn.classList.remove('bg-white', 'dark:bg-slate-900', 'text-slate-700', 'dark:text-slate-350');
            btn.classList.add('active', 'bg-indigo-600', 'text-white');

            const categoryFilter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Styling active transitions
                if (categoryFilter === 'all' || cardCategory === categoryFilter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.85)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ---- SCROLL REVEAL ANIMATIONS ----
    const revealItems = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        for (let i = 0; i < revealItems.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealItems[i].getBoundingClientRect().top;
            const elementVisible = 100; // threshold trigger in pixels

            if (elementTop < windowHeight - elementVisible) {
                revealItems[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // run once on launch to load visible assets

    // ---- CONTACT FORM ACTION ----
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Fetch input items
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !email || !message) {
                showToast('❌ Please fill in all required fields.');
                return;
            }

            // Simulate saving message internally (e.g. for inspection or local persistent storage)
            const submission = {
                name,
                email,
                subject: subject || 'No Subject',
                message,
                date: new Date().toISOString()
            };

            const existingMessages = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
            existingMessages.push(submission);
            localStorage.setItem('contact_submissions', JSON.stringify(existingMessages));

            // Visual reward response
            showToast('🚀 Message Sent! Thank you for reaching out, Ahmad will get back to you soon.');
            contactForm.reset();
        });
    }

    // ---- CUSTOM TOAST MESSAGE ----
    function showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        toast.innerHTML = `
            <i class="fas fa-magic text-indigo-500 text-lg"></i>
            <span class="text-sm font-medium">${message}</span>
        `;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
});
