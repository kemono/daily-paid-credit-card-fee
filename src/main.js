"use strict";
exports.__esModule = true;
exports.dailyPaid = void 0;
function dailyPaid(indebteedness, rate) {
    return (indebteedness * rate) / 365;
}
exports.dailyPaid = dailyPaid;
console.log(dailyPaid(3650, 0.1));
