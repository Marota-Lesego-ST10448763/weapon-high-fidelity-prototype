function showScreen(screenName, activeNavName) {
  const screens = document.querySelectorAll(".screen");
  const navButtons = document.querySelectorAll(".nav");

  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  navButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  const selectedScreen = document.getElementById(screenName);

  if (selectedScreen) {
    selectedScreen.classList.add("active");
  }

  const selectedNav = document.getElementById("nav-" + activeNavName);

  if (selectedNav) {
    selectedNav.classList.add("active");
  }
}

function toast(message) {
  const toastBox = document.getElementById("toast");

  toastBox.textContent = message;
  toastBox.classList.add("show");

  setTimeout(function () {
    toastBox.classList.remove("show");
  }, 2200);
}