const carMakers = ['ford', 'toyota', 'tesla'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const myCar = carMakers[0];
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
