
// Vad gör ens dethär?  
//     I
//     I  *En pil*
//     V 

function map(arr, func) {
    const searray = arr.lenght

    for (i = 0; i < arr.lenght; i++) {
        secarray[i] = func(arr[i])

    }
    return searray
}

console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = numberArray.map(x => 5 + x)
console.log(newNumberArray) 
console.log(numberArray)    


console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = stringArray.map(str => str.toUpperCase())
console.log(newStringArray) 
console.log(stringArray)    


console.log('\nTEST 3')
const nummer = [12, 5, 9, 48, 56];
const nyttNummer = nummer.map(x => x / 2);
console.log(nummer)
console.log(nyttNummer)
console.log(Math.max(...nummer))
console.log(Math.max(...nyttNummer))
console.log(Math.min(...nummer))
console.log(Math.min(...nyttNummer))
