export function caesarCipher(code, shiftCount) {
    let cipher = "";
    
    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        let base;

        if (char >= 'A' && char <= 'Z') {
            base = 65
        } else if (char >= 'a' && char <= 'z') {
            base = 97
        } else {
            cipher += char
            continue;
        }

        const offset = char.charCodeAt(0) - base;
        const shifted = (offset + shiftCount) % 26;
        cipher += String.fromCharCode(shifted + base);
    }

    return cipher;
}
