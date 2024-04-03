


let aaa=1001;
while(aaa !=0){
    //console.log("Enter a num1");
    let az = prompt("Enter a num1");

    // console.log("Enter a num2");
    // let ay = window.prompt();

    // console.log("0:Exist 1:mul 2:add 3:substract 4:div 5:modul");
    //  aaa = window.prompt();
    switch(aaa){
        case 1:
            let ap= az * ay;
            console.log(`Multiply of ${az} and ${ay} is ${ap}`);
            break;
        case 2:
            let af= az + ay;
            console.log(`Addition of ${az} and ${ay} is ${af}`);
            break;
        case 3:
            let ao= az - ay;
            console.log(`Sunstraction of ${az} and ${ay} is ${ao}`);
            break;
        case 4:
            let ai= az / ay;
            console.log(`Division of ${az} and ${ay} is ${ai}`);
            break;
        case 4:
            let au= az % ay;
            console.log(`modul of ${az} and ${ay} is ${au}`);
            break;
        default : 
            console.log("Enter a correct choice");
            break;      
    }
}






