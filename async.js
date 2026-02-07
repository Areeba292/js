 function walkdog(){

    return new Promise( (resolve, reject) => {
      setTimeout(() => {
         const dongwalked= true;
         if ( dongwalked) {
            resolve("dog walked");
            
         } else {
            reject("dog not walked");
         }

       
    }, 2000);
    });
}

function cleankitchen(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
            const kitchencleaned= true;
            if (kitchencleaned) {
                resolve("kitchen cleaned");
            } else {
                reject("kitchen not cleaned");
            }
    }, 2500);
    });
}

function takeouttrash(){
   return new Promise( (resolve, reject) => {
      setTimeout(() => {
        const trashTakenOut= true;
        if (trashTakenOut) {
            resolve("trash taken out");
        } else {
            reject("trash not taken out");
        }
    }, 500);
    });
}

async function dowork(params) {
    
    try {
        const walkdogresult= await walkdog();
        console.log(walkdogresult);
        const cleankitchenresult= await cleankitchen();
        console.log(cleankitchenresult);
        const takeouttrashresult= await takeouttrash();
        console.log(takeouttrashresult);
        console.log("all tasks done");
    
    } catch (error) {
        console.log("error: ", error);
    }
}
dowork();