class Bank {
  constructor(bank_name, location, account_no, ifsc, interest_rate) {
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
  }
}
const axis_bank = new Bank(
  "Axis Bank",
  "Chinchwad",
  154274188,
  "UTIB00145",
  10.75
);
const sbi_bank = new Bank("SBI Bank", "Wagholi", 4758154, "SBI0000478", 9.45);
const icici_bank = new Bank(
  "ICICI Bank",
  "Shahunagar",
  47115233,
  "ICICI000411",
  10
);
const kotak_bank = new Bank(
  "Kotak Bank",
  "Kothrud",
  845124,
  "kotak000365",
  9.5
);
const hdfc_bank = new Bank(
  "HDFC Bank",
  "Yerwada",
  887455236,
  "HDFC000874",
  10.4
);
const punjab_bank = new Bank(
  "Punjab Bank",
  "Pimpri",
  665521478,
  "PUNJ00254",
  9.75
);

const bankDetails = new Set();
bankDetails.add(axis_bank);
bankDetails.add(sbi_bank);
bankDetails.add(icici_bank);
bankDetails.add(kotak_bank);
bankDetails.add(hdfc_bank);
bankDetails.add(punjab_bank);

for (const bank of bankDetails) {
  const name = bank.bank_name;
  const loc = bank.location;
  console.log(`Bank Name: ${name}
               Location: ${loc}`);
}
