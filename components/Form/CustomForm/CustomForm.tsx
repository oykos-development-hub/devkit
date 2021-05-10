import React, { FormEvent, ReactChildren, useContext } from "react";

const FormContext = React.createContext(false);

export function useFormContext() {
    return useContext(FormContext);
}

interface ICustomForm {
    children: ReactChildren | string | JSX.Element | Array<JSX.Element>;
    className?: string;
    handleSubmit?: (event: FormEvent) => void;
}

const _csf = ({ children, className, handleSubmit }: ICustomForm) => {
    return (
        <FormContext.Provider value={true}>
            <form
                onSubmit={(e) => (handleSubmit ? handleSubmit(e) : undefined)}
                className={className}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default _csf;
