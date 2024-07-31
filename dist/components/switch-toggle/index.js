import React, { useMemo } from "react";
import { Switch } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSSwitch = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    const handleChange = (e) => {
        props.onChange && props.onChange(props.name || "");
    };
    return React.createElement(Switch, Object.assign({}, mergedProps, { onChange: handleChange }));
};
//# sourceMappingURL=index.js.map