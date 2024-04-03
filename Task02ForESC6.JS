// WE HAVE initalisation condition increament
// for (let i = 1; i < 5; i++) {
//     console.log(i);
//   }

// let j = 1;
//   for (; j < 10; j += 2) {
//     console.log(j);
//   }

// for (let j = 1; ; j += 2) {
//     console.log(j);
//     if (j > 10) {
//       break;
//     }
//   }


//   const loop = ["imran", "bagwan","thinkitive"];

//   for(const c of loop){
//      console.log(c);
//   }

//   const str = "Thinkitive";

//   for(const c of str){
//        console.log(c);
//   }

// How to Define set
//   const myset = new Set([1,2,3,4,5]);

//   for(const c of myset){
//     console.log(c);
//   }


const map = new Map([
      ['a',1],
      ['b',2],
      ['c',3]
])

for(const[key,value] of map){
     console.log(`${key} =>> ${value}`);
}