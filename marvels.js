//datatype - Array

// const superHeroes = ['superman' , 'spiderman' , 'Capt. America' , 'thor']

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2]);
// console.log(superHeroes[superHeroes.length - 1]);

// console.log(`We have ${superHeroes.length - 1} super heroes`);


const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'Nine'

// console.log(numbers);

// start

// console.log(numbers.shift());
// console.log(numbers);

// numbers.unshift('nine')
// console.log(numbers);

// end

// console.log("the element to be deleted is : " + numbers.pop());
// console.log(numbers);

// numbers.push('Seven')
// console.log(numbers);

// middle

numbers.splice( 2 , 1 , 'replace');
console.log(numbers);