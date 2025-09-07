***Welcome to js note***
<details>
   <summary>Object methods</summary>


<details>
   <summary>Object destructureing</summary>

   ```js
    const parson = {
    Name: "sakib",
    lastName: "Hasan",
    education:{
        degree:"graduate"
    }
    }
    //OBJ distructure এর মাধ্যমে এই parson theke name বের করে নিয়ে আসতে হলে। 
    const { Name, lastName } = parson; 
     // object destructureing এ object এর kye এবং variable এর
    // নাম এক হতে হবে

    // যদি object এর name কে অন্য variable এর store করতে হলে 
    const { Name:title, lastName } = parson; 
    const { education:{degree:x} } = parson; 

    // এরকম হতে পারে যে কোন একটা Object এর কোন একটা property থাকতে ও পারে না ও থাকরে পারে তখন 
    // default value হিসাবে empty object দেওয়া যেতে পারে ফলে error দেখাবে না।
    const { education:{degree} = {}  } = parson;  // object destructureing set default value 
    // education:{OtherName} = {} its return undefind its not throw error
    
    console.log(Name, lastName); 
    console.log(title, lastName); 
    console.log(title, lastName, x); // nested object call 
   ```
</details>

<details>
   <summary>Array destructureing</summary>

   ```js
   const arr = [1, 2, 3, 4];
   const [a, a, c, d] = arr
   console.log(a) // a is 1 and b is 2 .....
   ```
</details>


</details>

<details>
   <summary>Import Export</summary>

  `main.js`
   ```js
  export const a = 10
  export const pi = 3.1416

  const parson = {
    name: "jone",
    age:20
  }
  export default parson
   ```
  `other.js`
   ```js
   import {a, pi} from "./main.js"
   // যদি a and pi কে other variable e store করতে চান তহলে 
   import {a as mya, pi as myPi} from "./main.js"
   // যদি সব একবারে পেতে চান যা যা export করা হয়েছে তাহলে
   import * all from "./main.js"
   //imprt parson named user and other variable in curlybrasis{other...}
   import user { pi, a, ....} from "./main.js"

   console.log(user)
   console.log(all.a)
   console.log(all.pi)
   ```

</details>

<details>
 <summary>String and String method</summary>
</details>