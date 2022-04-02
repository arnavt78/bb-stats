SAVE_BUTTON.addEventListener("click", () => {
    const data = {};

    sessionStorage.setItem("playerData", JSON.stringify(data));
    localStorage.setItem("teamName", TEAM_NAME.value);

    const toast = new bootstrap.Toast(SUCCESS_TOAST);
    toast.show();
});
