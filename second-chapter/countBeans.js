function countChar(text, char) {
    if (text.includes(char)) {
        let charQuantity = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === char) {
                charQuantity++
            }
        }

        return charQuantity
    }

    return 0
}

function countBs(text) {
    return countChar(text, 'B')
}

console.log(countBs('Bom dia aBigos da rede gloBo'))