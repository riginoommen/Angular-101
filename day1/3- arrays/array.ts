

// Array Creation
let cars = ["Saab", "Volvo", "BMW"];
let brands = new Array("Saab", "Volvo", "BMW", "Maruti","Ferrari");
cars.push("Benz");

// Array Updation
cars[0]="Tata"; // [“Tata,”Volvo”,”BMW”];
cars.splice(2,1, 'Honda');


// Array Deletion
delete cars[0];
cars.splice(2,1);




cars.map(car => {
    console.log(car,"-Car Series")
});

const ages = [32, 33, 16, 40];

ages.filter(age => age >= 18 );
