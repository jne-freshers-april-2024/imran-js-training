const items = [ 
      {name :"TV" , price:100},
      {name :"Mouse" , price:10},
      {name :"Laptop" , price:50},
      {name :"KeyBoard" , price:200},
      {name :"Mobile" , price:150},
      {name :"Charger" , price:300},
      {name :"HeadPhone" , price:250}
]

// Filter Methode
// const filtedIteam = items.filter((item)=>{
//      return item.price <= 200 ;
// })

// console.log(filtedIteam);

// const filtedIteam = items.map((item)=>{
//     return item.name;
// })

// console.log(filtedIteam);


// Find Methode of array

// const foundItems = items.find((item)=>{
//      return item.name === 'Mobile';
// })

// console.log(foundItems);

// items.forEach((item)=>{
//      console.log("Name : "+item.name+"        Price : "+item.price);
// })


// Some methode in array return true or False
// check for one item in array only
// const hasInExpensiveItem = items.some((item)=>{
//       return item.price <=50;
// });

// console.log("InExpensiveItems Present Or Not "+hasInExpensiveItem);



// every methode in array return true or False
// check for each item in array match the condition
// const allAreInExpensiveItem = items.some((item)=>{
//     return item.price <=300;
// });

// console.log("allAreExpensiveItems Present Or Not "+allAreInExpensiveItem);


// Reduce Methode single result 
// instented of for we can use;

// const addAllPrice = items.reduce((totalPrice , item)=>{
//        return item.price + totalPrice;
// },0);

// console.log("Addition of each price of item "+addAllPrice);



// Includes methode check item is present or not in array
// return true or false
const includePrice = items.includes(50);
console.log(includePrice);
