document.querySelectorAll("#closeWindow").forEach((e) => {
  e.addEventListener("click", () => {
    window.close();
  });
});
