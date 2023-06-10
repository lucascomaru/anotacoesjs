function inverso(param) {
    if (param === true) {
        return false;
    } else if (param === false) {
        return true;
    } else if (typeof param === 'number') {
        return -param;
    } else if (typeof param === 'string') {
        return parseInt(param);
    } else {
        return param;
    }
}

console.log(inverso(1));
