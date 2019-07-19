const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"

function looptyLoop (people, alphabet) {
    let newStr = alphabet.toUpperCase()
    const newArr = []
    for (let i=0; i < people.length; i++) {
        newArr.push(people[i])
        for (let j=0; j<newStr.length; j++) {
            newArr.push(newStr[j])
        }
    }
    return newArr
}

console.log(looptyLoop(people, alphabet))

