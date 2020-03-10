// kalo make char at ga usah di split
// kalo make index of di split

// const alphaValue = (str) => {
//     let alArray ='abcdefghijk'.split('')
//     // str = str.split('')
//     // let result = 0


// for (let i = 0; i < str.length; i++) {

// result += (alArray.indexOf(str.charAt(i)) + 1)

// }
// return result
// }

// console.log(alphaValue('abc'))

// const alphaReplace = (str) => {
//     let alArray ='abcdefghijk'.split('')
//     // str = str.split('')
//     let result = ''


// for (let i = 0; i < str.length; i++) {

// result += (alArray.indexOf(str.charAt(i)) + 1).toString()

// }
// return result
// }

// console.log(alphaReplace('abc'))
// class Product {
//     constructor(nama, harga){
//     this.nama = nama
//     this.harga = harga
//     }
// }

// const searchProductName = str => {
//     return arr.filter((value) => value.nama.toLowerCase().includes(str.toLowerCase()))
// }

// function filterProductPrice(a, b) {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].harga >= a && arr[i].harga <= b ) {
//            console.log(arr[i])
//     }
//     }
//     }

// let arr = [
//     new Product('apel', 2000),
//     new Product('apple', 5000),
//     new Product('mangga', 1000),
//     new Product('jeruk', 10000),
// ]
// console.log(searchProductName('ma'))
// filterProductPrice(2000, 10000)
let arrangka = [-7,5,2,-2,1,-13]
let resultPos = 0
let resultNeg = 0

for (let i = 0; i < arrangka.length; i++) {
    if (arrangka[i] > 0) {
        resultPos += arrangka[i]
    } else {
        resultNeg += arrangka[i]
    }
}
arrResult = [resultPos, resultNeg]

console.log(arrResult)
