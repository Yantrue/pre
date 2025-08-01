const titleElement = document.getElementById('title-typing');
const slides = document.querySelectorAll('.nav-item');
const sliderIndicator = document.getElementById('slider-indicator');
const content = document.getElementById('content');

let currentSlide = 'home'; // default

function showSlide(slide) {
  // Set currentSlide
  currentSlide = slide;

  // Highlight active nav item
  slides.forEach(item => {
    if(item.dataset.slide === slide) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  moveSliderIndicator();

  // Animasi fade out
  content.classList.add('fade-out');

  setTimeout(() => {
    // Reset class konten
    content.className = 'content';

    // Isi konten sesuai slide
    if(slide === 'pengenalan'){
      content.innerHTML = `
        <h2>Pengenalan Materi</h2>
        <p>Di sini akan dijelaskan tentang materi yang akan dipelajari di presentasi Myukun.</p>
      `;
    } else if(slide === 'home'){
      content.innerHTML = `
        <h2 class="typing-text">Home</h2>
        <p class="typing-text">Selamat datang di halaman utama presentasi Myukun!</p>
      `;
    } else if(slide === 'siswa'){
      content.innerHTML = `
        <div class="slide-up">
          <h2>Profil Siswa</h2>
          <img src="pict/yori.jpeg" alt="Foto Siswa" style="width:200px; border-radius:10px;"><br><br>
          <p>Nama: Yori</p>
          <p>Kelas: XII TJKT 2</p>
        </div>
      `;
    }

    // Animasi fade in
    content.classList.add('fade-in');
    setTimeout(() => content.classList.remove('fade-in'), 400);

  }, 300);
}

// Fungsi geser slider bar animasi ke item aktif
function moveSliderIndicator(){
  const activeItem = document.querySelector('.nav-item.active');
  if(!activeItem) return;

  const navMenu = document.getElementById('nav-menu');
  const navRect = navMenu.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();

  // Hitung posisi relatif slider terhadap navMenu
  const left = itemRect.left - navRect.left;
  const width = itemRect.width;

  sliderIndicator.style.left = `${left}px`;
  sliderIndicator.style.width = `${width}px`;
  sliderIndicator.style.bottom = '0px';
}

window.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  window.addEventListener('resize', moveSliderIndicator);
});
