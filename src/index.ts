/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
import aVeryBigSum from './aVeryBigSum';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
  const result = aVeryBigSum(testArray);
  console.log('Result: ', result);
}

main();
