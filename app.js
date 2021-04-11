//=========================================================================================================
//3

function handleProductChange(product, isIncrease){
    let productInput = document.getElementById(product + "-count");
    let productCount = parseInt(productInput.value);
    // let newCaseCount = caseCount + 1;
    let newProductCount = productCount;
    if(isIncrease == true){
        newProductCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount;

    let productTotal =0;
    if(product == 'case'){
        productTotal = newProductCount * 59;
    }
    if(product == 'phone'){
        productTotal = newProductCount * 1219;
    }
    document.getElementById(product + "-price").innerText ="$" + productTotal;
    var phoneTotal = parseInt(document.getElementById('phone-price').innerText);
    var caseTotal = parseInt(document.getElementById('case-price').innerText);

    console.log(typeof(phoneTotal, caseTotal));
    var totalProductPrice = phoneTotal + caseTotal;
    document.getElementById('total-price').innerText = totalProductPrice;
    

}


// function handleProductChange(product, isIncrease){
//         let caseInput = document.getElementById(product + "-count");
//         let caseCount = parseInt(caseInput.value);
//         // let newCaseCount = caseCount + 1;
//         let newCaseCount = caseCount;
//         if(isIncrease == true){
//             newCaseCount = caseCount + 1;
//         }
//         if(isIncrease == false && caseCount > 0){
//             newCaseCount = caseCount - 1;
//         }
//         caseInput.value = newCaseCount;
//         let caseTotal = newCaseCount * 59;
//         document.getElementById("case-price").innerText ="$"+caseTotal;
// }


//=====================================================================================================================
//2
// document.getElementById('case-decrease').addEventListener('click', function(){
//     handleProductChange(false);
// });

// document.getElementById('case-increase').addEventListener('click', function(){
//    handleProductChange(true); 
// });

// function handleProductChange(isIncrease){
//         let caseInput = document.getElementById("case-count");
//         let caseCount = parseInt(caseInput.value);
//         // let newCaseCount = caseCount + 1;
//         let newCaseCount = caseCount;
//         if(isIncrease == true){
//             newCaseCount = caseCount + 1;
//         }
//         if(isIncrease == false && caseCount > 0){
//             newCaseCount = caseCount - 1;
//         }
//         caseInput.value = newCaseCount;
//         let caseTotal = newCaseCount * 59;
//         document.getElementById("case-price").innerText ="$"+caseTotal;
// }


//====================================================================================
//1
// document.getElementById('case-increase').addEventListener("click", function(){
//     let caseInput = document.getElementById("case-count");
//     let caseCount = parseInt(caseInput.value);
//     let newCaseCount = caseCount + 1;
//     caseInput.value = newCaseCount;
//     let caseTotal = newCaseCount * 59;
//     document.getElementById("case-price").innerText ="$"+caseTotal;
// });

// document.getElementById('case-decrease').addEventListener("click", function(){
//     let caseInput = document.getElementById("case-count");
//     let caseCount = parseInt(caseInput.value);
//     let newCaseCount = caseCount - 1;
//     caseInput.value = newCaseCount;
//     let caseTotal = newCaseCount * 59;
//     document.getElementById("case-price").innerText = "$"+caseTotal;
// });
