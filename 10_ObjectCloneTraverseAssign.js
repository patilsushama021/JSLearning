const sbiBank = {
      bankName: "SBI Bank",
      accountNo: 12121212,
      ifsc: "SBI000014",
      interestRate: "4.5%",
    }

const bankLocation = {
    street:" bajirao Peshawe Road",
    city: "Pune",
    pincode: 411010
}
console.log("Cloning Object With Object Assign:");
const cloneSbiBank = Object.assign({}, sbiBank);
const cloneLoc = Object.assign({}, bankLocation);
console.log(`Cloned Bank:`, cloneSbiBank);
console.log(`Cloned Bank Location: `, cloneLoc);

console.log(`***********************************************************`);
console.log("Cloning Object With Spread Operator:");
const spreadClone = {...sbiBank};
const spreadLoc = {...bankLocation};
console.log(`Cloned Bank:`, spreadClone);
console.log(`Cloned Bank Location:`, spreadLoc);
console.log(`***********************************************************`);

const rateOfInterest = {
    homeLoanInterest :  11.50,
    personalLoanInterest : 10.75,
    dueInterest : 7.5
}

const sbiDetails = {};
Object.assign(sbiDetails, sbiBank,bankLocation, rateOfInterest);
console.log(`After Mergining: Bank Name- ${sbiDetails.bankName}, Account No- ${sbiDetails.accountNo},
     IFSC Code- ${sbiDetails.ifsc}, Interest Rate: ${sbiDetails.interestRate}, Location-${sbiDetails.street} ${sbiDetails.city} ${sbiDetails.pincode},
     Home Loan Interest- ${sbiDetails.homeLoanInterest}, Personal Loan Interest- ${sbiDetails.personalLoanInterest},
     Due Interest- ${sbiDetails.dueInterest}`);
console.log(`***********************************************************`);
console.log("After Traversing");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} : ${element}`);
        
    }
}
