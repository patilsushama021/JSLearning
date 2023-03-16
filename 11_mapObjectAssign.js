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
const mapOfBank = new Map();
mapOfBank.set( "154274188", axis_bank);
mapOfBank.set("4758154", sbi_bank);
mapOfBank.set("47115233", icici_bank);
mapOfBank.set("845124", kotak_bank);
mapOfBank.set(" 887455236", hdfc_bank);
mapOfBank.set("665521478", punjab_bank);

keyOfBank = mapOfBank.keys()
// console.log(keyOfBank);
for (key of keyOfBank){
    const element = mapOfBank.get(key)
    const bankName = element.bank_name;
    const accountNo = element.account_no;
    const interestrate = element.interest_rate;
    console.log(`Bank Name: ${bankName} Account No: ${accountNo} Interest rate: ${interestrate}`);
}
