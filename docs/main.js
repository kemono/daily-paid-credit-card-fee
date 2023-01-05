"use strict";
exports.__esModule = true;
exports.applyUrlParameter = exports.bindCurrentValue = exports.dailyPaid = void 0;
function dailyPaid(indebteedness, rate) {
    return (indebteedness * rate) / 365;
}
exports.dailyPaid = dailyPaid;
function bindCurrentValue() {
    var indebteedness = Number(document.getElementById('indebteedness').value);
    var rate = Number(document.getElementById('rate').value);
    return document.getElementById('result').value = String(dailyPaid(indebteedness, rate));
}
exports.bindCurrentValue = bindCurrentValue;
function applyUrlParameter() {
    var params = (new URL(window.location.href)).searchParams;
    var indebteedness = params.get('indebteedness');
    if (indebteedness !== undefined) {
        document.getElementById('indebteedness').value = indebteedness;
    }
    var rate = params.get('rate');
    if (rate) {
        document.getElementById('rate').value = rate;
    }
}
exports.applyUrlParameter = applyUrlParameter;
