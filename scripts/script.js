let girl = document.querySelector(".girl");

let univer = document.querySelector(".univer");
let btn = document.querySelector(".btnGeneral");

let rating = document.querySelector(".rating");
let btnRatingEsc = document.querySelector(".btnRatingEsc");
let btnRating = document.querySelector(".btnRating");

let friend = document.querySelector(".friend");
let btnFrLf = document.querySelector(".btnFriendTapeLeft");
let btnFrRg = document.querySelector(".btnFriendTapeRight");

let count = 0;
function move() {
  if (count < 52) {
    count += 1;
    girl.classList.add("girlMove");
    girl.addEventListener("animationstart", () => {
      girl.style.left = `${checkpoints[count][0] - girl.clientWidth / 2}px`;
      girl.style.top = `${checkpoints[count][1] - girl.clientHeight + 3.5}px`;
      this.removeEventListener("click", move);
    });

    girl.addEventListener("animationend", () => {
      girl.classList.remove("girlMove");
      this.addEventListener("click", move);
    });
  }
}

btn.addEventListener("click", move);

btnRating.addEventListener("click", () => {
  rating.classList.toggle("show");
  univer.classList.toggle("down");
});
btnRatingEsc.addEventListener("click", () => {
  rating.classList.toggle("show");
  univer.classList.toggle("down");
});

let friendsList = friend.querySelectorAll("li");
let friendEmpt = friendsList.length - 8;

let slide = 0;
btnFrLf.addEventListener("click", () => {
  if (slide > 0) {
    slide -= 60;
    friend.style.left = `-${slide}px`;
    friendEmpt = friendEmpt + 1;
  }
});
btnFrRg.addEventListener("click", () => {
  if (friendEmpt > 0) {
    slide += 60;
    friend.style.left = `-${slide}px`;
    friendEmpt = friendEmpt - 1;
  }
});

const checkpoints = {
  1: [351, 473],
  2: [278, 518],
  3: [188, 538],
  4: [110, 510],
  5: [123, 444],
  6: [142, 388],
  7: [215, 353],
  8: [174, 282],
  9: [137, 229],
  10: [202, 193],
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
  44: [588, 142],
  45: [614, 84],
  46: [646, 32],
  47: [699, 59],
  48: [674, 138],
  49: [752, 84],
  50: [822, 140],
  51: [868, 105],
  52: [886, 173],
};
