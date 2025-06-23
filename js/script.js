  // Student data with bios
        const students = [
           {
        "id": 0,
        "name": "Wakhid Nurhadi S.Pd",
        "class": "Wali Kelas",
        "avatar": "guru/foto-guru/23.JPG",
        "bio": "Bapak Wakhid Nurhadi, atau yang akrab dipanggil Pak Wakhid, adalah wali kelas 9A yang dikenal dengan gaya mengajarnya yang unik dan berbeda dari guru lainnya. Beliau bukan hanya seorang pendidik, tapi juga seseorang yang benar-benar memahami kondisi murid-muridnya. Cara beliau mengajar selalu penuh inovasi, membuat suasana kelas jadi lebih hidup dan menyenangkan. Lebih dari sekadar guru, beliau adalah figur yang mengayomi dan selalu berusaha memberikan yang terbaik untuk setiap siswa.  "
    },
    {
        "id": 1,
        "name": "Arfia Bunga Jelita",
        "class": "IX A",
        "avatar": "foto/img1.JPG",
        "bio": ""
    },
    {
        "id": 2,
        "name": "Bagus Adrian Ramadhani",
        "class": "IX A",
        "avatar": "foto/img2.JPG",
        "bio": ""
    },
    {
        "id": 3,
        "name": "Chika Dyah Permata",
        "class": "IX A",
        "avatar": "foto/img3.JPG",
        "bio": ""
    },
    {
        "id": 4,
        "name": "Dafa Prakoso",
        "class": "IX A",
        "avatar": "foto/img4.JPG",
        "bio": ""
    },
    {
        "id": 5,
        "name": "Danian Nova Pratama",
        "class": "IX A",
        "avatar": "foto/img5.JPG",
        "bio": ""
    },
    {
        "id": 6,
        "name": "Deva Nur Hayati",
        "class": "IX A",
        "avatar": "foto/img6.JPG",
        "bio": ""
    },
    {
        "id": 7,
        "name": "Devianto Eka Wahyu Pratama",
        "class": "IX A",
        "avatar": "foto/img7.JPG",
        "bio": ""
    },
    {
        "id": 8,
        "name": "Dwi Sakti Nugraha",
        "class": "IX A",
        "avatar": "foto/img8.JPG",
        "bio": ""
    },
    {
        "id": 9,
        "name": "Firman Pratama",
        "class": "IX A",
        "avatar": "foto/img9.JPG",
        "bio": ""
    },
    {
        "id": 10,
        "name": "Gatra Bangkit Ardian",
        "class": "IX A",
        "avatar": "foto/img10.JPG",
        "bio": ""
    },
    {
        "id": 11,
        "name": "Giska Erra Fazira",
        "class": "IX A",
        "avatar": "foto/img11.JPG",
        "bio": ""
    },
    {
        "id": 12,
        "name": "Haris Setiyawan",
        "class": "IX A",
        "avatar": "foto/img12.JPG",
        "bio": ""
    },
    {
        "id": 13,
        "name": "Ilham Maulana",
        "class": "IX A",
        "avatar": "foto/img13.JPG",
        "bio": ""
    },
    {
        "id": 14,
        "name": "Irma Nur Azizah",
        "class": "IX A",
        "avatar": "foto/img14.JPG",
        "bio": ""
    },
    {
        "id": 15,
        "name": "Ivan Setiawan",
        "class": "IX A",
        "avatar": "foto/img15.JPG",
        "bio": ""
    },
    {
        "id": 16,
        "name": "Juan Faizal Halim",
        "class": "IX A",
        "avatar": "foto/img16.JPG",
        "bio": ""
    },
    {
        "id": 17,
        "name": "Leni Cahya Rini",
        "class": "IX A",
        "avatar": "foto/img17.JPG",
        "bio": ""
    },
    {
        "id": 18,
        "name": "Makhayna Syifa Wijayanti",
        "class": "IX A",
        "avatar": "foto/img18.JPG",
        "bio": ""
    },
    {
        "id": 19,
        "name": "Maura Alika Ramadhani",
        "class": "IX A",
        "avatar": "foto/img19.JPG",
        "bio": ""
    },
    {
        "id": 20,
        "name": "Mohammad Aris Febriyanto",
        "class": "IX A",
        "avatar": "foto/img20.JPG",
        "bio": ""
    },
    {
        "id": 21,
        "name": "Muhammad Alfin Nugroho",
        "class": "IX A",
        "avatar": "foto/img21.JPG",
        "bio": ""
    },
    {
        "id": 22,
        "name": "Nadia Vega Maharani",
        "class": "IX A",
        "avatar": "foto/img22.JPG",
        "bio": ""
    },
    {
        "id": 23,
        "name": "Riky Ahmad Sarifudin",
        "class": "IX A",
        "avatar": "foto/img23.JPG",
        "bio": ""
    },
    {
        "id": 24,
        "name": "Rizky Mustafa Afrino",
        "class": "IX A",
        "avatar": "guru/foto-guru/r.png",
        "bio": "Eh, ada yang kepo yaa? 😄 Hehe, becanda kok!  By the way, sedikit info aja nih... Website ini dibuat langsung oleh saya sendiri loh!, Walau ada bantuan ai-nya,heheheee."
    },
    {
        "id": 25,
        "name": "Safa Eriana Eriantika",
        "class": "IX A",
        "avatar": "foto/img25.JPG",
        "bio": ""
    },
    {
        "id": 26,
        "name": "Sahid Hidayatullah",
        "class": "IX A",
        "avatar": "foto/img26.JPG",
        "bio": ""
    },
    {
        "id": 27,
        "name": "Yanuar Faiz Putra Eriyanto",
        "class": "IX A",
        "avatar": "foto/img27.JPG",
        "bio": ""
    },
    {
        "id": 28,
        "name": "Yunita Dhia Zahrani",
        "class": "IX A",
        "avatar": "foto/img28.JPG",
        "bio": ""
    },
    {
        "id": 29,
        "name": "Zahrotus Syifa",
        "class": "IX A",
        "avatar": "foto/img29.JPG",
        "bio": ""
    }
];
  document.getElementById("downloadPhotoBtn").addEventListener("click", function () {
    const img = document.getElementById("bioAvatar");
    const url = img.src;
    const nama = document.getElementById("bioName").textContent || "foto";

    const a = document.createElement("a");
    a.href = url;
    a.download = `${nama.replace(/\s+/g, "_")}.png`; // Bisa diubah ke .png kalau mau
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Alert setelah download
    alert(`hore foto ${nama} berhasil diunduh!`);
});
  
        // Dark Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');
        
        // Check for saved user preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            if (currentTheme === 'dark-mode') {
                icon.classList.replace('fa-moon', 'fa-sun');
            }
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', '');
            }
        });
        
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const menuOverlay = document.getElementById('menuOverlay');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            menuOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            menuOverlay.classList.remove('show');
            document.body.style.overflow = '';
        });
        
        menuOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            menuOverlay.classList.remove('show');
            document.body.style.overflow = '';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                menuOverlay.classList.remove('show');
                document.body.style.overflow = '';
            });
        });
        
        // Student Search Functionality
        const studentSearch = document.getElementById('studentSearch');
        const searchResults = document.getElementById('searchResults');
        const studentBio = document.getElementById('studentBio');
        const bioOverlay = document.getElementById('bioOverlay');
        const bioClose = document.getElementById('bioClose');
        
        studentSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm.length > 0) {
                const filteredStudents = students.filter(student => 
                    student.name.toLowerCase().includes(searchTerm)
                );
                
                displaySearchResults(filteredStudents);
            } else {
                searchResults.classList.remove('show');
            }
        });
        
        function displaySearchResults(results) {
            searchResults.innerHTML = '';
            
            if (results.length > 0) {
                results.forEach(student => {
                    const studentItem = document.createElement('div');
                    studentItem.className = 'student-item';
                    studentItem.innerHTML = `
                        <img src="${student.avatar}" alt="${student.name}" class="student-avatar">
                        <div class="student-info">
                            <h4 class="student-name">${student.name}</h4>
                            <p class="student-class">${student.class}</p>
                        </div>
                    `;
                    
                    // Add click event to show bio
                    studentItem.addEventListener('click', () => {
                        showStudentBio(student);
                    });
                    
                    searchResults.appendChild(studentItem);
                });
                searchResults.classList.add('show');
            } else {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.textContent = 'Hmmm... nama itu nggak ketemu nih 😬 Cek lagi ejaannya, siapa tahu typo-kan. Coba lagi, yaa!';
                searchResults.appendChild(noResults);
                searchResults.classList.add('show');
            }
        }
        
        function showStudentBio(student) {
            document.getElementById('bioAvatar').src = student.avatar;
            document.getElementById('bioName').textContent = student.name;
            document.getElementById('bioClass').textContent = student.class;
            document.getElementById('bioContent').textContent = student.bio;
            
            studentBio.classList.add('show');
            bioOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        // Close bio popup
        bioClose.addEventListener('click', () => {
            studentBio.classList.remove('show');
            bioOverlay.classList.remove('show');
            document.body.style.overflow = '';
        });
        
        bioOverlay.addEventListener('click', () => {
            studentBio.classList.remove('show');
            bioOverlay.classList.remove('show');
            document.body.style.overflow = '';
        });
        
        // Scroll Animation
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.timeline-item, .gallery-item, .team-member, .quote-card, .achievement-card').forEach(item => {
            observer.observe(item);
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without refreshing
                    history.pushState(null, null, targetId);
                }
            });
        });
        
        // Add more floating particles dynamically
        const particlesContainer = document.querySelector('.particles');
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 200 + 100;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 15;
            const color = i % 2 === 0 ? 'var(--primary-light)' : 'rgba(255, 159, 159, 0.1)';
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${posY}%`;
            particle.style.left = `${posX}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
            
            particlesContainer.appendChild(particle);
        }

        // Fix for mobile viewport height issue
        function setViewportHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);

        // Quote carousel functionality
        document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.quote-carousel');
            const prevBtn = document.querySelector('.carousel-control.prev');
            const nextBtn = document.querySelector('.carousel-control.next');
            const cards = document.querySelectorAll('.quote-card');
            const cardWidth = cards[0].offsetWidth + 25; // including gap
            
            let isDown = false;
            let startX;
            let scrollLeft;
            
            // Button navigation
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            });
            
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });
            
            // Touch/swipe functionality
            carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            });
            
            carousel.addEventListener('mouseleave', () => {
                isDown = false;
            });
            
            carousel.addEventListener('mouseup', () => {
                isDown = false;
            });
            
            carousel.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;
            });
            
            // Touch events for mobile
            carousel.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            });
            
            carousel.addEventListener('touchend', () => {
                isDown = false;
            });
            
            carousel.addEventListener('touchmove', (e) => {
                if(!isDown) return;
                const x = e.touches[0].pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;
            });
            // Animated counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the faster
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target + '+';
        }
    });
}

