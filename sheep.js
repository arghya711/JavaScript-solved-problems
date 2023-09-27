const sheep_Array = [true, false, true, true,
                     false, true, false, true,
                     true, false, true, true,
                     false, true, false, true];

function count(array) {
  let sheepCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      sheepCount++;
    }
  }
  return sheepCount;
}

const total_Sheep = count(sheep_Array);
console.log(`Total number of sheep: ${total_Sheep}`);
