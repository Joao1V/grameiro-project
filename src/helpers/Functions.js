window.scrollToElement = (elementID) => {
    try {
        window?.scroll({
            top: document.querySelector(elementID).offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    } catch (e) {
        console.log(e)
    }
};

export const maskReal = (value) => {
    let aux = value;
    if(value !== '') {
        if(value[value.length - 3] === ',') {
            aux = value.replace(',0', '');
            aux = aux.slice(0, -1);
        } else if(value[value.length - 3] === '.'){
            aux = value.replace('.0', '');
            aux = aux.slice(0, -1);
        } else {
            aux = value.replace(',00', '');
        }
    }
    let a = aux.replace(/[^0-9]/g, '');

    switch (a.length) {
        case 0:
            a = '';
            break;
        case 1:
            a = a.charAt(0) + ',00';
            break;
        case 2:
            a = a.charAt(0) + a.charAt(1) + ',00';
            break;
        case 3:
            a = a.charAt(0) + a.charAt(1) + a.charAt(2) + ',00';
            break;
        case 4:
            a = a.charAt(0) + '.' + a.charAt(1) + a.charAt(2) + a.charAt(3) + ',00';
            break;
        case 5:
            a = a.charAt(0) + a.charAt(1) + '.' + a.charAt(2) + a.charAt(3) + a.charAt(4) + ',00';
            break;
        case 6:
            a = a.charAt(0) + a.charAt(1) + a.charAt(2) + '.' + a.charAt(3) + a.charAt(4) + a.charAt(5) + ',00';
            break;
        default:
            a =  a = a.charAt(0) + a.charAt(1) + a.charAt(2) + '.' + a.charAt(3) + a.charAt(4) + a.charAt(5) + ',00';
            break;
    }
    return a;
};