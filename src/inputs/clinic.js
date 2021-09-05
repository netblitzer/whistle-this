const { sample } = require("../utils");

const clinics = [
    {
        name: [
            "Planned Parenthood",
        ],
        location: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "Cedar Hill",
            "140 FM1382 Ste 160",
            "140 FM1382 Ste 160 Ste 160",
            "140 FM1382",
            "140 FM1382 Ste 160, Cedar Hill",
            "140 FM1382 Suite 160, Cedar Hill",
            "140 FM1382 Ste 160 Ste 160, Cedar Hill",
            "75104",
        ],
        state: [
            "Texas",
            "TX",
        ],
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood Southeast",
            "Planned Parenthood - Southeast",
            "Southeast Planned Parenthood",
        ],
        location: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "3863 Miller Ave",
            "3863 Miller Avenue",
            "3863 Miller Ave, Fort Worth",
            "3863 Miller Avenue, Fort Worth",
            "76119",
        ],
        state: [
            "Texas",
            "TX",
        ],
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood at the Plano Health Center",
            "Planned Parenthood - Plano Health Center",
            "Plano Health Center Planned Parenthood",
        ],
        location: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "Plano",
            "600 N Central Expy Ste 601",
            "600 North Central Expy",
            "600 N Central Expressway",
            "600 North Central Expressway",
            "75074",
        ],
        state: [
            "Texas",
            "TX",
        ],
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood North",
            "Planned Parenthood - North",
            "North Planned Parenthood",
        ],
        location: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "9100 N. Central Expwy, #169 #169, Dallas",
            "9100 N. Central Expwy, #169",
            "9100 N. Central Expwy, #169, Dallas",
            "9100 North Central Expwy",
            "9100 N. Central Expressway",
            "9100 North Central Expressway",
            "9100 North Central Expressway, Dallas",
        ],
        state: [
            "Texas",
            "TX",
        ],
    },
    {
        name: [
            "Planned Parenthood",
            "Planned Parenthood at the Bedford Health Center",
            "Planned Parenthood - Bedford Health Center",
            "Bedford Health Center Planned Parenthood",
        ],
        location: [
            "Dallas",
            "DFW",
            "Dallas Fort Worth",
            "Fort Worth",
            "Ft Worth",
            "Ft. Worth",
            "Bedford",
            "2824 Central Dr Suite 332, Bedford",
            "2824 Central Dr Suite 332",
            "2824 Central Dr Ste 332, Bedford",
            "2824 Central Dr Ste 332",
            "2824 Central Drive Suite 332, Bedford",
            "2824 Central Drive Suite 332, Bedford",
            "2824 Central Dr",
            "2824 Central Drive",
            "76021",
        ],
        state: [
            "Texas",
            "TX",
        ],
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