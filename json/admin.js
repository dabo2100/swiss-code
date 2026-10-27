let productsJSON = localStorage.getItem("products");
let products = JSON.parse(productsJSON);
let tbody = document.querySelector("table tbody");

let hasLogged = localStorage.getItem("hasLogged");

if (!hasLogged) {
  window.location.href = "./login.html";
}

const renderProducts = () => {
  tbody.innerHTML = "";
  products.forEach((el, index) => {
    tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price} USD</td>
                <td>
                    <a href="${el.imgSrc}">show img</a>
                </td>
                <td>
                    <div class="d-flex gap-3">
                        <button class="btn btn-danger" onclick="removePhone(${index})">Remove Phone</button>
                        <button onclick="openPhoneDetails(${index})" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#editPhoneModal" >Edit Phone</button>      
                    </div>
                </td>
            </tr>
        `;
  });
};

renderProducts();

const addNewPhone = () => {
  let newPhoneInputName = document.querySelector("#newPhoneInputName");
  let newPhoneInputPrice = document.querySelector("#newPhoneInputPrice");
  let newPhoneInputImgSrc = document.querySelector("#newPhoneInputImgSrc");

  let newPhoneObject = {
    name: newPhoneInputName.value,
    price: +newPhoneInputPrice.value,
    imgSrc: newPhoneInputImgSrc.value,
  };

  products.push(newPhoneObject);

  renderProducts();

  localStorage.setItem("products", JSON.stringify(products));
};

const removePhone = (index) => {
  let removeConfirm = confirm("Are you sure you want to delete this phone ?");
  if (removeConfirm == true) {
    products.splice(index, 1);
    renderProducts();
    localStorage.setItem("products", JSON.stringify(products));
  }
};

let indexToEdit = null;

const openPhoneDetails = (index) => {
  indexToEdit = index;
  let product = products[index];
  let editPhoneInputName = document.querySelector("#editPhoneInputName");
  let editPhoneInputPrice = document.querySelector("#editPhoneInputPrice");
  let editPhoneInputImgSrc = document.querySelector("#editPhoneInputImgSrc");

  editPhoneInputName.value = product.name;
  editPhoneInputPrice.value = product.price;
  editPhoneInputImgSrc.value = product.imgSrc;
};

const savePhoneEdits = () => {
  let editPhoneInputName = document.querySelector("#editPhoneInputName");
  let editPhoneInputPrice = document.querySelector("#editPhoneInputPrice");
  let editPhoneInputImgSrc = document.querySelector("#editPhoneInputImgSrc");

  let newPhoneData = {
    name: editPhoneInputName.value,
    price: editPhoneInputPrice.value,
    imgSrc: editPhoneInputImgSrc.value,
  };

  products[indexToEdit] = newPhoneData;
  renderProducts();

  localStorage.setItem("products", JSON.stringify(products));
};

const logout = () => {
  localStorage.removeItem("hasLogged");
  window.location.href = "./login.html";
};
