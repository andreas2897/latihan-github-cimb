// // function namaFunction (a = 0, b = 0) {
// //         let c = a + b
// //         return c
    
// //     }
// // console.log(namaFunction(a, b))
// let sum
// let ratarata
// const array = [80, 80, 50]; 

// // 0-59: F
// // 60-69: D
// // 70-79: C
// // 80-89: B
// // 90-100: A

// console.log(calculateGrade(array));

// function calculateGrade(marks) {
//  let avg =  calculateAverage(marks)


//  if (avg<60){
//     return 'F'
//  }
//  if (avg<70){
//     return 'd'
//  }
//  if (avg<80){
//     return 'c'
//  }
//  if (avg<90){
//     return 'b'
//  }
//  if (avg<100){
//     return 'a'
//  }

// }

// function calculateAverage(array) {
//   for (let i = 0; i < array.length; i++) {
//      sum += array[i]
      
//     }
//     return sum / array.length 
// }

// /*
// Instructions:
// Create 2 functions, A and G.
// A receives an array of integers as an argument,
// calculates the average value of the array, and returns
// a grade based on that average value/score.
// G receives an integer and returns a grade based on that integer.
// Hint:
// Call G inside of A
// Input: [80, 80, 50]
// Output: C
// Input: [90, 90, 85, 72]
// Output: B
// */

function start () {
    return function () {
      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan : "Manjain orang",
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: ['081234', '432108']
          }
        }
      ],4,5]
    }
  }
  console.log(start()()[2][1].kontak.telfon[0])


  /*
  menu di pisah kedalam sebuah function
  add item to cart di pisah dalam suatu function, indexnya di jadiin param
  total price di jadiin function juga
  pembayaran dijadiin function
  buat function yang 
  */