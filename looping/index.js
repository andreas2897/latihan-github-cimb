// let s = 20;
// count = 0
// for (let i = 1; i <= s; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizzbuzz");
//     count ++
//     if (count == 2)
//     break;
//   } else if (i % 5 == 0) {
//     console.log("buzz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else console.log(i);
// }


for (let i = 0; i <= 5 ; i++) {
    a = ''
    for (let j = 0; j <= 5; j++) {
        limit = 5 - i 
        if (j > limit) 
            a = a + '2'
        else 
            a = a + '1'
        } console.log(a)
    
}