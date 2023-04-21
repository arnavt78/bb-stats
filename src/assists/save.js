SAVE_BUTTON.addEventListener("click", () => {
  if (!TABLE.children[0].className.includes("intro")) {
    sessionStorage.setItem("playerData", TABLE.innerHTML);
  } else {
    sessionStorage.removeItem("playerData");
  }

  localStorage.setItem("teamName", TEAM_NAME.value);

  const toast = new bootstrap.Toast(SUCCESS_TOAST);
  toast.show();
});
