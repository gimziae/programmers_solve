// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let answer = 1;
  let purchase = 0;

  for (let i = 1; i <= count; i++) {
    answer = price * i;
    purchase += answer;
  }
  if (money > purchase) return 0;

  return purchase - money;
}

console.log(solution(3, 20, 4));
