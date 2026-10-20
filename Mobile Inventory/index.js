const phones = [
  { name: "iPhone x", price: 500, qty: 5 },
  { name: "iPhone 11", price: 500, qty: 5 },
  { name: "iPhone 12", price: 500, qty: 5 },
  { name: "iPhone 13", price: 500, qty: 5 },
];

let table = document.querySelector("table tbody");

let phoneInputName = document.querySelector("#phoneInputName");
let phoneInputPrice = document.querySelector("#phoneInputPrice");
let phoneInputQty = document.querySelector("#phoneInputQty");

// CRUD
// Render
const renderPhones = () => {
  table.innerHTML = "";
  phones.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <th>${index + 1}</th>
            <th>${el.name}</th>
            <th>${el.price} USD</th>
            <th>${el.qty}</th>
        </tr>
    `;
  });
};

const addNewPhone = () => {
  let newPhone = {
    name: phoneInputName.value,
    price: +phoneInputPrice.value,
    qty: +phoneInputQty.value,
  };

  phones.push(newPhone);
  renderPhones();
};
