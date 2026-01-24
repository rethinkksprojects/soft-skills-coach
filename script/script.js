// All JavaScript code is AI-generated //

(function() {
    // ========== IMMEDIATE SCROLL CONTROL ==========
    // Force scroll to top as soon as script loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Prevent scrolling during initial load
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.overflow = 'hidden';
})();

document.addEventListener('DOMContentLoaded', function() {
    // ========== ENSURE START AT TOP ==========
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Handle browser back/forward navigation
    window.addEventListener('pageshow', function(event) {
        if(event.persisted) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    });
    
    // ========== PREVENT EMBED AUTO-SCROLL ==========
    let scrollLock = true;
    const embed = document.querySelector('.character-ai-embed');
    
    // Lock scroll for first 3 seconds
    window.addEventListener('scroll', function() {
        if(scrollLock && window.pageYOffset > 50) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, { passive: false });
    
    // Release scroll lock after embed loads
    if(embed) {
        embed.addEventListener('load', function() {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                    scrollLock = false;
                    document.body.style.overflow = 'auto';
                    document.documentElement.style.scrollBehavior = 'smooth';
                }, 500);
            }, 1000);
        });
    }
    
    // Fallback: Release lock after 4 seconds max
    setTimeout(() => {
        scrollLock = false;
        document.body.style.overflow = 'auto';
        document.documentElement.style.scrollBehavior = 'smooth';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 4000);
    
    // ========== 1. SMOOTH SCROLLING FOR NAVIGATION ==========
    const navLinks = document.querySelectorAll('.navigation a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========== 2. ANIMATED SCENARIO CARDS ==========
    const scenarioCards = document.querySelectorAll('.grid-item');
    
    scenarioCards.forEach(card => {
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 12px 24px rgba(255, 133, 133, 0.3)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'rgb(255, 133, 133) 4px 8px 16px';
            this.style.zIndex = '1';
        });
    });

    // ========== 3. STAGGERED FADE-IN ANIMATION ==========
    document.body.classList.add('fade-in');
    
    const fadeInCSS = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in * {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
        }
        
        .heading * { animation-delay: 0.1s; }
        h3:nth-of-type(1) { animation-delay: 0.3s; }
        .methods { animation-delay: 0.4s; }
        h3:nth-of-type(2) { animation-delay: 0.5s; }
        .scenarios .grid-item:nth-child(1) { animation-delay: 0.6s; }
        .scenarios .grid-item:nth-child(2) { animation-delay: 0.7s; }
        .scenarios .grid-item:nth-child(3) { animation-delay: 0.8s; }
        .scenarios .grid-item:nth-child(4) { animation-delay: 0.9s; }
        .scenarios .grid-item:nth-child(5) { animation-delay: 1.0s; }
        .scenarios .grid-item:nth-child(6) { animation-delay: 1.1s; }
        .scenarios .grid-item:nth-child(7) { animation-delay: 1.2s; }
        .scenarios .grid-item:nth-child(8) { animation-delay: 1.3s; }
        .scenarios .grid-item:nth-child(9) { animation-delay: 1.4s; }
        h3:nth-of-type(3) { animation-delay: 1.5s; }
        .methodology { animation-delay: 1.6s; }
        h3:nth-of-type(4) { animation-delay: 1.7s; }
        .character-ai-embed { animation-delay: 1.8s; }
    `;
    
    const style = document.createElement('style');
    style.textContent = fadeInCSS;
    document.head.appendChild(style);

    // ========== 4. NAVIGATION BAR SCROLL EFFECT ==========
    const navigationBar = document.querySelector('.navigation');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Only run this if scroll is unlocked
        if(!scrollLock) {
            if(currentScrollY > lastScrollY && currentScrollY > 100) {
                navigationBar.style.transform = 'translateY(-100%)';
            } else {
                navigationBar.style.transform = 'translateY(0)';
            }
            
            if(currentScrollY > 10) {
                navigationBar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navigationBar.style.boxShadow = 'none';
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // ========== 5. INTERACTIVE MILO IMAGE ==========
    const miloImage = document.querySelector('.milo-image');
    
    if(miloImage) {
        miloImage.style.transition = 'transform 0.5s ease';
        miloImage.style.cursor = 'pointer';
        
        miloImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        miloImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        miloImage.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }, 150);
        });
    }

    // ========== 6. EMBED IFRAME ENHANCEMENT ==========
    const characterEmbed = document.querySelector('.character-ai-embed');
    
    if(characterEmbed) {
        characterEmbed.style.opacity = '0';
        characterEmbed.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            characterEmbed.style.opacity = '1';
        }, 500);
        
        characterEmbed.style.borderRadius = '12px';
        characterEmbed.style.overflow = 'hidden';
        characterEmbed.style.boxShadow = '0 10px 40px rgba(157, 155, 255, 0.3)';
        
        setInterval(() => {
            characterEmbed.style.boxShadow = 
                `0 10px 40px ${Date.now() % 2000 < 1000 ? 
                    'rgba(157, 155, 255, 0.4)' : 
                    'rgba(255, 133, 133, 0.4)'}`;
        }, 2000);
    }

    // ========== 7. TYPEWRITER EFFECT FOR MAIN TITLE ==========
    const mainTitle = document.querySelector('.Title');
    
    if(mainTitle && !sessionStorage.getItem('titleAnimated')) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if(i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                sessionStorage.setItem('titleAnimated', 'true');
            }
        }
        
        setTimeout(typeWriter, 800);
    }

    // ========== 8. SCROLL PROGRESS INDICATOR ==========
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    const progressCSS = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(to right, #9d9bff, #ff8585);
            z-index: 10000;
            transition: width 0.1s;
        }
    `;
    
    const progressStyle = document.createElement('style');
    progressStyle.textContent = progressCSS;
    document.head.appendChild(progressStyle);
    
    window.addEventListener('scroll', () => {
        if(!scrollLock) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }
    });

    // ========== 9. INTERACTIVE BACKGROUND PATTERN ==========
    const backgroundShapes = document.createElement('div');
    backgroundShapes.className = 'background-shapes';
    document.body.insertBefore(backgroundShapes, document.body.firstChild);
    
    const shapesCSS = `
        .background-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        
        .background-shapes::before,
        .background-shapes::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            opacity: 0.1;
            animation: float 20s infinite linear;
        }
        
        .background-shapes::before {
            width: 300px;
            height: 300px;
            background: linear-gradient(45deg, #9d9bff, #ff8585);
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }
        
        .background-shapes::after {
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, #ff8585, #9d9bff);
            bottom: 10%;
            right: 10%;
            animation-delay: -10s;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -20px) rotate(90deg); }
            50% { transform: translate(0, -40px) rotate(180deg); }
            75% { transform: translate(-20px, -20px) rotate(270deg); }
        }
    `;
    
    const shapesStyle = document.createElement('style');
    shapesStyle.textContent = shapesCSS;
    document.head.appendChild(shapesStyle);

    // ========== 10. RESPONSIVE EMBED ADJUSTMENT ==========
    function adjustEmbedSize() {
        if(characterEmbed && window.innerWidth < 1100) {
            characterEmbed.width = Math.min(800, window.innerWidth - 40);
            characterEmbed.height = 500;
        } else if(characterEmbed) {
            characterEmbed.width = 1000;
            characterEmbed.height = 700;
        }
    }
    
    window.addEventListener('load', adjustEmbedSize);
    window.addEventListener('resize', adjustEmbedSize);

    // ========== 11. COPY SCENARIO TEXT ON CLICK ==========
    scenarioCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function() {
            const textToCopy = this.textContent;
            const scenarioInfo = {
                'Polite Refusals': 'Practice saying "no" while maintaining relationships',
                'Asking For Help': 'Learn to request assistance clearly and confidently',
                'Giving Compliments': 'Master specific, genuine praise',
                'Setting Boundaries': 'Communicate personal limits respectfully',
                'Communication Skills': 'Active listening and clear expression',
                'Emotional Intelligence': 'Understanding and managing emotions',
                'Building Rapport': 'Creating connections with others',
                'Professional Scenarios': 'Workplace communication and etiquette',
                'Personal Development': 'Self-awareness and growth'
            };
            
            const message = `Try practicing "${textToCopy}" with Milo!\n${scenarioInfo[textToCopy] || ''}`;
            
            navigator.clipboard.writeText(message).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied! ✓';
                this.style.background = 'linear-gradient(to bottom, #c8ffc8, #90ee90)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'linear-gradient(to bottom, rgb(255, 234, 234), rgb(255, 151, 151))';
                }, 1500);
            });
        });
    });

    // ========== 12. PAGE VISIT COUNTER ==========
    if(localStorage.getItem('miloVisits')) {
        const visits = parseInt(localStorage.getItem('miloVisits')) + 1;
        localStorage.setItem('miloVisits', visits.toString());
    } else {
        localStorage.setItem('miloVisits', '1');
    }
});

