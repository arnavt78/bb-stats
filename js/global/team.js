const setTeam = document.querySelector(".set-team-button");
const teamForm = document.querySelector(".team-form");
const teamImg = document.querySelector(".team-img");

const teamsAndImgs = {
    saints: "./img/teams/Saints.png",
    magic: "./img/teams/Magic.png",
    panthers: "./img/teams/Panthers.png",
    lightning: "./img/teams/Lightning.png",
};

if (!localStorage.getItem("teamImg")) {
    const chooseTeamModal = new bootstrap.Modal(document.querySelector("#team-modal"), {
        keyboard: false,
    }); 

    chooseTeamModal.show();
} else {
    teamImg.setAttribute("src", teamsAndImgs[localStorage.getItem("teamImg")]);
}

setTeam.addEventListener("click", () => {
    Array.from(document.querySelectorAll('[name="team"]')).forEach((ele) => {
        if (ele.checked) {
            teamImg.setAttribute("src", teamsAndImgs[ele.getAttribute("id")]);
            localStorage.setItem("teamImg", ele.getAttribute("id"));
        }
    });
});
