
const sample = (items = []) => {
    if (Array.isArray(items) && items.length > 0) {
        return (items[Math.floor(Math.random() * items.length)]);
    }
    else {
        return items;
    }
};

const randInt = (min = 0, max = 7) => {
    return Math.round(Math.random() * max) + min;
};

const parseWeeksAgo = (daysAgo = 0) => {
    return Math.floor(daysAgo / 7);
};

const parseMonthsAgo = (daysAgo = 0) => {
    return Math.floor(daysAgo / 30);
};

const pronoun = (gender = 'f', cases = 'sub') => {
    switch (cases) {
        default:
        case 'sub':
            return gender === 'f' ? 'she' : gender === 'm' ? 'he' : 'they';
        case 'obj':
            return gender === 'f' ? 'her' : gender === 'm' ? 'him' : 'them';
        case 'pos':
            return gender === 'f' ? 'her' : gender === 'm' ? 'his' : 'their';
        case 'ipos':
            return gender === 'f' ? 'hers' : gender === 'm' ? 'his' : 'theirs';
    }
}

module.exports = {
    sample,
    randInt,
    parseWeeksAgo,
    parseMonthsAgo,
    pronoun,
};