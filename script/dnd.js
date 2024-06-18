async function fetchData(file) {
    const response = await fetch(file);
    return response.json();
}

function displayBonus(input) {
    if (input > 0){
        var inputDisplay = '+' + input;
    } else{
        var inputDisplay = input;
    }
    return (inputDisplay);
}

function writeData() {
    if (location.hash) {
        var file = './database/dnd/' + location.hash.replace("#", "") + '.json';
    }
    else {
        var file = './database/dnd/blank.json';
    };

    //https://corcundapt.github.io/CharacterLibrary/database/dnd/broll.json

    fetchData("https://corcundapt.github.io/CharacterLibrary/database/dnd/broll.json").then((data) => {
        console.log(data);

        //Character Main Info (name, level, race, class)
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('level').innerHTML = data.level;
        document.getElementById('race').innerHTML = data.race;
        document.getElementById('class').innerHTML = "Barbarian";
        for (let element of data.class) {
            console.log(element)
        }
        

        //Calculate Modifiers
        var strength_modifier = Math.floor((data.strength - 10) / 2);
        var dexterity_modifier = Math.floor((data.dexterity - 10) / 2);
        var constitution_modifier = Math.floor((data.constitution - 10) / 2);
        var intelligence_modifier = Math.floor((data.intelligence - 10) / 2);
        var wisdom_modifier = Math.floor((data.wisdom - 10) / 2);
        var charisma_modifier = Math.floor((data.charisma - 10) / 2);

        //Character ability scores
        document.getElementById('strength').innerHTML = data.strength + ' (' + displayBonus(strength_modifier) + ')';
        document.getElementById('dexterity').innerHTML = data.dexterity + ' (' + displayBonus(dexterity_modifier) + ')';
        document.getElementById('constitution').innerHTML = data.constitution + ' (' + displayBonus(constitution_modifier) + ')';
        document.getElementById('intelligence').innerHTML = data.intelligence + ' (' + displayBonus(intelligence_modifier) + ')';
        document.getElementById('wisdom').innerHTML = data.wisdom + ' (' + displayBonus(wisdom_modifier) + ')';
        document.getElementById('charisma').innerHTML = data.charisma + ' (' + displayBonus(charisma_modifier) + ')';

        //Calculate Proficiency Bonus
        var proficiencyBonus = Math.ceil((data.level/4)+1);

        //Calculate Saving Throws bonus
        var strength_save = strength_modifier + (proficiencyBonus * data.strength_save);
        var dexterity_save = dexterity_modifier + (proficiencyBonus * data.dexterity_save);
        var constitution_save = constitution_modifier + (proficiencyBonus * data.constitution_save);
        var intelligence_save = intelligence_modifier + (proficiencyBonus * data.intelligence_save);
        var wisdom_save = wisdom_modifier + (proficiencyBonus * data.wisdom_save);
        var charisma_save = charisma_modifier + (proficiencyBonus * data.charisma_save);

        //Character Saving throw bonus
        document.getElementById('strength_save').innerHTML = '(' + displayBonus(strength_save) + ')';
        document.getElementById('dexterity_save').innerHTML = '(' + displayBonus(dexterity_save) + ')';
        document.getElementById('constitution_save').innerHTML = '(' + displayBonus(constitution_save) + ')';
        document.getElementById('intelligence_save').innerHTML = '(' + displayBonus(intelligence_save) + ')';
        document.getElementById('wisdom_save').innerHTML = '(' + displayBonus(wisdom_save) + ')';
        document.getElementById('charisma_save').innerHTML = '(' + displayBonus(charisma_save) + ')';

        //Calculate skill bonus
        var acrobatics = dexterity_modifier + (proficiencyBonus * data.acrobatics);
        var animalHandling = wisdom_modifier + (proficiencyBonus * data.animalHandling);
        var arcana = intelligence_modifier + (proficiencyBonus * data.arcana);
        var athletics = strength_save + (proficiencyBonus * data.athletics);
        var deception = charisma_save + (proficiencyBonus * data.deception);
        var history = intelligence_modifier + (proficiencyBonus * data.history);
        var insight = wisdom_modifier + (proficiencyBonus * data.insight);
        var intimidation = charisma_save + (proficiencyBonus * data.intimidation);
        var investigation = intelligence_save + (proficiencyBonus * data.investigation);
        var medicine = wisdom_modifier + (proficiencyBonus * data.medicine);
        var nature = intelligence_save + (proficiencyBonus * data.nature);
        var perception = wisdom_modifier + (proficiencyBonus * data.perception);
        var performance = charisma_save + (proficiencyBonus * data.performance);
        var persuasion = charisma_save + (proficiencyBonus * data.persuasion);
        var religion = intelligence_save + (proficiencyBonus * data.religion);
        var sleightOfHands = dexterity_save + (proficiencyBonus * data.sleightOfHands);
        var stealth = dexterity_save + (proficiencyBonus * data.stealth);
        var survival = wisdom_modifier + (proficiencyBonus * data.survival);

        //Character skill bonus
        document.getElementById('acrobatics').innerHTML = '(' + displayBonus(acrobatics) + ')';
        document.getElementById('animalHandling').innerHTML = '(' + displayBonus(animalHandling) + ')';
        document.getElementById('arcana').innerHTML = '(' + displayBonus(arcana) + ')';
        document.getElementById('athletics').innerHTML = '(' + displayBonus(athletics) + ')';
        document.getElementById('deception').innerHTML = '(' + displayBonus(deception) + ')';
        document.getElementById('history').innerHTML = '(' + displayBonus(history) + ')';
        document.getElementById('insight').innerHTML = '(' + displayBonus(insight) + ')';
        document.getElementById('intimidation').innerHTML = '(' + displayBonus(intimidation) + ')';
        document.getElementById('investigation').innerHTML = '(' + displayBonus(investigation) + ')';
        document.getElementById('medicine').innerHTML = '(' + displayBonus(medicine) + ')';
        document.getElementById('nature').innerHTML = '(' + displayBonus(nature) + ')';
        document.getElementById('perception').innerHTML = '(' + displayBonus(perception) + ')';
        document.getElementById('performance').innerHTML = '(' + displayBonus(performance) + ')';
        document.getElementById('persuasion').innerHTML = '(' + displayBonus(persuasion) + ')';
        document.getElementById('religion').innerHTML = '(' + displayBonus(religion) + ')';
        document.getElementById('sleightOfHands').innerHTML = '(' + displayBonus(sleightOfHands) + ')';
        document.getElementById('stealth').innerHTML = '(' + displayBonus(stealth) + ')';
        document.getElementById('survival').innerHTML = '(' + displayBonus(survival) + ')';

        //
    });
}
