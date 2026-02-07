// javascript ek code hota h jo future result ko represent krta h ..means abhi result nahi mila lekin bad main milyga (succes ya fail)
// mostly async kam m use hota h ;
// .API call , file loading , timer ,data base
// promise 3 state m hota h
// 1. pending (default state)
// 2. fulfilled (success)
// 3. rejected (failure)

function walkdog(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve("dog walked");
    }, 2000);
    });
}

function cleankitchen(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve("kitchen cleaned");
    }, 2500);
    });
}

function takeouttrash(){
   return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve("trash taken out");
    }, 500);
    });
}

walkdog().then (value => { console.log(value); return cleankitchen();})
         .then (value => { console.log(value); return takeouttrash();})
         .then (value => {console.log(value); console.log("all tasks done");})
       
        //reject 

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
        const trashTakenOut= false;
        if (trashTakenOut) {
            resolve("trash taken out");
        } else {
            reject("trash not taken out");
        }
    }, 500);
    });
}

walkdog().then (value => { console.log(value); return cleankitchen();})
         .then (value => { console.log(value); return takeouttrash();})
         .then (value => {console.log(value); console.log("all tasks done");})
         .catch (error => { console.log("error: ");})

