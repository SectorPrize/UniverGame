let bigArr = [];
document
  .getElementById("backGround")
  .addEventListener("click", function (event) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    let arr = [x, y];
    bigArr.push(arr);
    console.log(x, y);
    console.log(bigArr);
  });

let obj = {};
setTimeout(function () {
  for (i = 1; i <= bigArr.length; i++) {
    obj[i] = bigArr[i - 1];
  }
  console.log(obj);
}, 90000);

/*
console.log(player.clientHeight);

console.log(player.clientWidth);

console.log(obj);
console.log(player);
*/

const checkpoints = {
  1: [351, 473],
  2: [278, 518],
  3: [188, 538],
  4: [110, 510],
  5: [123, 444],
  6: [142, 388],
  7: [211, 351],
  8: [174, 282],
  9: [137, 229],
  10: [200, 193],
  11: [256, 243],
  12: [297, 206],
  13: [332, 157],
  14: [372, 110],
  15: [422, 38],
  16: [504, 79],
  17: [462, 149],
  18: [486, 222],
  19: [458, 300],
  20: [385, 348],
  21: [378, 412],
  22: [451, 428],
  23: [524, 466],
  24: [621, 500],
  25: [719, 522],
  26: [811, 471],
  27: [883, 422],
  28: [946, 385],
  29: [960, 314],
  30: [905, 289],
  31: [841, 326],
  32: [782, 362],
  33: [723, 352],
  34: [727, 296],
  35: [796, 258],
  36: [807, 190],
  37: [748, 179],
  38: [678, 216],
  39: [626, 256],
  40: [581, 303],
  41: [521, 285],
  42: [508, 231],
  43: [546, 176],
  44: [586, 142],
  45: [614, 84],
  46: [646, 32],
  47: [699, 59],
  48: [674, 138],
  49: [752, 84],
  50: [822, 140],
  51: [868, 105],
  52: [886, 173],
};
