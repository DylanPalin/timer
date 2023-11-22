const timer = function() {
  let numbers = process.argv.slice(2).map(Number);
  const numbersOrdered = numbers.sort((a, b) => a - b);
  const orderedPositives = numbersOrdered.filter(num => num > 0);
  
  for (let i = 0; i < orderedPositives.length ; i++) {
    if ((!Array) || (isNaN(numbersOrdered[i]))) {
      process.exit();
    }
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(orderedPositives[i] + ' ');
    }, orderedPositives[i] * 1000);
  }
};

timer();