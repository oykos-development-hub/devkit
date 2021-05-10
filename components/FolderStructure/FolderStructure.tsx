import React, { Component } from "react";
import { CloudFolderIcon, FileManagerIcons } from "../Icons/FileManagerIcons";
import Translate from "../../functions/utilFunctions/translate";
import { ArrowDownIcon } from "../Icons/Icons";

interface IFileType {
    sub: Array<IFileType>;
    created_at: string | null;
    file_size: number | null;
    id: number;
    level: number;
    parent_id: number | null;
    path: string;
    title: string;
    type: string;
    updated_at: string | null;
}

interface IFolderStructureState {
    data: IFileType;
    destination: Array<string>;
    destinationID: number;
    destinationPath: string;
    destinationLevel: number;
}

interface IFolderStructure {
    data: IFileType;
    selectedItem: string;
    handleDestinationID: (
        destinationID: number,
        destinationPath?: string,
        destinationLevel?: number
    ) => void;
}

class FolderStructure extends Component<
    IFolderStructure,
    IFolderStructureState
> {
    state = {
        data: {
            sub: [
                {
                    sub: [],
                    created_at: null,
                    file_size: null,
                    id: 0,
                    level: 0,
                    parent_id: 0,
                    path: "",
                    title: "",
                    type: "",
                    updated_at: null,
                },
            ],
            created_at: null,
            file_size: null,
            id: 0,
            level: 0,
            parent_id: 0,
            path: "",
            title: "",
            type: "",
            updated_at: null,
        },
        destination: [],
        destinationID: 0,
        destinationPath: "",
        destinationLevel: 0,
    };

    handleIcon = (type) => {
        return FileManagerIcons.getIcon(type, { width: 20 });
    };

    findAllFolders = (array) => {
        let folders: any = [];
        const handleRecursion = (arr: any) => {
            arr.forEach((e: any) => {
                folders.push(e);
                if (e.sub.length > 0) {
                    handleRecursion(e.sub);
                }
            });
        };
        handleRecursion(array);
        return folders;
    };

    componentDidMount() {
        const { data } = this.props;
        this.setState({ data });
    }

    componentDidUpdate(
        prevProps: IFolderStructure,
        prevState: IFolderStructureState
    ) {
        if (prevProps.data !== this.props.data) {
            const { data } = this.props;
            this.setState({ data });
        }
        if (prevState.destinationID !== this.state.destinationID) {
            this.props.handleDestinationID(
                this.state.destinationID,
                this.state.destinationPath,
                this.state.destinationLevel
            );
        }
    }

    handleOpenItem = (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        e.currentTarget.classList.toggle("open");
    };

    handleSetDestination = (
        destination: string,
        destinationID: number,
        destinationPath: string,
        destinationLevel: number
    ) => {
        this.setState({
            destination: destination.split("/"),
            destinationID,
            destinationPath,
            destinationLevel,
        });
    };

    renderTree = (sub: IFileType[], padding = 0) => {
        const { destinationID } = this.state;
        const filteredSub = sub.filter(
            (e) => e.title !== this.props.selectedItem
        );
        return filteredSub.map((e) => {
            return (
                <li
                    className="f-s-12 pointer"
                    key={e.id}
                    onClick={(event) => {
                        this.handleSetDestination(
                            e.path,
                            e.id,
                            e.path,
                            e.level
                        );
                        this.handleOpenItem(event);
                    }}
                >
                    <div
                        className={`item d-flex align-items-center h-100-perc px-${
                            (padding + 1) * 10
                        } ${destinationID === e.id ? "active" : ""}`}
                    >
                        {e.sub.length > 0 ? (
                            <ArrowDownIcon
                                width={10}
                                className="folderStructureArrow"
                            />
                        ) : (
                            <span className="d-block w-10" />
                        )}
                        <span className="d-flex align-items-center ml-10 mr-10">
                            {this.handleIcon(e.type)}
                        </span>
                        <span>{e.title}</span>
                    </div>
                    {e.sub.length > 0 && (
                        <ul>{this.renderTree(e.sub, e.level)}</ul>
                    )}
                </li>
            );
        });
    };

    render() {
        return (
            <div className="folderStructure">
                <div className="selected d-flex flex-column justify-content-center pl-10 border-b-1">
                    <div className="selectedItem mb-20 d-flex align-items-center">
                        <p className="w-150 f-s-14 text-color-font-l">
                            <Translate text="SELECTED_ITEM" />:
                        </p>
                        <p className="f-s-14 text-color-font-l">
                            {this.props.selectedItem}
                        </p>
                    </div>
                    <div className="selectedItem d-flex align-items-center">
                        <p className="w-150 f-s-14 text-color-font-l">
                            <Translate text="DESTINATION" />:
                        </p>
                        <p className="d-flex align-items-center">
                            <CloudFolderIcon
                                className="lightFill hover pointer"
                                width={20}
                                onClick={() =>
                                    this.handleSetDestination("/", 1, "/", 0)
                                }
                            />
                            <span className="d-flex align-items-center">
                                {this.state.destination.map((e, index) => {
                                    if (e !== "") {
                                        return (
                                            <React.Fragment key={index}>
                                                <ArrowDownIcon
                                                    width={10}
                                                    className="rotate--90 mx-5 lightFill"
                                                    key={index}
                                                />
                                                <span className="f-s-13 text-color-font-l">
                                                    {e}
                                                </span>
                                            </React.Fragment>
                                        );
                                    } else {
                                        return "";
                                    }
                                })}
                            </span>
                        </p>
                    </div>
                </div>
                <ul className="folderList pb-10">
                    {this.renderTree(this.state.data.sub)}
                </ul>
            </div>
        );
    }
}

export default FolderStructure;
