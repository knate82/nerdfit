function formatCurrency(number){
    return(number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
}

function formatComma(number){
    return(number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '1,'));
}