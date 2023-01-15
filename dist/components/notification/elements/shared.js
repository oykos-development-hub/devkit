export var getColor = function (props) {
    var _a, _b, _c, _d;
    switch (props.variant) {
        case "error":
            return props.color || ((_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette.light.one) || "#D9D9D9FF";
        case "success":
            return props.color || ((_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette.light.one) || "#D9D9D9FF";
        case "neutral":
            return props.color || ((_c = props.theme) === null || _c === void 0 ? void 0 : _c.palette.light.one) || "#D9D9D9FF";
        case "info":
            return props.color || ((_d = props.theme) === null || _d === void 0 ? void 0 : _d.palette.light.one) || "#D9D9D9FF";
        default:
            return "#D9D9D9FF";
    }
};
export var getBgColor = function (props) {
    var _a, _b, _c, _d;
    switch (props.variant) {
        case "error":
            return props.backgroundColor || ((_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette.important.two) || "#f44336";
        case "success":
            return props.backgroundColor || ((_b = props.theme) === null || _b === void 0 ? void 0 : _b.palette.info.three) || "#00b300";
        case "neutral":
            return props.backgroundColor || ((_c = props.theme) === null || _c === void 0 ? void 0 : _c.palette.info.four) || "#598d82";
        case "info":
            return props.backgroundColor || ((_d = props.theme) === null || _d === void 0 ? void 0 : _d.palette.info.four) || "#598d82";
        default:
            return "#6C757D";
    }
};
export var initialShadow = "0 0.0625rem 0.125rem rgba(97, 97, 97, 0.2), 0 0.125rem 0.25rem rgba(97, 97, 97, 0.2)";
//# sourceMappingURL=shared.js.map