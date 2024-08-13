// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//for photo dynamic
document.addEventListener("DOMContentLoaded", function() {
  const galleryContainer = document.querySelector('.gallery-container1');
  const imageFolder = 'img/Gallery/Project Butwal/'; // Path to your images folder
  const imageNames = [
      'photo1.jpg',
      'photo2.jpg',
      'photo3.jpg',
      // Add more file names as needed
  ];

  imageNames.forEach(function(imageName) {
      const imgElement = document.createElement('img');
      imgElement.src = imageFolder + imageName;
      imgElement.alt = imageName.split('.')[0]; // Set alt text based on file name
      galleryContainer.appendChild(imgElement);
  });
});