function fetchBlank() {
    fetch("./database/dnd/blank.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error ("HTTP error " + response.status);
            }
            return response.json();
        })
        .then((data) =>
            console.log(data))
        .catch(function () {
            dataError = true;
        })
    console.log(data);
}

function fetchData() {
    var file = "./" + location.hash.replace("#", "") + ".json";

    fetch(file)
        .then((response) => {
            if (!response.ok) {
                throw new Error ("HTTP error " + response.status);
            }
            return response.json();
        })
        .then((data) =>
            console.log(data))
        .catch(function () {
            dataError = true;
        })
    return data;
}

function writeData() {
    if (location.hash) {
        var data = fetchData();
    }
    else {
        var data = fetchBlank();
    }

    document.getElementById('name').innerHTML = "name";
    document.getElementById('level').innerHTML = "level";
    document.getElementById('race').innerHTML = "race";
    document.getElementById('class').innerHTML = "class";
}