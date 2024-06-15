function writeData() {
    if (location.hash) {
        var file = "./database/dnd/" + location.hash.replace("#", "") + ".json";
    }
    else {
        var file = "./database/dnd/blank.json";
    }

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

    document.getElementById('name').innerHTML = data.name;
    document.getElementById('level').innerHTML = data.leve;
    document.getElementById('race').innerHTML = data.race;
    document.getElementById('class').innerHTML = data.class;
}