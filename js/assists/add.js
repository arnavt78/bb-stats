const table = document.querySelector(".assists-players");
const names = document.querySelectorAll(".assist-name");
const info = document.querySelector(".info");
const addPlayerButton = document.querySelector(".add-player-button");
const addPlayerName = document.querySelector(".add-player-name");

addPlayerButton.addEventListener("click", () => {
    let error = false;

    const name = addPlayerName.value;
    addPlayerName.value = "";

    Array.from(names).forEach((ele) => {
        if (ele.innerHTML.toLowerCase() === name.toLowerCase()) {
            info.innerHTML = `<span class="text-danger fw-bold"><i class="bi bi-exclamation-circle"></i>&nbsp; The choosen name already exists. Please choose another name.</span>`;
            addPlayerName.value = name;

            error = true;
        }
    });

    if (error) return;

    const tableCode = `
        <tr>
            <th scope="row" class="assist-name">${name}</th>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger">-</button>
                    <button type="button" class="btn btn-sm btn-light" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger">-</button>
                    <button type="button" class="btn btn-sm btn-light" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger">-</button>
                    <button type="button" class="btn btn-sm btn-light" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success">+</button>
                </div>
            </td>
            <td>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-danger">-</button>
                    <button type="button" class="btn btn-sm btn-light" disabled>
                        <strong>0</strong>
                    </button>
                    <button type="button" class="btn btn-sm btn-success">+</button>
                </div>
            </td>
            <td><strong>0</strong></td>
            <td>
                <button
                    class="btn btn-sm btn-outline-danger ms-2 delete ${name}"
                    title="Delete the player"
                >
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `;
    table.innerHTML += tableCode;

    info.innerHTML = "";
});