// Start counters when section is in view
const statsSection = document.querySelector('.stats-section');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}
   });
   // Music Player with Error Handling - No Autoplay
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const backgroundMusic = document.getElementById('backgroundMusic');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playbackMode = document.getElementById('playbackMode');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingAlbum = document.getElementById('nowPlayingAlbum');
const songCounter = document.getElementById('songCounter');
const timeCurrent = document.getElementById('timeCurrent');
const timeTotal = document.getElementById('timeTotal');
const playlistItems = document.querySelectorAll('.playlist-item');
const leftReel = document.querySelector('.left-reel');
const rightReel = document.querySelector('.right-reel');
const vintagePlayer = document.querySelector('.vintage-player');
const musicStatus = document.getElementById('musicStatus');

let isMusicPlaying = false;
let currentSongIndex = 0;
let repeatMode = 'all';
let isLoading = false;

// Playlist data
const songs = [
    {
        src: "music/iwan.mp3",
        title: "Jendela Kelas 1 - Iwan Fals",
        album: "Album Kenangan IX A",
        duration: "3:34"
    },
    {
        src: "music/untuk-kita.mp3",
        title: "Untuk Kita - The Overtunes",
        album: "Album Kenangan IX A",
        duration: "4:12"
    },
    {
        src: "music/see-you-again.mp3",
        title: "See You Again - Wiz Khalifa",
        album: "Album Kenangan IX A",
        duration: "3:58"
    },
    {
        src: "music/graduation.mp3",
        title: "Graduation - Vitamin C",
        album: "Album Kenangan IX A",
        duration: "4:15"
    },
    {
        src: "music/best-day-of-my-life.mp3",
        title: "Best Day Of My Life - American Authors",
        album: "Album Kenangan IX A",
        duration: "3:20"
    }
];

