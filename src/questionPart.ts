function getQuestionPart(arr: string[]): string[] {
  const phrases1: string = arr[0];
  const phrases2: string = arr[2];
  console.log(phrases1 + " , " + phrases2);
  const objResult: { idx: number[]; var: string[] } = { idx: [], var: [] };
  let result: string;

  for (let i = 0; i < phrases1.length; i++) {
    for (let n = 0; n < phrases2.length; n++) {
      if (phrases1[i] === phrases2[n]) {
        console.log(`${phrases1[i]},${i}===>${phrases2[n]},${n}`);
        objResult?.idx.push(n - i);
        objResult?.var.push(phrases1[i]);
      }
    }
  }
  // for (let count = 0; count < objResult?.idx.length; count++) {
  //   if (objResult.idx[count] === objResult.idx[count + 1]) {
  //     // result += ;
  //     console.log("getresut ", objResult.var[count]);
  //   }
  // }
  let test = objResult.idx.filter(
    (el, idx) => objResult.idx[idx] === objResult.idx[idx + 1]
  );
  console.log(objResult);
  console.log(test);
  return arr;
}
getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
