function getQuestionPart(arr: string[]): string[] {
  let varArr: string[] = [];

  let result: string = "";
  let longStr: string;
  let shortStr: string;

  arr[0].length > arr[1].length
    ? ((longStr = arr[0]), (shortStr = arr[2]))
    : ((shortStr = arr[0]), (longStr = arr[2]));

  for (let i = 0; i < shortStr.length; i++) {
    console.log("count ==>", i);
    for (let n = 0; n < longStr.length; n++) {
      if (shortStr[i] === longStr[n]) {
        console.log(i, shortStr[i], "==>", n, longStr[n]);
        if (shortStr[i + 1] === longStr[n + 1]) {
          console.log(i, shortStr[i], "-->", n, longStr[n]);
        }
      }
    }
  }

  console.log("==>", varArr);
  return arr;
}

getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
// getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
