'user strict';

export default {
    makeId,
    store,
    load,
    getTime,
    getHumanHours,
    getHumanDays
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 10) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getTime(diff) {
    let time = new Date() - (1000 * diff)
    return time
}

function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

function getHumanHours(timestamp) {
    let time = new Date(timestamp).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
    })
    return time
}

function getHumanDays(timestamp) {
    let time = new Date(timestamp).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
    })
    return time
}