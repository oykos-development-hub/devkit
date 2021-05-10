import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";

interface ISortableList {
    items: Array<any>;
    render: (item: any, index: number) => any;
    handleSort: (any) => any;
}

class SortableList extends Component<ISortableList> {
    state = {
        items: [],
    };

    componentDidMount() {
        this.setState({ items: this.props.items });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items !== this.props.items) {
            this.setState({ items: this.props.items });
        }
    }

    handleSort = (items) => {
        if (items.length === 0) return;
        this.setState({ items }, () => {
            this.props.handleSort(items);
        });
    };

    render() {
        return (
            <ReactSortable
                list={this.state.items}
                setList={(items) => this.handleSort(items)}
                animation={200}
            >
                {this.state.items.map((item: any, index) =>
                    this.props.render(item, index)
                )}
            </ReactSortable>
        );
    }
}

export default SortableList;
