const carMakers = ['ford', 'toyota', 'tesla'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('nissan');

carMakers.map((car: string): string => {
  return car.toUpperCase();
});
