//OOP in JS
// object literal
// const mobil = {
//     merk: "toyota",
//     warna: "putih",
//     nyalakanMobil: function(){
//         console.log(`mobil dengan merek ${this.merk} sudah dinyalakan`)
//     },
// }

// const mobil2 = {
//     merk: "Mazda",
//     warna: "Merah",
//     nyalakanMobil: function(){
//         console.log(`mobil dengan merek ${this.merk} sudah dinyalakan`)
//     },
// }

// mobil.nyalakanMobil();
// mobil2.nyalakanMobil();

// object class
class Mobil {
    constructor(merk, warna){
        this.merk = merk;
        this.warna = warna;
    }
    nyalakanMobil(){
        console.log(`mobil dengan merek ${this.merk} sudah dinyalakan`)
    }
}

// const mobil = new Mobil("Toyota", "Putih");
// const mobil2 = new Mobil("Honda", "Merah");
// mobil.nyalakanMobil();
// mobil2.nyalakanMobil();

//inheritance
class Toyota extends Mobil{
    constructor(merk, warna, mesin){
        super(merk, warna)
        this.mesin = mesin;
    }
    nyalakanMobil(){
        console.log(`mobil dengan merek ${this.merk} dan mesin ${this.mesin} sudah dinyalakan`)
    }
    matikanMobil(){
        console.log(`mobil dengan merek ${this.merk} sudah dimatikan`)
    }
}


const agya = new Toyota("Agya","Putih","1000cc");
const Avanza = new Toyota("Avanza","Hitam","1300cc");

agya.nyalakanMobil();
agya.matikanMobil();
Avanza.nyalakanMobil();