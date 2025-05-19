document.addEventListener('DOMContentLoaded', () => {
  // Ambil elemen teks loading
  const loadingText = document.querySelector('#loading-text') || document.querySelector('.loading-text');
  const letters = loadingText.querySelectorAll('span');

  // Ambil elemen copyright
  const copyrightElement = document.getElementById('copyright');

  // =============================================
  // 1. Fungsi: Update Tahun Copyright Dinamis
  // =============================================
  function updateCopyright() {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} KielSkuy and Team 8FLC`;
  }

  // Panggil fungsi untuk set nilai awal copyright
  updateCopyright();

  // =============================================
  // 2. Fungsi: Animasi Highlight Huruf Satu-per-satu
  // Highlight dengan ubah opacity tanpa menghilangkan huruf
  // =============================================
  function animateLetterHighlight() {
    let index = 0;

    function highlightNextLetter() {
      // Hapus kelas highlight dari semua elemen
      letters.forEach(letter => letter.classList.remove('highlight'));

      // Tambahkan kelas highlight ke huruf saat ini
      letters[index].classList.add('highlight');

      // Lanjut ke huruf berikutnya
      index = (index + 1) % letters.length;

      // Panggil ulang fungsi
      setTimeout(highlightNextLetter, 200); // Delay per huruf
    }

    highlightNextLetter(); // Mulai animasi
  }

  animateLetterHighlight(); // Jalankan animasi highlight

  // =============================================
  // 3. Efek Saat DONE!
  // =============================================
  setTimeout(() => {
    // Ganti teks menjadi DONE!
    loadingText.innerHTML = 'DONE!';

    // Tambah kelas untuk efek scale
    loadingText.classList.add('done');
  }, 8000); // 8000 ms = 8 detik

  // =============================================
});