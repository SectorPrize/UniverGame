const data = {
  rating: [
    {
      id: "123",
      name: "Владимир",
      lastName: "Ларионов",
      img: "./male.png",
      points: "463",
    },
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "./male.png",
      points: "521",
    },
    {
      id: "231",
      name: "Вениамин",
      lastName: "Васильев",
      img: "./male.png",
      points: "865",
    },
    {
      id: "321",
      name: "Мария",
      lastName: "Логинова",
      img: "./female.png",
      points: "865",
    },
    {
      id: "492",
      name: "Борис",
      lastName: "Казанцев",
      img: "./male.png",
      points: "784",
    },
    {
      id: "452",
      name: "Полина",
      lastName: "Калинина",
      img: "./female.png",
      points: "225",
    },
    {
      id: "796",
      name: "Даниил",
      lastName: "Воробьёв",
      img: "./male.png",
      points: "642",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "./male.png",
      points: "150",
    },
    {
      id: "1155",
      name: "Иван",
      lastName: "Иванов",
      img: "./male.png",
      points: "100",
    },
    {
      id: "12145",
      name: "Артем",
      lastName: "Алексеев",
      img: "./male.png",
      points: "1000",
    },
  ],
  friends: [
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "./male.png",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "./male.png",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "./female.png",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "./female.png",
    },
  ],
};

let table = document.querySelector(".ratingTable");
let newTable = document.createElement("table");
let tbody = document.createElement("tbody");

let tr = document.createElement("tr");

let th1 = document.createElement("th");
th1.textContent = "Место";
tr.appendChild(th1);

let th2 = document.createElement("th");
th2.textContent = "Имя фамилия";
tr.appendChild(th2);

let th3 = document.createElement("th");
th3.textContent = "Опыт";
tr.appendChild(th3);

tr.style.position = "sticky";
tr.style.top = "0px";

tbody.append(tr);

const sortedData = data.rating
  .map((elem) => ({
    ...elem,
    points: Number(elem.points),
  }))
  .sort((a, b) => b.points - a.points);

let i = 1;

sortedData.forEach((elem) => {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = i++;
  tr.appendChild(td1);

  let td4 = document.createElement("td");
  let img = document.createElement("img");
  img.src = elem.img.replace(/./, "photos");
  td4.appendChild(img);
  tr.appendChild(td4);

  let td2 = document.createElement("td");
  td2.textContent = elem.name;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.textContent = elem.lastName;
  tr.appendChild(td3);

  let td5 = document.createElement("td");
  td5.textContent = elem.points;
  tr.appendChild(td5);

  if (data.friends.find((el) => el.id == elem.id)) {
    tr.classList.add("friendRate");
  }

  tbody.appendChild(tr);
});

newTable.append(tbody);

table.appendChild(newTable);
