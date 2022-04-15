ADD_PLAYER_BUTTON.addEventListener("click", () => {
    let error = false;

    const name = ADD_PLAYER_NAME.value.trim();
    ADD_PLAYER_NAME.value = "";

    if (document.querySelector(".intro")) {
        document.querySelector(".intro").remove();
    }

    Array.from(NAMES).forEach((ele) => {
        if (ele.innerHTML.toLowerCase() === name.toLowerCase()) {
            INFO.innerHTML = `<span class="text-danger fw-bold"><i class="bi bi-exclamation-circle"></i>&nbsp; The choosen name already exists. Please choose another name.</span>`;
            ADD_PLAYER_NAME.value = name;

            error = true;
        }
    });

    if (error) return;

    const tableCode = `
        <tr class="${name.toLowerCase()}">
            <th scope="row" class="assist-name">${name}</th>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger assists-minus">-</button>
                    <button type="button" class="btn btn-sm btn-light ${name.toLowerCase()}-assists" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success assists-plus">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger potential-minus">-</button>
                    <button type="button" class="btn btn-sm btn-light ${name.toLowerCase()}-potential" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success potential-plus">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger screen-minus">-</button>
                    <button type="button" class="btn btn-sm btn-light ${name.toLowerCase()}-screen" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success screen-plus">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger rebounds-minus">-</button>
                    <button type="button" class="btn btn-sm btn-light ${name.toLowerCase()}-rebounds" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success rebounds-plus">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger steals-minus">-</button>
                    <button type="button" class="btn btn-sm btn-light ${name.toLowerCase()}-steals" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success steals-plus">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger blocks-minus">-</button>
                    <button type="button" class="btn btn-sm btn-light ${name.toLowerCase()}-blocks" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success blocks-plus">+</button>
                </div>
            </td>
            <td><strong class="${name.toLowerCase()}-total">0</strong></td>
            <td>
                <button
                    class="btn btn-sm btn-outline-danger ms-2 delete"
                    title="Delete the player"
                >
                    <i class="bi bi-trash delete"></i>
                </button>
            </td>
        </tr>
    `;
    
    TABLE.innerHTML += tableCode;
    INFO.innerHTML = "";

    const listenToAllPlayers = () => {
        const allPlayers = document.querySelectorAll(".assist-name");

        Array.from(allPlayers).forEach((ele) => {
            listenToPlayer(ele.innerHTML.toLowerCase());
        });
    };

    listenToAllPlayers();
});
