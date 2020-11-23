function filter(arr, func) {
    const secfilt = arr.lenght

    for (i = 0; i < arr.lenght; i++) {
        secfilt[i] = func(arr[i])
    }
    return secfilt
}


const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = numbers.filter(x => x > 10)
console.log(filteredNumbers)

const djur = ["Apa", "Krokodil", "Fisk", "Björn", "Säl", "giraff"]
const shortdjur = djur.filter(djur => djur.length > 5)
console.log(shortdjur)


const tal = [1, 2, 3, 4, 5, 6, 7, 8]
const filttal = tal.filter(tal => tal > 5)
console.log(filttal)