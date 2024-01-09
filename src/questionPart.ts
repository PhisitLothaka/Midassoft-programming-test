function findStrDuplicate(arr: string[]): string {
  let varArr: string[] = [];

  let result: string = "";
  let longStr: string;
  let shortStr: string;
  arr[0].length > arr[1].length
    ? ((longStr = arr[0]), (shortStr = arr[1]))
    : ((longStr = arr[1]), (shortStr = arr[0]));

  for (let i = 0; i < shortStr.length; i++) {
    for (let n = 0; n < longStr.length; n++) {
      if (shortStr[i] === longStr[n]) {
        if (
          shortStr[i + 1] === longStr[n + 1] ||
          shortStr[i - 1] === longStr[n - 1]
        ) {
          result = result.concat(longStr[n]);
        }
      }
    }
  }

  return result;
}

function getQuestionPart(arr: string[]): string[] {
  let result: string;
  let newResult: string[] = [];
  result = findStrDuplicate(arr);

  newResult = arr.map((word) => {
    let reduce: string;
    reduce = word.replace(result, "");
    return reduce.trim();
  });

  return newResult;
}
