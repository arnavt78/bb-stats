if (localStorage.getItem("teamName")) {
    TEAM_NAME.value = localStorage.getItem("teamName");

    const localTitleToast = new bootstrap.Toast(LOCAL_TITLE);
    localTitleToast.show();
}
