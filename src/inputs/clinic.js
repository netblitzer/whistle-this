const { sample } = require("../utils");

const clinics = [
    {
        name: [
            "Planned Parenthood",
        ],
        location: [
            "140 FM1382 Ste 160",
            "140 FM1382 Ste 160 Ste 160",
            "140 FM1382",
            "140 FM1382 Ste 160, Cedar Hill",
            "140 FM1382 Suite 160, Cedar Hill",
            "140 FM1382 Ste 160 Ste 160, Cedar Hill",
        ],
        city: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "Cedar Hill",
        ],
        county: [
            "Tarrant",
            "Dallas",
        ],
        state: [
            "Texas",
            "TX",
        ],
        zip: 75104,
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood Southeast",
            "Planned Parenthood - Southeast",
            "Southeast Planned Parenthood",
        ],
        location: [
            "3863 Miller Ave",
            "3863 Miller Avenue",
            "3863 Miller Ave, Fort Worth",
            "3863 Miller Avenue, Fort Worth",
        ],
        city: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
        ],
        county: [
            "Tarrant",
            "Dallas",
        ],
        state: [
            "Texas",
            "TX",
        ],
        zip: 76119,
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood at the Plano Health Center",
            "Planned Parenthood - Plano Health Center",
            "Plano Health Center Planned Parenthood",
        ],
        location: [
            "600 N Central Expy Ste 601",
            "600 North Central Expy",
            "600 N Central Expressway",
            "600 North Central Expressway",
        ],
        city: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "Plano",
        ],
        county: [
            "Tarrant",
            "Dallas",
            "Collin",
            "Denton",
        ],
        state: [
            "Texas",
            "TX",
        ],
        zip: 75074,
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood North",
            "Planned Parenthood - North",
            "North Planned Parenthood",
        ],
        location: [
            "9100 N. Central Expwy, #169 #169, Dallas",
            "9100 N. Central Expwy, #169",
            "9100 N. Central Expwy, #169, Dallas",
            "9100 North Central Expwy",
            "9100 N. Central Expressway",
            "9100 North Central Expressway",
            "9100 North Central Expressway, Dallas",
        ],
        city: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
        ],
        county: [
            "Tarrant",
            "Dallas",
        ],
        state: [
            "Texas",
            "TX",
        ],
        zip: 75231
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood at the Bedford Health Center",
            "Planned Parenthood - Bedford Health Center",
            "Bedford Health Center Planned Parenthood",
        ],
        location: [
            "2824 Central Dr Suite 332, Bedford",
            "2824 Central Dr Suite 332",
            "2824 Central Dr Ste 332, Bedford",
            "2824 Central Dr Ste 332",
            "2824 Central Drive Suite 332, Bedford",
            "2824 Central Drive Suite 332, Bedford",
            "2824 Central Dr",
            "2824 Central Drive",
        ],
        city: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "Bedford",
        ],
        county: [
            "Tarrant",
            "Dallas",
        ],
        state: [
            "Texas",
            "TX",
        ],
        zip: 76021,
    },
]

class Clinic {
    constructor () {
        const possible = sample(clinics);

        this.name = sample(possible.name);
        this.location = sample(possible.location);
        this.state = sample(possible.state);
    }


    get fullLocation () {
        return `${this.location}, ${this.state}`;
    }

    get completeName () {
        return `${this.name} ${sample(['at', 'in', ','])} ${this.fullLocation}`;
    }
};

module.exports = {
    Clinic,
};