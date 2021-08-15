const request = (path, type, success, data) => {
    $.ajax({
        url:`http://localhost:3000/${path}`,
        type: type,
        dataType: "json",
        data: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Origin": "*" // enable cross requeats
        },
        contentType: "application/json",
        success: success,
        error: () => {
            console.log("Somting went wrong");
        }
    });
};

const addNote = () => {
    const note = document.getElementById("note").value;
    request("addNote", "POST", getNotes, {
        note: note
    });
};

const getNotes = () => {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    request("getNotes", "GET", (results) => {
        for(const result of results) {
            notesList.innerHTML += `<li>${result.note}</li>`;
        }
    });
};