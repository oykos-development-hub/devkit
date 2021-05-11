import * as React from "react";
import {Loader} from "./components/Loader/Loader";

export type Props = { text: string };

class ExampleComponent extends React.Component<Props> {
    render() {
        const { text } = this.props;

        return <div style={{ color: "red" }}>Hello {text}</div>;
    }
}

export const Devkit:any = {
    ExampleComponent: ExampleComponent,
    LoaderComponent: Loader
};
