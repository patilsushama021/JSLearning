function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.bankDetails = function(){
        console.log(`Bank Details is: ${bankName}, ${location}, ${ifscCode}, ${branchCode}`);
    }
}
const yesBank = new Bank("YES Bank", "Chinchwad", "YESB0000648", "0000648");
const sbiBank = new Bank("SBI Bank", "Wagholi", "SBI0000478", "0000478");
const mahBank = new Bank("MAH Bank", "Kothrud", "MAHB0000852", "0000852");
const axisBank = new Bank("Axis Bank", "Shivaji Nagar", "UTIB0000154", "0000154")

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

yesBank.bankDetails();
sbiBank.bankDetails();
mahBank.bankDetails();
axisBank.bankDetails();

console.log(`***************************************************************************`);

console.log(`Open Time SBI Bank: ${sbiBank.openTime}`);
console.log(`Close Time SBI Bank: ${sbiBank.closeTime}`);

console.log(`***************************************************************************`);

console.log(`Bank Name: ${axisBank.bankName}`);
console.log(`Close Time Axis Bank: ${axisBank.closeTime}`);

console.log(`***************************************************************************`);

console.log(`Bank Name: ${yesBank.bankName}`);
console.log(`Branch Code of ${yesBank.bankName}: ${yesBank.branchCode}`);
console.log(`Open Time Axis Bank: ${yesBank.openTime}`);



