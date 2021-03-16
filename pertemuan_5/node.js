//Array Built Method
let arr = [1,2,3,4,5];
for (let i=0; i<arr.length; i++) {
    console.log (arr[i]);
}
 //ARRAY FOR EACH
arr.forEach(function(value,index,array){
    value *=2;
    console.log('value : ' + value +', index : ' +index + ',array :' +array)
})

//Map
let output = arr.map(function(value){
    return value*=2;
})

console.log("Array arr :" ,arr);
console.log("Array Output :" ,output);

//
let users = [
    {
        fullName: "John Doe",
        age: 33,
        adress: "Manado",
    },
    {
        fullName: "Septiano Tumulo",
        age: 18,
        adress: "Airmadidi",
    },
    {
        fullName: "Rivo Tumulo",
        age: 18,
        adress: "sawangan",

    },
];

let selectUsers=users.map(function (users) {
    return users.fullName;
});

console.log("Daftar Users",selectUsers);

//FILTER
let filterUser = users.filter(function(users){
    return users.address ==="Airmadidi";
});

console.log("filter user :",filterUser);