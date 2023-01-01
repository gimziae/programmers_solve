const common = [1, 2, 3, 4];

function solution(common) {
  let answer = 0;
  const first = common[1] - common[0];
  const second = common[2] - common[1];
  const ratio = common[1] / common[0];
  let arrLen = common.length;

  // 등차수열
  if (first === second) {
    const lastEl = common[arrLen - 1] + first;
    answer = lastEl;
  }
  // 등비수열
  if (first !== second) {
    const lastEl = common[arrLen - 1] * ratio;
    answer = lastEl;
  }
  return answer;
}
