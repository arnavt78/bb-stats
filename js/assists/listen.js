const listenToPlayer = (name) => {
    const listener = document.querySelector(`.${name}`);

    const listenEvent = (type, add = true) => {
        const event = document.querySelector(`.${name}-${type}`).children[0];
        const total = document.querySelector(`.${name}-total`);

        if (add) {
            event.innerHTML = parseInt(event.innerHTML) + 1;
            
            total.innerHTML = parseInt(document.querySelector(`.${name}-assists`).children[0].innerHTML) + parseInt(document.querySelector(`.${name}-potential`).children[0].innerHTML);
        } else {
            event.innerHTML = parseInt(event.innerHTML) - 1;
            
            total.innerHTML = parseInt(document.querySelector(`.${name}-assists`).children[0].innerHTML) + parseInt(document.querySelector(`.${name}-potential`).children[0].innerHTML);
        }
    };

    const deletePlayer = () => {
        if (confirm("Are you sure you want to delete this player? This action is irreversible!")) {
            listener.removeEventListener("click", eventListener);
            listener.remove();

            if (!TABLE.innerHTML.trim()) {
                TABLE.innerHTML = `
                    <tr class="intro">
                        <td colspan="9">
                            <p class="text-center m-3">
                                It looks like you've removed all of your players! Click the <i>Add
                                New Player</i> button to get started, or, if your team already exists,
                                click <i>Import Team</i>.
                            </p>
                        </td>
                    </tr>
                `;
            }
        }
    };

    const eventListener = (e) => {
        const eClasses = e.target.className;

        // Assists
        if (eClasses.includes("assists-minus")) {
            listenEvent("assists", false);
        } else if (eClasses.includes("assists-plus")) {
            listenEvent("assists", true);
        }

        // Potential
        else if (eClasses.includes("potential-minus")) {
            listenEvent("potential", false);
        } else if (eClasses.includes("potential-plus")) {
            listenEvent("potential", true);
        }

        // Screen
        else if (eClasses.includes("screen-minus")) {
            listenEvent("screen", false);
        } else if (eClasses.includes("screen-plus")) {
            listenEvent("screen", true);
        }

        // Rebounds
        else if (eClasses.includes("rebounds-minus")) {
            listenEvent("rebounds", false);
        } else if (eClasses.includes("rebounds-plus")) {
            listenEvent("rebounds", true);
        }

        // Steals
        else if (eClasses.includes("steals-minus")) {
            listenEvent("steals", false);
        } else if (eClasses.includes("steals-plus")) {
            listenEvent("steals", true);
        }

        // Blocks
        else if (eClasses.includes("blocks-minus")) {
            listenEvent("blocks", false);
        } else if (eClasses.includes("blocks-plus")) {
            listenEvent("blocks", true);
        }

        // Delete Player
        if (e.target.className.includes("delete")) {
            deletePlayer();
        }
    }

    listener.addEventListener("click", eventListener);
};
