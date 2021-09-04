function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const amount = parseFloat(inputText);

    input.value='';
    return amount;
}

function updateTotalField(totalFieldId, dipositAmount){
    const dipositTotal = document.getElementById(totalFieldId);
    const dipositTotalText = dipositTotal.innerText;
    const previousDipositTotal = parseFloat(dipositTotalText);

    dipositTotal.innerText = previousDipositTotal + dipositAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(dipositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
/*     const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd==true){
        balanceTotal.innerText = previousBalanceTotal + dipositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - dipositAmount;
    }
}

// diposit update 
document.getElementById('diposit-button').addEventListener('click', function () {
    /* const dipositAmount = getInputValue('diposit-input'); */


    // const dipositTotal = document.getElementById('diposit-total');
    // const dipositTotalText = dipositTotal.innerText;
    // const previousDipositTotal = parseFloat(dipositTotalText);

    // dipositTotal.innerText = previousDipositTotal + dipositAmount;

    /* updateTotalField('diposit-total', dipositAmount); */


    // update balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + dipositAmount; */

    const dipositAmount = getInputValue('diposit-input');
    if(dipositAmount > 0){
        updateTotalField('diposit-total', dipositAmount);
        updateBalance(dipositAmount, true);

    }

})


// withdraw oparation 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');

    // const withdrawAmountText = withdrawInput.value;
    // withdrawAmount = parseFloat(withdrawAmountText);

/*     const withdrawAmount = getInputValue('withdraw-input'); */

    // // update withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');

    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTOtal = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = previousWithdrawTOtal + withdrawAmount;

    /* updateTotalField('withdraw-total', withdrawAmount); */

    // balance update 
/*     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

})


 