document.addEventListener('DOMContentLoaded', function() {
    // Configure the Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Lazy load and animate elements
    const animateOnScroll = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // For lazy-load elements
                if (entry.target.classList.contains('lazy-load')) {
                    entry.target.classList.add('visible');
                }
                
                // For lazy images
                if (entry.target.classList.contains('lazy-img')) {
                    loadImage(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    };

    // Image loading function
    const loadImage = function(image) {
        const src = image.getAttribute('data-src');
        if (!src) return;
        
        const img = new Image();
        img.src = src;
        img.onload = function() {
            image.src = src;
            image.classList.add('loaded');
        };
    };

    // Initialize observers
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    const imageObserver = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe all lazy-load elements
    document.querySelectorAll('.lazy-load').forEach(el => {
        observer.observe(el);
    });

    // Observe all lazy images
    document.querySelectorAll('.lazy-img').forEach(img => {
        // If image is already in viewport, load it immediately
        if (img.getBoundingClientRect().top < window.innerHeight) {
            loadImage(img);
        }
        imageObserver.observe(img);
    });

    // Lazy load background images
    document.querySelectorAll('[style*="background-image"]').forEach(el => {
        const bgUrl = el.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/)[1];
        if (bgUrl) {
            const img = new Image();
            img.src = bgUrl;
            img.onload = function() {
                el.style.backgroundImage = `url('${bgUrl}')`;
            };
        }
    });

    // Preload important images
    const preloadImages = function() {
        const images = document.querySelectorAll('.hero img, .gallery-img:nth-child(-n+3)');
        images.forEach(img => {
            if (img.getAttribute('data-src')) {
                img.src = img.getAttribute('data-src');
            }
        });
    };

    // On load, preload important images
    window.addEventListener('load', preloadImages);
});
  // Script untuk menangani popup notifikasi
        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('notificationPopup');
            const closeBtn = document.getElementById('popupClose');
            const understandBtn = document.getElementById('understandBtn');
            const dontShowAgain = document.getElementById('dontShowAgain');
            const reopenBtn = document.getElementById('reopenPopupBtn');
            
            // Tampilkan popup pertama kali (kecuali jika pengguna memilih "Jangan tampilkan lagi")
            if(!localStorage.getItem('dontShowPopup')) {
                setTimeout(() => {
                    popup.style.display = 'flex';
                }, 1000);
            }
            
            // Fungsi untuk menutup popup
            function closePopup() {
                popup.style.display = 'none';
                // Simpan preferensi pengguna
                if(dontShowAgain.checked) {
                    localStorage.setItem('dontShowPopup', 'true');
                }
            }
            
            // Fungsi untuk membuka popup
            function openPopup() {
                popup.style.display = 'flex';
            }
            
            // Event listeners
            closeBtn.addEventListener('click', closePopup);
            understandBtn.addEventListener('click', closePopup);
            reopenBtn.addEventListener('click', openPopup);
            
            // Tutup ketika klik di luar popup
            popup.addEventListener('click', function(e) {
                if(e.target === popup) {
                    closePopup();
                }
            });
        });
         document.addEventListener('DOMContentLoaded', function() {
        
    });
        
