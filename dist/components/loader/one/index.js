import React from 'react';
export var Loader = function (_a) {
    var className = _a.className;
    var classBase = 'loader';
    var classes = [
        classBase,
        "".concat(className || ''),
    ];
    return (React.createElement("div", { className: classes.join(' '), "data-testid": classBase }));
};
//# sourceMappingURL=index.js.map