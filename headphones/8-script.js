document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuItems = document.getElementById("menu-items");
  const closeIcon = document.getElementById("close-icon");

  menuIcon.addEventListener("click", function () {
    menuItems.style.display = "block";
    closeIcon.style.visibility = "visible";
    menuIcon.style.visibility = "hidden";
  });

  closeIcon.addEventListener("click", function () {
    menuItems.style.display = "none";
    closeIcon.style.visibility = "hidden";
    menuIcon.style.visibility = "visible";
  });
});
