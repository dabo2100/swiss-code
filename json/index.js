let productsJSON = localStorage.getItem("products");
let products = JSON.parse(productsJSON);

let productGrid = document.querySelector("#productGrid");

const renderProducts = () => {
  products.forEach((el, index) => {
    productGrid.innerHTML += `
        <div class="col-4">
          <div class="card">
            <img src="${el.imgSrc}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
              <p class="card-text">
              ${el.price} USD
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        `;
  });
};

renderProducts();
