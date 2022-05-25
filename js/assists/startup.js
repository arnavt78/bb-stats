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

// function notifyMe() {
//     // Let's check if the browser supports notifications
//     if (!("Notification" in window)) {
//         alert("This browser does not support desktop notification");
//     }

//     // Let's check whether notification permissions have already been granted
//     else if (Notification.permission === "granted") {
//         // If it's okay let's create a notification
//         const notification = new Notification("New Update Available", {
//             body: "There's a new update! Click the button below to get the latest features and fixes!",
//         });
//     }

//     // Otherwise, we need to ask the user for permission
//     else if (Notification.permission !== "denied") {
//         Notification.requestPermission().then(function (permission) {
//             // If the user accepts, let's create a notification
//             if (permission === "granted") {
//                 const notification = new Notification("Hi there!");
//             }
//         });
//     }

//     // At last, if the user has denied notifications, and you
//     // want to be respectful there is no need to bother them anymore.
// }

// notifyMe();
