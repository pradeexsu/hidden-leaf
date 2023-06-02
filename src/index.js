import uniqueRandomArray from "unique-random-array";
import shinobi from "./shinobi.js";

module.exports = {
    all: shinobi,
    random: uniqueRandomArray(shinobi)
};
