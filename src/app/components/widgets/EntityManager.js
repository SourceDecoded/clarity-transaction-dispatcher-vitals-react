import React, { Component } from "react";
import ComponentsManager from "./ComponentsManager";
import IconButton from "./IconButton";
import theme from "./../styles/theme";

const styles = {
    container: Object.assign(
        {
            position: "relative"
        },
        theme.container,
        theme.defaultFont,
        {
            width: "100%",
            height: "600px",
            padding: "15px"
        }
    ),
    containerPadding: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    header: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "85px",
        right: "300px"
    },
    content: {
        position: "absolute",
        top: "100px",
        left: "0",
        bottom: "0",
        right: "300px",
        borderRadius: "3px",
        backgroundColor: theme.primaryLayer.backgroundColor
    },
    components: {
        position: "absolute",
        top: "0",
        right: "0",
        width: "285px",
        bottom: "0",
        backgroundColor: theme.primaryLayer.backgroundColor
    },
    id: {
        fontSize: "34px"
    },
    metaData: {
        fontSize: "14px"
    },
    metaDataValue: {
        fontSize: "10px"
    },
    more: {
        position: "absolute",
        top: "10px",
        right: 0
    },
    editContent: {
        position: "absolute",
        bottom: "15px",
        right: "15px"
    }
};

export default class EntityManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter() {
        this.setState({
            isHovered: true
        });
    }

    mouseLeave() {
        this.setState({
            isHovered: false
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.containerPadding}>
                    <div style={styles.header}>
                        <div style={styles.id}>
                            {this.props.entity && this.props.entity.id || "Unknown"}
                        </div>
                        <div style={styles.metaData}>
                            <div>
                                <span>Created On: </span>
                                <span style={styles.metaDataValue}>{this.props.entity && this.props.entity.createdDate.toString() || "Unknown"}</span>
                            </div>
                            <div>
                                <span>Modified On: </span>
                                <span style={styles.metaDataValue}>{this.props.entity && this.props.entity.updatedDate.toString() || "Unknown"}</span>
                            </div>
                        </div>
                        <div style={styles.more}>
                            <i className="mdi-dots-vertical" style={{cursor: "pointer"}}></i>
                        </div>
                    </div>
                    <div style={styles.content}  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        <IconButton style={Object.assign({
                            display: this.state.isHovered ? "block" : "none"
                        }, styles.editContent)} icon="pencil" color="#c65c1c" />
                    </div>
                    <ComponentsManager style={styles.components} />
                </div>
            </div>
        );
    }
}

EntityManager.defaultProps = {
    entity: null
};