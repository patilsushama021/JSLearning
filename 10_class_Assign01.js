// 1. Define a class for Vehicle which should contains.
// Properties or attributes or data members:
// Constructor
// Create 5 objects from Vehicle class and add into array → arrayOfVehicles. 
// Traverse it and log the details with meaning message and not as object.

class Vehicle {
    constructor(vehicleName, mileage, engineType, fuelCapacity, bodyType ){
        this.vehicleName= vehicleName;
        this.mileage= mileage;
        this.engineType= engineType;
        this.fuelCapacity= fuelCapacity;
        this.bodyType= bodyType;
    }
}
const yamaha= new Vehicle("Yamaha R15", "56.87 kmpl", "Liquid cooled", "10 Lit", "Sports Bikes");
const royalEnfield = new Vehicle("Royal Enfield Hunter 350", "36.2 kmpl", "Single cylinder", "13 L", "Cruiser Bikes");
const jupiter = new Vehicle("TVS Jupiter", "50 kmpl", "Single cylinder", "6 L", "scooter");
const dio = new Vehicle("Honda Dio", "55 kmpl", "Fan Cooled", "5.3 L", "scooter");
const activa = new Vehicle("Honda Activa 6G", "50 kmpl", "Fan Cooled", "5.3 L", "scooter");
const arrayOfVehicles= [yamaha, royalEnfield, jupiter, dio, activa];
for (const element of arrayOfVehicles) {
    console.log(
    `Name of vehicle: ${element.vehicleName}, Mileage: ${element.mileage}, 
    Engine Type: ${element.engineType}, Fuel Capacity: ${element.fuelCapacity},
    Body Type: ${element.bodyType}`);   
    console.log(`----------------------------------------------------------------------`);
}

// 2. Define a class for College which must contain
// Properties or attributes or data members:
// Constructor Create 4 objects from College class

class college{
    constructor(collegeName, university, city, type){
        this.collegeName= collegeName;
        this.university= university;
        this.city= city;
        this.type= type;
    }
}
console.log(`***********************************************************************`);
const rit= new college("RIT", "Autonomous University", "ISlampur", "Engineering");
const bharatiVidyapith= new college("Bharati vidyapith", "Bharati Vidypith", "Pune", "Medicle");
const garvare= new college("Mathubai Garware college", "Shivaji University","Sangli", "Bachelor Degree");
const phenolex= new college("Phenolex Academy", "Mumbai University", "Ratnagiri", "Engineering");

// object using for in loop and log the output as [console.log("${key} ${element}`)] 
// 3.1 Call this traverseObject() function by passing one by one object of College class
function traverseObject(Obj){
    for (const key in Obj) {
        if (Object.hasOwnProperty.call(Obj, key)) {
            const element = Obj[key];
            console.log (`${key}, ${element}`);
        }
    }
}
traverseObject(rit);
console.log(`--------------------------------`);
traverseObject(bharatiVidyapith);
console.log(`--------------------------------`);
traverseObject(garvare);
console.log(`--------------------------------`);
traverseObject(phenolex);
console.log(`***********************************************`);

// 4. Find the given number is Prime Number or not? Ex. 11
function primeNumCheck(num){
    
    if(isNaN(num) || num <= 0 || typeof(num)=="string"){
        return`Please enter valid number`;
    } else if(num === 1){
        return`${num} is neither prime number nor composite number`;
    }else if(num===2){
        return`${num} is prime number`;
    }else{
        let count=0;
        for(let i=2; i < num; i++){
            if(num % i === 0){
                count += 1;
            }
        }
        if(count === 0){
            return `${num} is prime number`
        }
    }
    
}
console.log(primeNumCheck(11))