const listenToPlayer = (name) => {
    const listener = document.querySelector(`.${name}`);

    const listenEvent = (type, add = true) => {
        const event = document.querySelector(`.${name}-${type}`).children[0];
        const total = document.querySelector(`.${name}-total`);

        if (add) {
            event.innerHTML = parseInt(event.innerHTML) + 1;
            total.innerHTML = parseInt(total.innerHTML) + 1;
        } else {
            event.innerHTML = parseInt(event.innerHTML) - 1;
            total.innerHTML = parseInt(total.innerHTML) - 1;
        }
    };

    listener.addEventListener("click", (e) => {
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

        // Great
        else if (eClasses.includes("great-minus")) {
            listenEvent("great", false);
        } else if (eClasses.includes("great-plus")) {
            listenEvent("great", true);
        }
    });
};
