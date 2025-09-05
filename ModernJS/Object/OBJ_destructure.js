const parson = {
    Name: "sakib",
    lastName: "Hasan",
    education:{
        degree: "Graguate"
    }
}
//OBJ distructure এর মাধ্যমে এই parson theke name বের করে নিয়ে আসতে হলে। 
const { Name:title, lastName } = parson;  // object destructureing 
// const { education:{degree:OtherName} } = parson;  // object destructureing 

// এরকম হতে পারে যে কোন একটা Object এর কোন একটা property থাকতে ও পারে না ও থাকরে পারে তখন 
// default value হিসাবে empty object দেওয়া যেতে পারে ফলে error দেখাবে না।
const { education:{degree} = {}  } = parson;  // object destructureing set default value 
// education:{OtherName} = {} its return undefind its not throw error
console.log(title, lastName);
console.log(degree);



// array destructureing
const arr = [1, 2, 3,[200, 500], 4, 5];
const [a, b, c, d] = arr  // a is 1 b is 2 ....
const [, x , ,[e, s] , y] = arr  // skip other array ,,,
console.log(x,y,e)