var censoredWords = ["shit", "fuck", "pussy"];
var customCensoredWords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}

function AddCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;