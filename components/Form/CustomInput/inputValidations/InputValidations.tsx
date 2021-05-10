export const isEmpty = (string) => {
    if (string.length === 0) return true;
};

export const validateNumber = (value, float) => {
    let re;
    if (!float) {
        re = /^[\d\b]+$/;
    } else {
        re = /^(\d*\.)?\d+$/;
    }
    return !!(value === "" || re.test(value));
};
