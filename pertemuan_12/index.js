//1
//1a
function mandi(){
    console.log("Mandi");
}

//1b
function sarapan(){
    setTimeout(function (){
        console.log("sarapan tertunda 3 detik");
    }, 3000);
}

//1c
function berangkatsekolah(){
    console.log("Berangkat sekolah");
}

//1d
mandi();
sarapan();
berangkatsekolah();

//1e
function sarapan(callback){
    setTimeout(function (){
        console.log("sarapan tertunda 3 detik");
        callback();
    }, 3000);
}
//1f
mandi();
sarapan(berangkatsekolah);

//2
//2a
function helloworld() {
	return helloworld = new Promise((resolve) => {
		setTimeout(()=> {
			resolve("Hello World");
	    },2000);	
  });
};
    
//2b
async function messages(){
    const msg = await helloworld();
    console.log(msg);
};

//2c
messages();
    
//3
//3a
function ambilDataUser() { 
    
//3b
fetch("https://jsonplaceholder.typicode.com/users") 

//3c
    .then(function callback (response){
        return response.json();
    })

//3d
    .then(function callback (users){
        console.log(users);
    });
}

//3e
ambilDataUser();
