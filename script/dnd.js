async function fetchData(file) {
    try {
        const response = await fetch('./database/dnd/blank.json');
        if(!response.ok) {
            throw new Error ("HTTP error " + response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.log(error);
    }

}

function writeData() {
    if (location.hash) {
        var file = './database/dnd/' + location.hash.replace("#", "") + '.json';
    }
    else {
        var file = './database/dnd/blank.json';
    };

    data = fetchData('./database/dnd/blank.json');

    document.getElementById('name').innerHTML = data.name;
    document.getElementById('level').innerHTML = data.level;
    document.getElementById('race').innerHTML = data.race;
    document.getElementById('class').innerHTML = data.class;
}
