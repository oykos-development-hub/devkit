export const parseDate = (date: any) => {
    // const dateArray = date.split(".");
    // const formatedDate = `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`;
    const datum = new Date(date);
    const dan = datum.toLocaleDateString("sr-latn-SR", { day: "2-digit" });
    const mjesec = datum.toLocaleDateString("sr-latn-SR", { month: "2-digit" });
    const godina = datum
        .toLocaleDateString("sr-latn-SR", { year: "numeric" })
        .replace(".", "");

    return `${dan}/${mjesec}/${godina}`;
};
export const parseDateForCar = (date: any) => {
    // const dateArray = date.split(".");
    // const formatedDate = `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`;
    const datum = new Date(date);
    const dan = datum.toLocaleDateString("sr-latn-SR", { day: "2-digit" });
    const mjesec = datum.toLocaleDateString("sr-latn-SR", { month: "2-digit" });
    const godina = datum
        .toLocaleDateString("sr-latn-SR", { year: "numeric" })
        .replace(".", "");

    return `${dan}/${mjesec}/${godina}`;
};
export const newDateFromString = (date: any, format = null) => {
    let dateObj = new Date();

    if (!format || format === "DD.MM.YYYY") {
        const parts = date.split(".");

        dateObj.setDate(parts[0]);
        dateObj.setMonth(Number(parts[1]) - 1);
        dateObj.setFullYear(parts[2]);
    }

    return dateObj;
};

export const getDateFromString = (date: any) => {
    const pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const arrayDate = date.match(pattern);
    const dateObj = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
    return dateObj;
};

export const backendDateParse = (date: any) => {
    if (!date) return null;
    const dateArray = date.split(/[\s,//]+/);
    const dateString = `${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`;
    return new Date(dateString);
};

export const dayDifferenceNew = (firstDate: any, secondDate: any) => {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    if (!firstDate || !secondDate) return null;
    return Math.round(
        (secondDate.valueOf() - firstDate.valueOf()) / (1000 * 60 * 60 * 24)
    );
};

export const dayDifference = (firstDate: any, secondDate: any) => {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round(
        (secondDate.valueOf() - firstDate.valueOf()) / (1000 * 60 * 60 * 24)
    );
};

export const dayDifferenceDateObject = (
    firstDate: Date | null,
    secondDate: Date | null
) => {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    if (!firstDate || !secondDate) return null;
    return Math.round(
        secondDate.getTime() - firstDate.getTime() / (1000 * 60 * 60 * 24)
    );
};

export const parseDateForMySQL = (date: any, time = false) => {
    const datum = new Date(date);
    const dan = datum.toLocaleDateString("sr-latn-SR", { day: "2-digit" });
    const mjesec = datum.toLocaleDateString("sr-latn-SR", { month: "2-digit" });
    const godina = datum
        .toLocaleDateString("sr-latn-SR", { year: "numeric" })
        .replace(".", "");
    const sati = datum.toLocaleTimeString("sr-latn-SR");
    return `${godina}-${mjesec}-${dan}${time ? ` ${sati}` : ""}`;
};

export const parseDatetime = (date: any) => {
    const datum = new Date(date);
    const dan = datum.toLocaleDateString("sr-latn-SR", { day: "2-digit" });
    const mjesec = datum.toLocaleDateString("sr-latn-SR", { month: "2-digit" });
    const godina = datum
        .toLocaleDateString("sr-latn-SR", { year: "numeric" })
        .replace(".", "");
    const hour = datum.getHours();
    const minute = datum.getMinutes();
    const second = datum.getSeconds();

    return `${dan}.${mjesec}.${godina}. ${hour}:${minute}:${
        second < 10 ? `0${second}` : second
    }`;
};

export const parseDatetimeBack = (date: any) => {
    const datum = new Date(date);
    const dan = datum.toLocaleDateString("sr-latn-SR", { day: "2-digit" });
    const mjesec = datum.toLocaleDateString("sr-latn-SR", { month: "2-digit" });
    const godina = datum
        .toLocaleDateString("sr-latn-SR", { year: "numeric" })
        .replace(".", "");
    const hour = datum.getHours();
    const minute = datum.getMinutes();
    // const second = datum.getSeconds();

    return `${dan}/${mjesec}/${godina} ${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
    }`;
};

export const formatBytes = (bytes: any, decimals = 2) => {
    if (bytes === 0 || !bytes) return "";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
