const request = (type, success) => {
    $.ajax({
        url:"http://localhost:3000/",
        type: type,
        dataType: "json",
        headers: {
            "Access-Control-Allow-Origin": "*" // enable cross requeats
        },
        success: success,
        error: () => {
            console.log("Somting went wrong");
        }
    });
};

const makeRequest = () => {
    request("GET", (res) => {
        document.getElementById("myDiv").innerHTML = res.message;
    });
};