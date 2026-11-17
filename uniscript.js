// ______________________profile dropdown for all pages_____________________

const menuButton = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const profileButton = document.getElementById("profileButton");
const profileDropdown = document.getElementById("profileDropdown");

profileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  profileDropdown.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (
    !profileButton.contains(event.target) &&
    !profileDropdown.contains(event.target)
  ) {
    profileDropdown.classList.remove("show");
  }
});

menuButton.addEventListener("click", (e) => {
  sidebar.classList.toggle("open");
});


// ______________________Dashboard Script___________________


