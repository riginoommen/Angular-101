// Regular Function
function isEvenRegular(num) {
    return num % 2 === 0;
  }
  isEvenRegular(24); // => true
  isEvenRegular(11); // => false



// Arrow Function
const isEvenArrow = (num) => {
 return num % 2 === 0;
}
isEvenArrow(10); // => true


// Arrow with return default
const isEven = (num) =>  num % 2 === 0;

isEven(10);