
`I drove ${name} to the clinic. I'm a ${rideShare} driver.`
`I rode with ${name} to the clinic during a ${rideShare} pool.`

const { sample, randInt, parseWeeksAgo, parseMonthsAgo, } = require('./utils');


const GenerateStory = (
    person = {
        firstName: "Karen",
        lastName: "Evilson",
        middleName: "",
        generational: "the 666th",
        abortionDaysAgo: 50,
        abortionDaysInto: 75,
    }, clinic = {name: "Fake Parent", address: "123 Street", state: "Texas"}) => {
    
}

module.exports = {
    GenerateStory,
};