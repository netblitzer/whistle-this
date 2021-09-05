// This file generates random people, either in relation to the accused woman or the woman herself.
// Each person has a firstName, lastName, middleName, and generational property.
// The woman being accused also has daysSince, daysInto, and clinic properties.
// Related people have how they're related to the accuser and to the accused.


const { sample, randInt, parseWeeksAgo, parseMonthsAgo, } = require('./utils');

const firstNameF = require('./inputs/firstNameF');
const firstNameM = require('./inputs/firstNameM');
const lastName = require('./inputs/lastName');
const generational = require('./inputs/generational');
const { Clinic } = require('./inputs/clinic');

class Person {
    constructor(
        firstName, 
        middleName, 
        lastName, 
        generational,
        gender,
    ) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.generational = generational;
        this.gender = gender;

        this.isGenerational = generational !== '';
        this.firstInitial = firstName[0];
        this.lastInitial = lastName[0];
        this.middleInitial = middleName !== '' ? middleName[0] : '';
    }

    toString () {
        return `${this.firstName}${this.middleName !== '' ? ` ${this.middleName}` : ''} ${this.lastName}${this.generational !== '' ? ` ${this.generational}` : ''}`;
    }

    get formalName () {
        return this.toString();
    }

    get casualName () {
        const lastNameChance = Math.random() > 0.5;

        return `${this.firstName} ${lastNameChance ? this.lastName : this.lastInitial}`;
    }
};

class RelatedPerson extends Person {
    constructor(
        firstName,
        middleName,
        lastName,
        generational,
        gender,
        relationToAccused,
        relationToWhistle,
    ) {
        super(firstName, middleName, lastName, generational, gender);

        this.relationToAccused = relationToAccused;
        this.relationToWhistle = relationToWhistle;
    }
};

class AccusedWoman extends Person {
    constructor(
        firstName,
        middleName,
        lastName,
        generational,
        gender = 'f',
        daysSince,
        daysInto,
        clinic,
    ) {
        super(firstName, middleName, lastName, generational, gender);

        this.daysSince = daysSince;
        this.daysInto = daysInto;
        this.clinic = clinic;
    }
};


const generateName = (
        gender = 'f',
        options = {
            middleNames,
            isGenerational,
            relationToAccused,
            relationToWhistle,
        },
    ) => {
    // Generate the chances for parts of the name.
    const hasMiddleName = Math.random() > 0.5;
    const isGenerational = isGeneration ? isGeneration : Math.random() < 0.05;
    const generationCount = Math.max(0, Math.min(8, Math.floor(Math.random() * Math.random() * Math.random() * 9)));
    const middleNameCount = middleNames ? middleNames : randInt(1, generationCount + 1);
    
    // Generate the parts of the name.
    const first = `${gender === 'f' ? sample(firstNameF) : gender === 'm' ? sample(firstNameM) : Math.random() > 0.5 ? sample(firstNameF) : sample(firstNameM)}`;
    let middle = '';
    const last = sample(lastName);
    let generation = '';

    if (hasMiddleName) {
        for (let i = 0; i < middleNameCount; i++) {
            const nameChoice = Math.random();
            middle = `${middle}${i > 0 ? ' ' : ''}${nameChoice > 0.65 ? sample(firstNameM) : nameChoice > 0.3 ? sample(firstNameF) : sample(lastName)}`;
        }
    }

    if (isGenerational) {
        generation = `${generational[generationCount][Math.floor(generational[generationCount].length * Math.random())]}`;
    }

    return {
        first,
        middle,
        last,
        generation,
    };
}

const GeneratePerson = (type = 'a', gender = '', middleNames, isGenerational) => {
    
    switch (type) {
        case 'a':
            {
                const gen = gender !== '' ? gender : Math.random() > 0.97 ? 'n' : 'f';
                const nameInfo = generateName(gen, middleNames, isGenerational);
                const daysSince = randInt(5, 360);
                const daysInto = randInt(45, 250);
                const accused = new AccusedWoman(
                    nameInfo.first,
                    nameInfo.middle,
                    nameInfo.last,
                    nameInfo.generation,
                    gen,
                    daysSince,
                    daysInto,
                    new Clinic(),
                );
                return accused;
            }
        default:
        case 'r':
            {
                const genderChance = Math.random();
                const gen = gender !== '' ? gender : genderChance > 0.98 ? 'n' : genderChance > 0.49 ? 'f' : 'm';
                const nameInfo = generateName(gen, middleNames, isGenerational);
                const related = new RelatedPerson(
                    nameInfo.first,
                    nameInfo.middle,
                    nameInfo.last,
                    nameInfo.generation,
                    gen,
                    'work',
                    'work',
                );
                return related;
            }
        case 'w':
            {
                const genderChance = Math.random();
                const gen = gender !== '' ? gender : genderChance > 0.98 ? 'n' : genderChance > 0.49 ? 'f' : 'm';
                const nameInfo = generateName(gen, middleNames, isGenerational);
                const whistle = new Person(
                    nameInfo.first,
                    nameInfo.middle,
                    nameInfo.last,
                    nameInfo.generation,
                    gen,
                );
                return whistle;
            }
    }
}

module.exports = {
    Person,
    RelatedPerson,
    AccusedWoman,
    GeneratePerson,
};