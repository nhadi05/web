//deklarasi pilihan 1 pakai const
const nama = "nurhadi";
//deklarasi pilihan 2 pakai let
let usia = 10;

//memanggil
console.log(nama);
console.log(usia);

//memanggil dan menggabung cara 1
console.log(`nama saya adalah ${nama} dan saya berumur ${usia} tahun`);
//memanggil dan menggabung cara 2
console.log("nama saya adalah", nama, "dan saya berusia", usia, "tahun");

//function 1
function generateBiodata() {
  if (usia == 30) {
    //kondisi pertama
    console.log("anda dewasa");
  } else {
    //kondisi selain pertama
    console.log("anda manuasia apaan yah");
  }

  console.log(`nama saya adalah ${nama} dan saya berumur ${usia} tahun`);
}

generateBiodata();

//function 2
function generateBiodat() {
  if (usia > 10 && usia < 18) {
    //kondisi pertama
    console.log("anda remaja");
  } else if ((usia) => 18 && usia <= 30) {
    console.log("anda dewasa");
  } else if (usia > 2 && usia < 10) {
    console.log("anda anak-anak");
  } else if (usia < 2) {
    console.log("anda bayi");
  } else {
    //kondisi selain pertama
    console.log("anda manusia apaan yah");
  }
}

generateBiodat();

//function 3

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBio() {
  let generasi;

  if (usia >= 10 && usia <= 18) {
    //kondisi pertama
    generasi = "generasi remaja";
  } else if (usia >= 18 && usia <= 30) {
    generasi = "generasi dewasa";
  } else if (usia >= 2 && usia <= 10) {
    generasi = "generasi anak-anak";
  } else if (usia < 2) {
    generasi = "generasi bayi";
  } else {
    //kondisi selain pertama
    generasi = "anda generasi apaan yah";
  }

  return (biodata.innerHTML = generasi);
}

generateBio();
