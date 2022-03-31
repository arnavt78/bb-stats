const saveButton = document.querySelector(".save");
const successToast = document.querySelector(".successToast");

saveButton.addEventListener("click", () => {
    localStorage.setItem("saveData", "Hi! I'm temporary!");

    const toast = new bootstrap.Toast(successToast);
    toast.show();
});
