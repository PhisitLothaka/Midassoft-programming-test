function findStrDuplicate(arr: string[]): string[] {
  let varArr: string[] = [];

  let result: string = "";

  let longStr: string;
  let shortStr: string;

  for (let i = 0; i < arr.length - 1; i++) {
    arr[0].length > arr[i + 1].length
      ? ((longStr = arr[i]), (shortStr = arr[i + 1]))
      : ((shortStr = arr[i]), (longStr = arr[i + 1]));

    for (let n = 0; n < longStr.length; n++) {
      let findIdx: number = longStr.indexOf(shortStr[n]);
      if (findIdx >= 0) {
        result = result.concat(shortStr[n]);
      }
    }

    varArr.push(result);
    result = "";
  }

  return varArr;
}

function getQuestionPart(arr: string[]): string[] {
  let result: string[] = [];
  let newResult: string[] = [];
  result = findStrDuplicate(arr);

  newResult = arr.map((word) => {
    let reduce: string;
    reduce = word.replace(result[0], "");
    return reduce.trim();
  });

  return newResult;
}
