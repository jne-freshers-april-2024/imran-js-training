// Objects literal person

let person = {
     name : "Imran",
     companyDatails : ['Thinkitive Technologies','Baner','Pune','IT'],
     address :{
         pg:"Krishana Priyanaka",
         landmark:"Rohan ispita",
         village:"Phase-I Hinjewadi",
         city:"Pune"
     },
     greets: function(){
          console.log("Good Morning EveryOne");
     },
     age:24
}


console.log("Persons age : "+person.age);
console.log("Persons age use array like syntax : "+person['age']);
console.log("Persons name : "+person.name);

console.log("Person Address : "+JSON.stringify(person.address));

console.log("Persons company details : "+person.companyDatails);

console.log("Message from person : ");
person.greets();

console.log("Access single array elements : ",person.companyDatails[0]);

console.log("Access object data inside it "+person.address.pg+" "+person.address.landmark+"  "+person.address.city);