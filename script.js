const titleElement = document.getElementById('typed-title');
const titleText = "yukun";
let index = 0;

function typeTitleOnce() {
    if (index <= titleText.length) {
        titleElement.textContent = titleText.slice(0, index++);
        setTimeout(typeTitleOnce, 200);
    }
}
typeTitleOnce();

function showSlide(slide) {
    const content = document.getElementById('content');
    const slides = document.querySelectorAll('.slide');

    // Hapus class active semua slide
    slides.forEach(s => s.classList.remove('active'));

    // Tambah class active ke slide yg dipilih
    slides.forEach(s => {
        if(s.textContent.toLowerCase().includes(slide)) {
            s.classList.add('active');
        }
    });

    content.classList.add('fade-out');

    setTimeout(() => {
        content.className = 'content'; // reset class ke default dengan border

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

window.addEventListener('DOMContentLoaded', () => {
    showSlide('home');
});
