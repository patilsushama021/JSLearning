let arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`First Element in given array:
    ${arraySeasonalFruits[0]}`);
console.log('************************************************');

const lastElement = arraySeasonalFruits.length - 1;
console.log(`Last Element in given array: 
    ${arraySeasonalFruits[lastElement]}`);
console.log('************************************************');

const addFirst = arraySeasonalFruits.unshift(" Papaya");
console.log(
  `Adding Papaya before Banana in given array:
   ${arraySeasonalFruits}`);
console.log('************************************************');

arraySeasonalFruits.splice(4, 1);
console.log(`Removing Mango in given array: 
    ${arraySeasonalFruits}`);
console.log('************************************************');

arraySeasonalFruits.push(" Pineapple");
console.log(`Adding Pineapple in last in given array:
     ${arraySeasonalFruits}`);
console.log('************************************************');

arraySeasonalFruits.splice(4, 0, " Dragon Fruit");
console.log(
  `Adding Dragon Fruit before Water Melon in given array: 
  ${arraySeasonalFruits}`
);
console.log('************************************************');

arraySeasonalFruits.splice(2, 1, "Kiwi");
console.log(
  `Replacing Orange with Kiwi in given array:
   ${arraySeasonalFruits}`
);
console.log('************************************************');

const subArray = arraySeasonalFruits.slice(1, 5);
console.log(`Log the elements starting from index 1 to 4:
     ${subArray}`);
console.log('************************************************');

let arrayLength = arraySeasonalFruits.length - 3;
console.log(
  `Select last 3 element:  
  ${arraySeasonalFruits.slice(arrayLength)}`
);
