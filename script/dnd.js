function fetchData(file) {
    return fetch(file)
        .then((response) => {
            return response.json().then((data) => {
                console.log(data);
                return data;
            }).catch((error) => {
                console.log(error);
            })
        });
}

function writeData() {
    if (location.hash) {
        var file = './database/dnd/' + location.hash.replace("#", "") + '.json';
    }
    else {
        var file = './database/dnd/blank.json';
    };

    let jsonData;

    fetchData(file).then((data) => {
        jsonData = data;
    })

    document.getElementById('name').innerHTML = jsonData.name;
    document.getElementById('level').innerHTML = jsonData.level;
    document.getElementById('race').innerHTML = jsonData.race;
    document.getElementById('class').innerHTML = jsonData.class;
}