// ========== 13. ADDITIONAL CSS ENHANCEMENTS ==========
const additionalCSS = `
    /* Enhanced navigation */
    .navigation {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: sticky;
        top: 0;
        z-index: 1000;
    }
    
    .navigation a {
        position: relative;
        transition: color 0.3s ease;
    }
    
    .navigation a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, #ff8585, #9d9bff);
        transition: width 0.3s ease;
    }
    
    .navigation a:hover::after {
        width: 100%;
    }
    
    /* Enhanced headings */
    h3 {
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
    }
    
    h3::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(to right, #9d9bff, #ff8585);
        border-radius: 2px;
    }
    
    /* Better list styling */
    .methods li, .methodology li {
        transition: transform 0.3s ease, padding-left 0.3s ease;
        margin-bottom: 8px;
    }
    
    .methods li:hover, .methodology li:hover {
        transform: translateX(5px);
        padding-left: 5px;
    }
    
    /* Print styles */
    @media print {
        .navigation, .scroll-progress, .background-shapes {
            display: none !important;
        }
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
    
    /* Prevent iframe scroll issues */
    html, body {
        overflow-anchor: none;
    }
    
    .character-ai-embed {
        display: block;
        margin: 0 auto;
    }
`;

const additionalStyle = document.createElement('style');
additionalStyle.textContent = additionalCSS;
document.head.appendChild(additionalStyle);

// ========== 14. CONSOLE GREETING ==========
console.log(`
    ╔══════════════════════════════════════════════════╗
    ║                                                  ║
    ║   🎭 MILO - Soft Skills Chatbot                 ║
    ║   🤖 Character.ai Integration                   ║
    ║   💬 Practice social skills with AI             ║
    ║                                                  ║
    ╚══════════════════════════════════════════════════╝
    
    🔒 Scroll lock active for 3 seconds to prevent
       auto-scroll from Character.ai embed
    
    🎯 Page will always start at top
    ✨ Try clicking on scenario cards!
    
    Visit count: ${localStorage.getItem('miloVisits') || '1'}
`);
