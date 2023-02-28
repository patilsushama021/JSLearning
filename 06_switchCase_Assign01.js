function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`${monthNumber} is for January`);
            break;
        case 2:
                console.log(`${monthNumber} is for February`);
                break;
        case 3:
            console.log(`${monthNumber} is for March`);
            break;
        case 4:
            console.log(`${monthNumber} is for April`);
            break;
        case 5:
            console.log(`${monthNumber} is for May`);
            break; 
        case 6:
            console.log(`${monthNumber} is for June`);
            break;  
        case 7:
            console.log(`${monthNumber} is for July`);
            break; 
        case 8:
             console.log(`${monthNumber} is for August`);
             break;  
        case 9:
            console.log(`${monthNumber} is for September`);
            break;
        case 10:
            console.log(`${monthNumber} is for October`);
            break; 
        case 11:
            console.log(`${monthNumber} is for November`);
            break;
        case 12:
            console.log(`${monthNumber} is for December`);
            break;                   
        default:
            console.log(`Please Enter valid Number`);
            break;
    }
    
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);











