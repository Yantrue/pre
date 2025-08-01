// Efek ketik berulang di judul
const titleText = "Myukun";
let i = 0;
let forward = true;

function typeLoop() {
    const titleElement = document.getElementById('typed-title');

    if (forward) {
        titleElement.textContent = titleText.slice(0, i++);
        if (i > titleText.length) {
            forward = false;
            setTimeout(typeLoop, 1000); // jeda sebelum hapus
            return;
        }
    } else {
        titleElement.textContent = titleText.slice(0, i--);
        if (i < 0) {
            forward = true;
        }
    }

    setTimeout(typeLoop, 150);
}

typeLoop(); // mulai efek ketik judul

// Fungsi untuk mengganti konten dengan animasi per jenis
function showSlide(slide) {
    const content = document.getElementById('content');

    content.classList.add('fade-out');

    setTimeout(() => {
        content.className = 'content'; // reset class agar animasi bisa diputar ulang

        if (slide === 'pengenalan') {
            content.innerHTML = `
                <h2>Pengenalan Materi</h2>
                <p>Di sini akan dijelaskan tentang materi yang akan dipelajari di presentasi Myukun.</p>
            `;
        } else if (slide === 'home') {
            content.innerHTML = `
                <h2 class="typing-text">Home</h2>
                <p class="typing-text">Selamat datang di halaman utama presentasi Myukun!</p>
            `;
        } else if (slide === 'siswa') {
            content.innerHTML = `
                <div class="slide-up">
                    <h2>Profil Siswa</h2>
                    <img src="pict/yori.jpeg" alt="Foto Siswa" style="width:200px; border-radius:10px;"><br><br>
                    <p>Nama: Yori</p>
                    <p>Kelas: XII TJKT 2</p>
                </div>
            `;
        }

        content.classList.add('fade-in');

        setTimeout(() => {
            content.classList.remove('fade-in');
        }, 400);
    }, 300);
}
