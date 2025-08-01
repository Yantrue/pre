function showSlide(slide) {
    const content = document.getElementById('content');

    // Animasi keluar dulu
    content.classList.add('fade-out');

    setTimeout(() => {
        // Ganti isi kontennya setelah animasi keluar
        if (slide === 'pengenalan') {
            content.innerHTML = `
                <h2>Pengenalan Materi</h2>
                <p>Di sini akan dijelaskan tentang materi yang akan dipelajari di presentasi Myukun.</p>
            `;
        } else if (slide === 'home') {
            content.innerHTML = `
                <h2>Home</h2>
                <p>Selamat datang di halaman utama presentasi Myukun!</p>
            `;
        } else if (slide === 'siswa') {
            content.innerHTML = `
                <h2>Profil Siswa</h2>
                <img src="pict/yori.jpeg" alt="Foto Siswa" style="width:200px; border-radius:10px;"><br><br>
                <p>Nama: Yori</p>
                <p>Kelas: XII TJKT 2</p>
            `;
        }

        // Tambahkan animasi masuk
        content.classList.remove('fade-out');
        content.classList.add('fade-in');

        // Setelah beberapa saat, hapus class fade-in untuk bisa digunakan lagi nanti
        setTimeout(() => {
            content.classList.remove('fade-in');
        }, 400);
    }, 300);
}
