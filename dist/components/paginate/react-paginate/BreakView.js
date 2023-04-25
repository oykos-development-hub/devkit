"use strict";
import React from "react";
import PropTypes from "prop-types";
const BreakView = (props) => {
    const { breakLabel, breakAriaLabel, breakClassName, breakLinkClassName, breakHandler, getEventListener } = props;
    const className = breakClassName || "break";
    return (React.createElement("li", { className: className },
        React.createElement("a", Object.assign({ className: breakLinkClassName, role: "button", tabIndex: "0", "aria-label": breakAriaLabel, onKeyPress: breakHandler }, getEventListener(breakHandler)), breakLabel)));
};
BreakView.propTypes = {
    breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    breakAriaLabel: PropTypes.string,
    breakClassName: PropTypes.string,
    breakLinkClassName: PropTypes.string,
    breakHandler: PropTypes.func.isRequired,
    getEventListener: PropTypes.func.isRequired,
};
export default BreakView;
//# sourceMappingURL=BreakView.js.map