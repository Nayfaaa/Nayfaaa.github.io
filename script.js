let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Array gambar untuk gallery
let galleryImages = ["perpus1.png", "perpus.png", "data buku.png"];
let currentIndex = 0;

// Buka gallery modal
function openGallery(index) {
  currentIndex = index;
  const modal = document.getElementById('galleryModal');
  const img = document.getElementById('galleryImage');
  img.src = galleryImages[currentIndex];
  modal.style.display = "flex";
}

// Close modal
function closeGallery() {
  document.getElementById('galleryModal').style.display = "none";
}

// Next / Prev Image
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  } else if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  document.getElementById('galleryImage').src = galleryImages[currentIndex];
}

// Close if click outside image
window.onclick = function(event) {
  const modal = document.getElementById('galleryModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

