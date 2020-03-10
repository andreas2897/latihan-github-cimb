// 1. Function utk hapus huruf vocal
let kalimat = "kalimat apa aja boleh";
vokal = kalimat.replace(/[aiueo]/gi, "");

console.log(vokal);

// 2. Function utk sort array string (A-Z dan Z-A)
let arrNama = ["Budi", "joko", "bambang", "hidayat"];

console.log(arrNama.sort());
console.log(arrNama.reverse());

// 3. Function utk sort array integer (0-9 dan 9-0)
let arrAngka = [8, 9, 1, 7, 8, 9];

console.log(arrAngka.sort());
console.log(arrAngka.reverse());

// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
let arrAngkabesar = [8, 10, 1, 7, 8, 9];
let besar = 0;

for (let i = 0; i < arrAngkabesar.length; i++) {
  if (arrAngkabesar[i] > besar) {
    besar = arrAngkabesar[i];
  }
}
console.log(besar);

// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
let arraInput = ["a", 1, "b", 2, "c", 3];
for (let i = 0; i < arraInput.length; i++) {
  if (typeof arraInput[i] === "string") {
    arraInput[i] = null;
  }
}
console.log(arraInput);

// 6. Function untuk hapus huruf awal dan akhir saja
let potong = "purwadika";
console.log(potong.slice(1, -1));
