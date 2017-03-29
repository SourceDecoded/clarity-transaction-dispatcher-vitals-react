import React, { Component } from "react";
import ComponentsManager from "./ComponentsManager";
import theme from "./../styles/theme";

const styles = {
    container: Object.assign(
        {},
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
    deleteEntity: {
        position: "absolute",
        bottom: 0,
        right: 0
    }
};

export default class EntityManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.containerPadding}>
                    <div style={styles.header}>
                        <div style={styles.id}>
                            aefts89ds3j33uuu
                        </div>
                        <div style={styles.metaData}>
                            <div>
                                <span>Created On: </span>
                                <span style={styles.metaDataValue}>3 hours ago</span>
                            </div>
                            <div>
                                <span>Modified On: </span>
                                <span style={styles.metaDataValue}>1 hour ago</span>
                            </div>
                        </div>
                        <button style={styles.deleteEntity} className="delete">Delete Entity</button>
                    </div>
                    <div style={styles.content}></div>
                    <ComponentsManager style={styles.components} />
                </div>
            </div>
        );
    }
}