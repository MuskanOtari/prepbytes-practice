//Account Class/
//balance
let obj = {
    balance: 10,
    getBalance: function() {
        console.log("Balance =" + this.balance);

    }

}
obj.getBalance();
//In orderto provide theinitial valueyou  have to use = instead of:
class Account {
    balance = 10;
    getBalance() {
        console.log("Balance=" + this.balance);

    }

}
let acc1 = new Account();
acc1.getBalance();
let acc2 = new Account();
acc2.getBalance();