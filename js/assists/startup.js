if (sessionStorage.getItem("playerData")) {
    TABLE.innerHTML = sessionStorage.getItem("playerData");

    const listenToAllPlayers = () => {
        const allPlayers = document.querySelectorAll(".assist-name");

        Array.from(allPlayers).forEach((ele) => {
            listenToPlayer(ele.innerHTML.toLowerCase());
        });
    };

    listenToAllPlayers();
}

if (localStorage.getItem("teamName")) {
    TEAM_NAME.value = localStorage.getItem("teamName");
}

const localTitleToast = new bootstrap.Toast(LOCAL_TITLE);
localTitleToast.show();