// Initialize player
function initPlayer() {
    // Load volume from localStorage or use default 70%
    const savedVolume = localStorage.getItem('musicVolume');
    volumeSlider.value = savedVolume || 0.7;
    backgroundMusic.volume = volumeSlider.value;
    
    // Load first song metadata (without playing)
    loadSong(currentSongIndex, false);
    updatePlaylistUI();
    updateSongCounter();
    
    // Show play button initially
    musicIcon.className = 'fas fa-play';
    musicStatus.textContent = '';
}

// Load song
function loadSong(index, autoplay = false) {
    const song = songs[index];
    
    // Show loading state
    isLoading = true;
    musicToggle.classList.add('disabled');
    musicStatus.innerHTML = '<div class="loading-spinner"></div> Memuat lagu...';
    
    // Reset audio element
    backgroundMusic.src = '';
    backgroundMusic.load();
    
    // Set new source
    backgroundMusic.src = song.src;
    nowPlayingTitle.textContent = song.title;
    nowPlayingAlbum.textContent = song.album;
    timeTotal.textContent = song.duration;
    
    // Update active playlist item
    playlistItems.forEach(item => item.classList.remove('active'));
    playlistItems[index].classList.add('active');
    
    let initialLoad = true;
    // Scroll to active item
  if (!initialLoad) {
    playlistItems[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}
    
    // When metadata is loaded
    backgroundMusic.addEventListener('loadedmetadata', () => {
        isLoading = false;
        musicToggle.classList.remove('disabled');
        musicStatus.textContent = '';
        
        if (autoplay) {
            playSong();
        }
    }, { once: true });
    
    // Error handling
    backgroundMusic.addEventListener('error', () => {
        isLoading = false;
        musicToggle.classList.remove('disabled');
        musicStatus.textContent = 'Gagal memuat lagu. Coba lagi nanti.';
        console.error(`Error loading: ${song.src}`);
    }, { once: true });
}

// Play song with error handling
function playSong() {
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                musicIcon.className = 'fas fa-pause';
                vintagePlayer.classList.add('music-playing');
                isMusicPlaying = true;
                musicStatus.textContent = '';
            })
            .catch(error => {
                musicIcon.className = 'fas fa-play';
                vintagePlayer.classList.remove('music-playing');
                isMusicPlaying = false;
                musicStatus.textContent = 'Interaksi diperlukan untuk memutar musik. Klik tombol play.';
                console.error("Playback failed:", error);
            });
    }
}

