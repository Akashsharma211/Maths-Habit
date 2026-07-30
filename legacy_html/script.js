/* ==========================================================================
   Anu Mam Classes - Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initCourseFiltering();
    initFaqAccordion();
    initDemoForms();
    initMobileMenu();
    initCounterAnimations();
});

/* --- 1. Theme Toggle (Dark / Light) --- */
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('anu_theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('anu_theme', newTheme);
        updateThemeIcon(newTheme);
        showToast(`Switched to ${newTheme.toUpperCase()} mode!`, 'info');
    });
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    if (theme === 'light') {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun" style="color: #F59E0B;"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

/* --- 2. Course Category Filtering --- */
function initCourseFiltering() {
    const filterBtns = document.querySelectorAll('.course-filter-bar .filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            courseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* --- 3. FAQ Accordion --- */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // If it wasn't active before, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/* --- 4. Demo Registration Form & Modal Handlers --- */
function initDemoForms() {
    const heroDemoForm = document.getElementById('demo-form');
    
    if (heroDemoForm) {
        heroDemoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const studentName = document.getElementById('student-name').value;
            const phone = document.getElementById('parent-phone').value;
            const grade = document.getElementById('student-grade').value;

            showToast(`🎉 Success! Free Demo confirmed for ${studentName} (${grade}). Our team will WhatsApp you at ${phone}.`, 'success');
            heroDemoForm.reset();
        });
    }
}

function openDemoModal(courseTitle = 'Free Demo Class') {
    const modal = document.getElementById('demo-modal');
    const titleEl = document.getElementById('modal-course-title');
    
    if (titleEl) {
        titleEl.textContent = `Demo: ${courseTitle}`;
    }
    
    if (modal) {
        modal.classList.add('active');
    }
}

function closeDemoModal() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function handleModalSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('modal-name').value;
    const phone = document.getElementById('modal-phone').value;
    
    showToast(`✅ Demo Seat Reserved for ${name}! Details sent to ${phone}.`, 'success');
    closeDemoModal();
    const form = document.getElementById('modal-demo-form');
    if (form) form.reset();
}

/* --- 5. Syllabus Modal Data & Generator --- */
const syllabusData = {
    'Class 9th & 10th Super Foundation': [
        { unit: 'Physics (Units 1-4)', desc: 'Motion, Force, Gravitation, Work & Energy, Light Reflection & Refraction' },
        { unit: 'Chemistry (Units 1-3)', desc: 'Matter in Our Surroundings, Chemical Reactions & Equations, Acids & Bases' },
        { unit: 'Mathematics (Units 1-5)', desc: 'Real Numbers, Polynomials, Linear Equations, Triangles, Trigonometry' },
        { unit: 'Olympiad Extra', desc: 'Advanced Problem Solving Techniques & Speed Mental Drills' }
    ],
    'Class 11 & 12 Physics Mastermind': [
        { unit: 'Class 11 Physics Core', desc: 'Vectors, Kinematics, Laws of Motion, Rotational Dynamics, Thermodynamics' },
        { unit: 'Class 12 Physics Core', desc: 'Electrostatics, Current Electricity, Electromagnetic Induction, Wave Optics, Modern Physics' },
        { unit: 'Lab & Derivation Drills', desc: 'Complete Board Practical Viva & Step-by-Step Derivation Masterclasses' }
    ],
    'NEET/JEE Target Batch': [
        { unit: 'Mechanics & Electrodynamics', desc: 'High-Yield Numerical Drills & PYQ Shortcuts (Last 15 Years Exam Papers)' },
        { unit: 'Physical & Organic Chemistry', desc: 'Mole Concept, Electrochemistry, Reaction Mechanisms, Periodic Trends' },
        { unit: 'Speed Test CBT Simulations', desc: 'Weekly 3-Hour Computer Based Tests with Instant All-India Rank Analysis' }
    ],
    'Class 11/12 Mathematics Booster': [
        { unit: 'Calculus Complete', desc: 'Limits, Continuity, Differentiation, Definite Integrals & Differential Equations' },
        { unit: 'Algebra & 3D Geometry', desc: 'Matrices, Determinants, Vector Algebra, 3D Geometry Planes & Probability' }
    ],
    '60-Day Board Crash Course': [
        { unit: 'Rapid 100% Revision', desc: 'High-Weightage Chapter Sweeps in 45 Days' },
        { unit: 'Top 500 Expected PYQs', desc: 'Previous 10 Year Board Questions with Sample Marking Schemes' },
        { unit: 'Mock Test Series', desc: '5 Live Pre-Board Mock Exams with Individual Teacher Corrections' }
    ],
    'Early STEM & Olympiad': [
        { unit: 'Logical Reasoning & Math', desc: 'Puzzles, Sequences, Geometry Fundamentals' },
        { unit: 'Everyday Science', desc: 'Fun Kitchen Chemistry & DIY Physics Demonstrations' }
    ]
};

function openSyllabusModal(courseName) {
    const modal = document.getElementById('syllabus-modal');
    const titleEl = document.getElementById('syllabus-modal-title');
    const contentEl = document.getElementById('syllabus-content');

    titleEl.textContent = `${courseName} - Complete Syllabus`;

    const units = syllabusData[courseName] || [
        { unit: 'Unit 1: Core Fundamentals', desc: 'Comprehensive coverage of core concepts and theory.' },
        { unit: 'Unit 2: Problem Solving Drills', desc: 'Targeted PYQs and sample paper problem practice.' }
    ];

    contentEl.innerHTML = units.map(u => `
        <div class="syllabus-unit">
            <h5><i class="fa-solid fa-bookmark"></i> ${u.unit}</h5>
            <p>${u.desc}</p>
        </div>
    `).join('');

    modal.classList.add('active');
}

function closeSyllabusModal() {
    const modal = document.getElementById('syllabus-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/* --- 6. Mobile Menu --- */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active-mobile');
            if (navLinks.classList.contains('active-mobile')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--bg-card)';
                navLinks.style.padding = '1.5rem';
                navLinks.style.borderBottom = '1px solid var(--border-color)';
            } else {
                navLinks.style.display = '';
            }
        });
    }
}

/* --- 7. Animated Counter --- */
function initCounterAnimations() {
    const statCards = document.querySelectorAll('.stat-card');
    
    let animated = false;
    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-bar-section');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos && !animated) {
            animated = true;
            statCards.forEach(card => {
                const numEl = card.querySelector('.stat-number');
                if (!numEl) return;
                
                const targetText = numEl.innerText;
                const targetNum = parseInt(targetText.replace(/[^0-9]/g, ''));
                if (isNaN(targetNum)) return;

                let current = 0;
                const increment = Math.ceil(targetNum / 40);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetNum) {
                        current = targetNum;
                        clearInterval(timer);
                    }
                    numEl.innerText = current + (targetText.includes('+') ? '+' : (targetText.includes('%') ? '%' : ''));
                }, 30);
            });
        }
    });
}

/* --- Helper Toast Notification --- */
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = '<i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i>';
    if (type === 'error') icon = '<i class="fa-solid fa-triangle-exclamation" style="color: #EF4444;"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-100%)';
        toast.style.transition = '0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 4500);
}
