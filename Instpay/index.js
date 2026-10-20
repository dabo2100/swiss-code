// Selectors
let balanceSpan = document.querySelector("#balanceSpan");
let amountInput = document.querySelector("#amountInput");
let table = document.querySelector("table tbody");

// Intail States - معااااملات
let balance = 5000;

let transactions = [
  { beforeBalance: 0, type: "Deposit", amount: 2000, afterBalance: 2000 },
  { beforeBalance: 2000, type: "Deposit", amount: 2000, afterBalance: 4000 },
  { beforeBalance: 4000, type: "Deposit", amount: 2000, afterBalance: 6000 },
  { beforeBalance: 6000, type: "Withdraw", amount: 1000, afterBalance: 5000 },
];

// Render Data

const renderTransactions = () => {
  table.innerHTML = ""; // ~ console.clear();
  transactions.forEach((el, index) => {
    table.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <th>${el.beforeBalance} EGP</th>
        <th><b>${el.type}</b></th>
        <th>${el.amount} EGP</th>
        <th>${el.afterBalance} EGP</th>
    </tr>
    `;
  });
};

// Actions
const showBalance = () => {
  balanceSpan.textContent = `${balance} EGP`;
};

const depositAmount = () => {
  let amount = +amountInput.value;
  // Save Transaction into History
  let newTransaction = {
    beforeBalance: balance,
    type: "Deposit",
    amount: amount,
    afterBalance: balance + amount,
  };

  transactions.push(newTransaction);
  renderTransactions();

  balance = balance + amount;
  showBalance();
  amountInput.value = "";
};

const withdarwAmount = () => {
  let amount = +amountInput.value;
  if (amount <= balance) {
    let newTransaction = {
      beforeBalance: balance,
      type: "Withdraw",
      amount: amount,
      afterBalance: balance - amount,
    };
    transactions.push(newTransaction);
    renderTransactions();

    balance = balance - amount;
    showBalance();
  } else {
    alert("انت فقير يا اسطي الحد الأقصي للسحب هو : " + balance);
  }
  amountInput.value = "";
};
