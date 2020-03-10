// let benarsalah = true
// if (benarsalah = true) {
//     console.log('AYAM')
// } else {
//     console.log('goreng')
// } 


let intro1 = "angka 1"
let nomor1 = prompt(intro1)

if (nomor1%3 == 0 && nomor1%5 == 0){
    alert('fizz')
} else if (nomor1 % 5 == 0) {
    alert('buzz')
} else if (nomor1 % 3 == 0){
    alert('fizzbuzz')
} else alert(nomor1)