function decorateRoom(r, g, b) {
  let sorted = [r, g, b].sort((a, b) => b - a);

  let ans = 0;

  let countZero = 0;
  let sumRGB = r + g + b;
  while (countZero < 2 && sumRGB > 2) {
    let newArr = [];

    switch (true) {
      case sorted[0] >= 2:
        const count = Math.min(Math.floor(sorted[0] / 2), sorted[1]);
        newArr = [...newArr, sorted[0] - 2 * count];
        newArr = [...newArr, sorted[1] - count];
        newArr = [...newArr, sorted[2]];
        ans += count;

        break;

      case sorted[0] === 1 && sorted[1] === 1:
        newArr = [0, 0, 0];
        ans++;
        break;

      default:
        break;
    }

    sorted = newArr.sort((a, b) => b - a);
    countZero = sorted.filter((num) => num === 0).length;
    sumRGB = sorted.reduce((a, b) => a + b);
  }

  return ans;
}

const input = [0, 0, 20, 17, 15, 13, 1, 15, 0, 11];
// const input1 = [1, 3, 0, 5, 8, 5];
// const input2 = [2, 4, 6, 7, 9, 9];
// console.log(maximizeSum(input));
// console.log(mettingRoom(input1, input2));
console.log(decorateRoom(2, 1, 3));
