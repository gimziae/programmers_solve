// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  let answer = [];

  // x , num
  // x, x+1, x+2, ... x+(num-1) = total
  // x(1+2+3+ ... +(num - 1))= total
  // x = total / 1+2+3+ ... (num -1)
  // 등차수열의 합 total = num(a + ( a + num - 1 ))/2
  // 2total = num(2a+num-1)
  // 2total/num = 2a +num -1
  // 2total/num +1 - num = 2a
  // a = total/num + 1-num/2

  let a = total / num + (1 - num) / 2;

  for (let i = 0; i < num; i++) {
    answer.push(a + i);
  }

  return answer;
}

console.log('test1', solution(4, 14));
console.log('test2', solution(5, 5));
console.log('test2', solution(5, 15));
