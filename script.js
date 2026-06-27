/* ======================================================
   INTRO ANIMATION
====================================================== */

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const website = document.getElementById("website");
    const bg = document.querySelector(".intro-bg");

    // Memulai animasi tulisan
    setTimeout(() => {
        intro.classList.add("start");
    }, 200);

    // Background berubah menjadi gelap
    setTimeout(() => {
        bg.style.background =
        "radial-gradient(circle at center,#23374b,#0d1722)";
    }, 1300);

    // Sedikit zoom pada lingkaran
    setTimeout(() => {

        const circle = document.querySelector(".circle");

        circle.style.transition = "1s ease";

        circle.style.filter = "blur(25px)";

    },1700);

    // Efek flash sebelum website muncul
    setTimeout(() => {

        intro.style.transform = "scale(1.04)";
        intro.style.transition = ".8s ease";

    },3500);

    // Fade Out Intro
    setTimeout(() => {

        intro.classList.add("hide");

    },4300);

    // Website muncul
    setTimeout(() => {

        website.classList.add("show");

    },4700);

    // Hapus intro agar ringan
    setTimeout(() => {

        intro.remove();

    },6000);

});

// ==================== TYPED EFFECT (ANIMASI MENGETIK) ====================
const typed = new Typed('.text', {
    strings: ['Student', 'Student at Satya Terra Bhinneka University'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ------------------------- MODAL BOX UNTUK CV ----------------------------
function openCvModal() {
    document.getElementById('cvModal').style.display = 'flex';
}

function closeCvModal() {
    document.getElementById('cvModal').style.display = 'none';
}

// Menutup modal jika user klik di luar gambar CV
window.onclick = function(event) {
    const modal = document.getElementById('cvModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ***************************** ACTIVE LINK NAVBAR SAAT SCROLL ******************************
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


// CERTIFICATAE

// OPEN POPUP
function openCertificate(imageSrc){

    document.getElementById("certificatePopup").style.display = "flex";

    document.getElementById("popupImage").src = imageSrc;
}

// CLOSE POPUP
function closeCertificate(){

    document.getElementById("certificatePopup").style.display = "none";
}

// Inisialisasi EmailJS tetap wajib ditaruh di paling atas
emailjs.init("wTrckj_njlioAOZ-M");

// 1. Ambil elemen tombol submit di dalam form (kita beri id 'submitBtn' di penjelasan bawah)
const btn = document.getElementById('submitBtn');

// 2. Gunakan ID 'commentForm' sesuai yang tertulis di HTML kamu
document.getElementById('commentForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   // Mengubah teks tombol saat proses pengiriman berlangsung
   // Karena menggunakan tag <button>, kita ubah textContent-nya, bukan .value
   btn.textContent = 'Sending...';
   btn.disabled = true; // Menonaktifkan tombol sementara agar tidak diklik dua kali

   // Gunakan serviceID dan templateID kamu yang aktif
   const serviceID = '101108'; // Menggunakan Service ID kamu yang sebelumnya
   const templateID = 'template_btcc5th';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Kirim Pesan';
      btn.disabled = false;
      alert('Pesan berhasil dikirim!');
      
      // Mengosongkan form kembali setelah sukses
      this.reset(); 
    }, (err) => {
      btn.textContent = 'Kirim Pesan';
      btn.disabled = false;
      alert('Gagal mengirim: ' + JSON.stringify(err));
    });
});

