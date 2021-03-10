//1a
class Orang1{
    //1b
        constructor(nama, umur){
            this.nama = nama;
            this.umur = umur;
        }
    //1c
        bekerja(){
            console.log(`${this.nama} sedang bekerja seperti biasa`)
        }
    }
    //1d
    user1 = new Orang1("Rivo", "18");
    //1e
    user1.bekerja()
    
    //2
    //2a
    class Orang2 {
        constructor(nama, umur){
            this.nama = nama;
            this.umur = umur;
        }
    //2b
        tidur(){
            console.log(`${this.nama} sedang tidur`)
        }
        makan(){
            console.log(`${this.nama} sedang makan`)
        }
    }
    //2c
    class pelajar extends Orang2{
    //2d
        constructor(nama, umur, namaSekolah){
    //2e
            super(nama, umur)
    //2f & 2g
            this.namaSekolah = namaSekolah;
        }
    //2h
        belajar(){
            console.log(`${this.nama} belajar di ${this.namaSekolah}`)
        }
    }
    //2i
    const mahasiswa1 = new pelajar("John","17","Unklab");
    //2j
    mahasiswa1.belajar();
    mahasiswa1.makan();
    mahasiswa1.tidur();