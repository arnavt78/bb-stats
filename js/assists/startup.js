const localTitle = document.querySelector("#local-title-info");

if (localStorage.getItem("teamName")) {
    document.querySelector(".team-name").value = localStorage.getItem("teamName");

    const localTitleToast = new bootstrap.Toast(localTitle);
    localTitleToast.show();
}
