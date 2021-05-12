export const isEmpty = (string: any) => {
    if (string.length === 0) return true;
};

export const validateNumber = (value: any, float: any) => {
    let re;
    if (!float) {
        re = /^[\d\b]+$/;
    } else {
        re = /^(\d*\.)?\d+$/;
    }
    return !!(value === "" || re.test(value));
};
