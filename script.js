// script.js

function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Optional: Close popup when clicking outside the content
window.addEventListener('click', function (event) {
  const popup = document.getElementById('popup');
  const content = document.querySelector('.popup-content');

  if (event.target === popup) {
    popup.style.display = 'none';
  }
});