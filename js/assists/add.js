ADD_PLAYER_BUTTON.addEventListener("click", () => {
    let error = false;

    const name = ADD_PLAYER_NAME.value;
    ADD_PLAYER_NAME.value = "";

    Array.from(NAMES).forEach((ele) => {
        if (ele.innerHTML.toLowerCase() === name.toLowerCase()) {
            INFO.innerHTML = `<span class="text-danger fw-bold"><i class="bi bi-exclamation-circle"></i>&nbsp; The choosen name already exists. Please choose another name.</span>`;
            ADD_PLAYER_NAME.value = name;

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
    TABLE.innerHTML += tableCode;

    INFO.innerHTML = "";
});
