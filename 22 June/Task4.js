// 1. Display account details.

let account = {
    accountNumber : 27315436987,
    holderName : "Pandya Shivang",
    balance : 20000,

    checkBalance: function checkBalance() {
        console.log("Current balance:", this.balance);
    }
};

console.log(account);

// 2. Deposit ₹5000 into the balance.

// account.balance = account.balance + 5000;

// console.log(account);

// 3. Add a property `accountType`.

// account.accountType = "Saving Account";

// console.log(account);


// 4. Delete the `accountType` property.

// delete account.accountType;

// console.log(account);

// 5. Create a method `checkBalance()` that displays the current balance.

// account.checkBalance();
