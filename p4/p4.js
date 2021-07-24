// 請把解題函式寫在這個裡面
function solve(arr) {
  // arr[0].value: id=1 值 43
  // arr[0].id: id=1

  var allId = arr.map(function(item) {
    return item.id;
  });

  var NotRepeatingId = allId.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
  // console.log(NotRepeatingId);

  for (let j = 0; j < NotRepeatingId.length; j++) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == NotRepeatingId[j]) {
        console.log('arr[i]', arr[i].id);
        console.log('NotRepeatingId'[j], NotRepeatingId[j]);
        let val = arr[i].value;
        array = newArray.push(val);
      }
    }
    console.log(newArray);
  }
  var allNum = arr.map(function(item) {
    return item.value;
  });
  // console.log(allNum);
  return [];
}

// 事先為你準備好的測驗正確性的函式，如果你很確定不會改壞的話，可以改動
function test() {
  let isCorrect = true;
  for (let i = 0; i < testCases.length; i++) {
    const result = solve(testCases[i].input);
    if (!deepEqual(testCases[i].output, result)) {
      isCorrect = false;
      console.log('Wrong Answer!');
      console.log('預期答案：');
      console.log(JSON.stringify(testCases[i].output));
      console.log('你的答案：');
      console.log(JSON.stringify(result));
      break;
    }
  }
  if (isCorrect) {
    console.log('過關！');
  }

  function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
