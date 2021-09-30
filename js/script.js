const submit = document.getElementById('submit');
const bi_result = document.getElementById('result');
const oct_result = document.getElementById('result2');
const hex_result = document.getElementById('result3');


function binary(e){
    e.preventDefault();
    const num = document.getElementById('number').value;
    if(num === ''){
        alert('Please enter any number');
    }
    else if(num < 0){
        alert('Please enter any positive number');
    }
    
    binaryNum = Number(num).toString(2);
    bi_result.value = binaryNum;
    
    octalNum = Number(num).toString(8);
    oct_result.value = octalNum;
    
    hexadecimalNum = Number(num).toString(16);
    hex_result.value = hexadecimalNum;
}
submit.addEventListener('click',binary);