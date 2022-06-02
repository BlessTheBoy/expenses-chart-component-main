// load json file
const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// get all li (graph bar) from the dom
const graphItems = document.querySelectorAll("li");

const highestValue = data.reduce((highest, value) => {
  return highest > value.amount ? highest : value.amount;
}, 0);

// For each graph bar, we'll asign the given data:
graphItems.forEach((graphItem, index) => {
  let values = data[index];
  graphItem.querySelector(".value").textContent = `$${values.amount}`;
  graphItem.querySelector(".candleStick").style.height = `${
    (values.amount / highestValue) * 150
  }px`;

  if (values.amount === highestValue) graphItem.classList.add("active");
});
