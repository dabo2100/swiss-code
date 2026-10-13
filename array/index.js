const phones = ["iPhone x", "iPhone 11", "iPhone 12"];
const prices = [500, 600, 700];
const qty = [4, 6, 10];

const showPhones = () => {
  console.clear();
  phones.forEach((phone, index) => {
    console.log(
      `${index} - Name: ${phone} - Price: ${prices[index]} USD - Qty: ${qty[index]}`,
    );
  });
};

const addNewPhone = () => {
  let newPhoneName = prompt("Please enter new phone name");
  let newPhonePrice = +prompt("Please enter new phone Price in USD");
  let newPhoneQty = +prompt("Please enter new phone Qty");
  phones.push(newPhoneName);
  prices.push(newPhonePrice);
  qty.push(newPhoneQty);
  showPhones();
};

const removePhone = () => {
  // splice (مكان القطع , عدد القطعات)
  let phoneIndex = +prompt("Please enter phone index you want to remove");
  phones.splice(phoneIndex, 1);
  prices.splice(phoneIndex, 1);
  qty.splice(phoneIndex, 1);
  showPhones();
};

const upadtePhoneName = () => {
  // splice (مكان القطع - عدد القطع - البدائل)
  let phoneIndex = +prompt("Please enter phone index you want to update");
  let newPhoneName = prompt("Please enter new Phone Name");
  phones.splice(phoneIndex, 1, newPhoneName);
  showPhones();
};
const upadtePhonePrice = () => {
  let phoneIndex = +prompt("Please enter phone index you want to update");
  let newPhonePrice = +prompt("Please enter new Phone Price");
  prices.splice(phoneIndex, 1, newPhonePrice);
  showPhones();
};
const upadtePhoneQty = () => {
  let phoneIndex = +prompt("Please enter phone index you want to update");
  let newPhoneQty = +prompt("Please enter new Phone Qty");
  qty.splice(phoneIndex, 1, newPhoneQty);
  showPhones();
};
