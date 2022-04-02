const saveButton = document.querySelector(".save");
const successToast = document.querySelector("#save-success");
const teamName = document.querySelector(".team-name");

saveButton.addEventListener("click", () => {
    const data = {};

    sessionStorage.setItem("playerData", JSON.stringify(data));
    localStorage.setItem("teamName", teamName.value);

    const toast = new bootstrap.Toast(successToast);
    toast.show();
});
