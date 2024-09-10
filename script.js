function doOperation() {
    const form = document.getElementById('calc_form');

    const number_1 = Number(form.querySelector('#number_1').value);
    const number_2 = Number(form.querySelector('#number_2').value);
    const operator = form.querySelector('#operator').value;

    switch(operator) {
        case 'add': 
            alert("Is " + (number_1 + number_2));
            break;
        case 'sub': 
            alert("Is " + (number_1 - number_2));
            break;
        case 'mul': 
            alert("Is " + (number_1 * number_2));
            break;
        case 'div': 
            alert("Is " + (number_1 / number_2));
            break;
        default:
            alert('Invalid or unimplemented option');
    }
}