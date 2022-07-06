const {readFile} = require('fs');

const dictionary = new Set();

function verbRoot(word) {
    return ['z', 's', 'r'].includes(word[word.length - 1]) ? word.slice(0, -1) : word;
}

function process(phrase) {
    const words = phrase.toLowerCase().split(' ').map(verbRoot);
    const verbs = [];

    for (const word of words) {
        if (dictionary.has(word)) verbs.push(word);
    }
    return verbs.length > 0 && `${verbs[verbs.length - 1]}-moi l'sac`;
}

readFile('./dictionary.txt', (err, data) => {
    if (err) throw err;
    data.toString().split('\n').forEach(word => {
        dictionary.add(word);
    });
});

module.exports = process;
