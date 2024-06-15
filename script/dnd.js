async function fetchData(file) {
    try {
        const response = await fetch('./database/dnd/blank.json');
        if(!response.ok) {
            throw new Error ("HTTP error " + response.status);
        }
        const data = await response.json();
        console.log(data);
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

    fetchData('./database/dnd/blank.json');

    document.getElementById('name').innerHTML = "a";
    document.getElementById('level').innerHTML = "a";
    document.getElementById('race').innerHTML = "a";
    document.getElementById('class').innerHTML = "a";
}