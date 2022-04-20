const saveTeam = document.querySelector(".save-team");

saveTeam.addEventListener("click", () => {
    const team = !TEAM_NAME.value.trim()
        ? prompt("Please enter a team name!", "BB Stats Team")
        : TEAM_NAME.value.trim();

    const names = [];
    const assistNames = document.querySelectorAll(".assist-name");

    Array.from(assistNames).forEach((ele) => {
        names.push(ele.textContent);
    });

    const backendObj = {
        teamName: team,
        players: names,
    };

    db.collection("assist")
        .add(backendObj)
        .then(() => {
            const toast = new bootstrap.Toast(document.querySelector("#save-as-team"));
            toast.show();
        })
        .catch((err) => {
            const toast = new bootstrap.Toast(document.querySelector("#save-as-team-error"));
            toast.show();

            console.log(
                "%cDevelopers: See the error below for troubleshooting!",
                "font-weight: bold;"
            );
            console.log(err);
        });
});
