const t1 = 'abcd123.456';
const t2 = 'abcd123.45';
const t3 = 'abcd123.4';
const t4 = 'abcd123';
const t5 = '123.456';

function solution(str) {
  // console.log(str);
  const numbers = str.match(/\d+(\d\+)?/g);
  // console.log(numbers);
  if (!numbers) {
    console.log('not found number');
    return undefined;
  }
  if (numbers.length > 2) {
    console.log('invalid number');
    return undefined;
  }
  if (numbers.length === 1) {
    return numbers[0];
  }

  numbers[1] = numbers[1].slice(0, 2);
  // console.log(numbers);
  return numbers.join('.');
}

console.log(t1, ' -> ', solution(t1));
console.log(t2, ' -> ', solution(t2));
console.log(t3, ' -> ', solution(t3));
console.log(t4, ' -> ', solution(t4));
console.log(t5, ' -> ', solution(t5));