// key always be string or sysmbole
// using object simualte map


let imran = {name: 'Imran Bagwan'},
    rushi = {name: 'rushi kadu'},
    gaurav = {name: 'gaurav'};


let userRoles = new Map();

console.log(userRoles);
console.log(userRoles instanceof Map);

console.log(typeof(userRoles));

userRoles.set(imran,'Trainee Software Engineer');

userRoles.set(rushi ,'Trainee SDE')
.set(gaurav,'SDE');

console.log(userRoles);


console.log(userRoles.get(imran));

console.log(userRoles.has(imran));

console.log(userRoles.size);



for(const user of userRoles.keys()){
     console.log(user);
}

for(let role of userRoles.values()){
    console.log(role);
}

for(let data of userRoles.entries()){
    console.log(`${data[0].name} : ${data[1]}`);
}


userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

let roles = [...userRoles.values()];
console.log(roles);

userRoles.delete(imran);

userRoles.clear();

console.log("Size of userRole : "+userRoles.size);
