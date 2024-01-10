type Board = {
  ladders: [number, number][];
  snakes: [number, number][];
};
const board1: Board = {
  ladders: [
    [3, 39],
    [14, 35],
    [31, 70],
    [44, 65],
    [47, 86],
    [63, 83],
    [71, 93],
  ],
  snakes: [
    [21, 4],
    [30, 8],
    [55, 38],
    [79, 42],
    [87, 54],
    [91, 48],
    [96, 66],
  ],
};

function patternRandom(): number[] {
  let num: number = 0;
  let result: number[] = [];
  do {
    let numRandom: number = parseInt((Math.random() * 6).toFixed(0));
    if (numRandom > 0) {
      result.push(numRandom);
      num += numRandom;
    }
    if (result.length > 5) {
      result = [];
      num = 0;
    }
  } while (num !== 20);
  return result;
}

function quickestPath(board: Board): number[] {
  let winner: number = 0;
  let badNum: number[] = board.snakes.map((arr) => arr[0]);
  let luckNum: number[] = board.ladders.map((arr) => arr[0]);

  let patternNum: number[] = patternRandom();
  do {
    patternNum.forEach((num) => {
      winner += num;
      //ถ้าเจองูให้เปลี่ยน pattern
      if (badNum.filter((badNum) => badNum === winner).length) {
        patternNum = patternRandom();
        winner = 0;
      }
      //ถ้าเจอบันไดให้เพิ่ม
      if (luckNum.filter((luckNum) => luckNum === winner).length > 0) {
        board.ladders.forEach((arr) => {
          if (arr[0] === winner) {
            winner = arr[1];
          }
        });
      }
      if (winner > 100) {
        patternNum = patternRandom();
        winner = 0;
      }
    });
  } while (winner !== 100);

  return patternNum;
}

let re = quickestPath(board1);
console.log(re);
