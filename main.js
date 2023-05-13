(() => {
  const showOverlayCheck = document.getElementById("show_overlay");
  const mainButton = document.getElementById("main_btn");
  const circularOverlay = document.getElementById("circular_overlay");

  showOverlayCheck.addEventListener("change", (e) => {
    if (e.currentTarget.checked) {
      mainButton.classList.remove("btn-overflow__hide");
      circularOverlay.classList.add("high-z-index");
    } else {
      mainButton.classList.add("btn-overflow__hide");
      circularOverlay.classList.remove("high-z-index");
    }
  });
})();