// Pause song
function pauseSong() {
    backgroundMusic.pause();
    musicIcon.className = 'fas fa-play';
    vintagePlayer.classList.remove('music-playing');
    isMusicPlaying = false;
    musicStatus.textContent = '';
}

// Previous song
function prevSong() {
    if (isLoading) return;
    
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex, isMusicPlaying);
    updateSongCounter();
}

// Next song
function nextSong() {
    if (isLoading) return;
    
    if (repeatMode === 'one') {
        backgroundMusic.currentTime = 0;
        if (isMusicPlaying) playSong();
        return;
    }
    
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
        if (repeatMode === 'none') {
            pauseSong();
            return;
        }
    }
    loadSong(currentSongIndex, isMusicPlaying);
    updateSongCounter();
}

// Update progress bar
function updateProgress() {
    if (isLoading) return;
    
    const { currentTime, duration } = backgroundMusic;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
    
    // Update current time
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    timeCurrent.textContent = `${currentMinutes}:${currentSeconds}`;
}

// Set progress when clicked
function setProgress() {
    if (isLoading || !isMusicPlaying) return;
    
    const progressPercent = progressBar.value;
    const duration = backgroundMusic.duration;
    backgroundMusic.currentTime = (progressPercent / 100) * duration;
}

// Update playlist UI
function updatePlaylistUI() {
    playlistItems.forEach((item, index) => {
        item.setAttribute('data-src', songs[index].src);
        item.setAttribute('data-title', songs[index].title);
        item.setAttribute('data-album', songs[index].album);
        item.querySelector('.playlist-title').textContent = songs[index].title;
        item.querySelector('.playlist-duration').textContent = songs[index].duration;
    });
}

// Update song counter
function updateSongCounter() {
    songCounter.textContent = `${currentSongIndex + 1}/${songs.length}`;
}

// Toggle repeat mode
function toggleRepeatMode() {
    const modes = ['all', 'one', 'none'];
    const icons = ['fa-redo', 'fa-redo-alt', 'fa-times'];
    const titles = ['Repeat All', 'Repeat One', 'No Repeat'];
    
    const currentModeIndex = modes.indexOf(repeatMode);
    const nextModeIndex = (currentModeIndex + 1) % modes.length;
    
    repeatMode = modes[nextModeIndex];
    playbackMode.innerHTML = `<i class="fas ${icons[nextModeIndex]}" title="${titles[nextModeIndex]}"></i>`;
}

// Event listeners
musicToggle.addEventListener('click', function() {
    if (isLoading) return;
    
    if (!backgroundMusic.src) {
        loadSong(currentSongIndex, true);
    } else {
        isMusicPlaying ? pauseSong() : playSong();
    }
});

volumeSlider.addEventListener('input', function() {
    backgroundMusic.volume = this.value;
    localStorage.setItem('musicVolume', this.value);
});

progressBar.addEventListener('input', setProgress);

backgroundMusic.addEventListener('timeupdate', updateProgress);

backgroundMusic.addEventListener('ended', nextSong);

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);

playbackMode.addEventListener('click', toggleRepeatMode);

// Click on playlist item
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (isLoading) return;
        
        currentSongIndex = index;
        loadSong(currentSongIndex, isMusicPlaying);
        updateSongCounter();
    });
});

// Initialize player
initPlayer();
initialLoad = false;
