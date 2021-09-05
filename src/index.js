
const { sample, randInt, parseWeeksAgo, parseMonthsAgo, } = require('./utils');
const { GeneratePerson } = require('./person');

(() => {
    const personList = [];
    const namesToMake = 25;

    for (let i = 0; i < namesToMake; i++) {
        personList.push(GeneratePerson('a'/* sample(['a', 'r', 'w']) */, sample(['m', 'f', 'n'])));
        console.dir(personList[i].formalName);
    }
})();