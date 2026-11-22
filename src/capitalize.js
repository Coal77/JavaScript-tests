export function capitalize(word) {
    let lowerWord = word.toLowerCase();
    let capital = lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1, word.length)

    return capital
}

