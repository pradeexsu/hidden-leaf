
const shinobi = require("./shinobi.json")
const {uniqueRandomArray} = require('unique-random-array')

module.exports = {
    all: shinobi,
    random: ()=>uniqueRandomArray(shinobi)
}