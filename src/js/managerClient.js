const fs = require('fs');
const getAppDataPath = require('appdata-path');
const https = require('https');

/*-----[MAIL]-----*/
const mailBox = document.getElementById("mailBox");
async function notifier() {
    mailBox.style.display = "flex";
}

async function closeNotifier() {
    mailBox.style.display = "none";
}
/*-----[MAIL]-----*/

/*-----[SETTINGS]-----*/
const settingsBox = document.getElementById("settings");
async function settings() {
    settingsBox.style.display = "flex";
}

async function closeSettings() {
    settingsBox.style.display = "none";
}
/*-----[SETTINGS]-----*/

/*-----[RAM]-----*/
const rangeSlider = document.getElementById('rangeSlider');
rangeSlider.value = localStorage.getItem('ramMax');

setInterval(() => {
    document.getElementById('rangeValue').innerHTML = rangeSlider.value;
}, 1);

setInterval(() => {
    localStorage.setItem('ramMax', rangeSlider.value);
}, 5);
/*-----[RAM]-----*/

/*-----[NEWS]-----*/
const closeDelta = document.getElementById("closeDelta");
const delta = document.getElementById("deltaBox");

async function beta() {
    delta.style.display = "flex";
}

async function closeBeta() {
    delta.style.display = "none";
}

/*-----[NEWS]-----*/