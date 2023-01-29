var addRowButton = document.querySelector("#addRowBtn");
var table = document.querySelector("#table");

addRowButton.addEventListener("click", addrow);

var tablica = [];

function addrow() {
  var tablelength = table.rows.length;

  for (let index = 0; index < time_tab.length; index++) {
    const element = time_tab[index];
    var row = table.insertRow(tablelength);
    var cel1 = row.insertCell(0);
    cel1.innerHTML = element.id;

    var cel2 = row.insertCell(1);
    cel2.innerHTML = element.data;
  }
}

var time_tab = [
  {
    id: 4,
    data: moment().format("YYYY"),
  },
  {
    id: 3,
    data: moment().format("MMMM"),
  },
  {
    id: 2,
    data: moment().format("Do"),
  },
  {
    id: 1,
    data: moment().format("HH:mm:ss"),
  },
];
