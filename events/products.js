let products = [
  { name: "iPhone x", price: 500, qty: 6 },
  { name: "iPhone 11", price: 600, qty: 4 },
  { name: "iPhone 12", price: 700, qty: 2 },
  { name: "iPhone 13", price: 800, qty: 7 },
];

let phoneInputName = document.querySelector("#phoneInputName");
let phoneInputPrice = document.querySelector("#phoneInputPrice");
let phoneInputQty = document.querySelector("#phoneInputQty");

let phoneInputName2 = document.querySelector("#phoneInputName2");
let phoneInputPrice2 = document.querySelector("#phoneInputPrice2");
let phoneInputQty2 = document.querySelector("#phoneInputQty2");

const tbody = document.querySelector("table tbody");

const showProducts = () => {
  tbody.innerHTML = "";
  products.forEach((el, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${el.name}</td>
        <td>${el.price}</td>
        <td>${el.qty}</td>
        <td>
          <div class="d-flex gap-3 align-items-center">
          <button onclick="removePhone(${index})" class="btn btn-danger">Remove</button>
            <button 
              class="btn btn-primary"        
              data-bs-toggle="modal"
              data-bs-target="#editPhoneModal"
              onclick="openEditModal(${index})"
            >Edit</button>
          </div>
        </td>
      </tr>
    `;
  });
};

showProducts();

const removePhone = (index) => {
  // splice (index , noOfElement)
  let acceptRemove = confirm("Are you sure you want to delete this product?");
  if (acceptRemove == true) {
    products.splice(index, 1);
    showProducts();
  }
};

const addNewPhone = () => {
  let newPhone = {
    name: phoneInputName.value,
    price: phoneInputPrice.value,
    qty: phoneInputQty.value,
  };

  products.push(newPhone);
  showProducts();
};

let phoneToEdit = null;

const openEditModal = (index) => {
  phoneToEdit = index;
  let phone = products[index];
  phoneInputName2.value = phone.name;
  phoneInputPrice2.value = phone.price;
  phoneInputQty2.value = phone.qty;
};

const saveEdits = () => {
  let newPhone = {
    name: phoneInputName2.value,
    price: phoneInputPrice2.value,
    qty: phoneInputQty2.value,
  };

  products[phoneToEdit] = newPhone;
  showProducts();
};
