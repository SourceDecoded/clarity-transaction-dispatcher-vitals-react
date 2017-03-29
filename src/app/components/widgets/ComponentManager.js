import React, { Component } from "react";
import theme from "./../styles/theme";

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "115px",
        padding: "15px"
    },
    padding: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: theme.secondaryLayer.backgroundColor
    },
    type: {
        position: "absolute",
        top: 0,
        left: 0,
        right: "100px",
        bottom: 0,
    },
    actions: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100px",
        height: "100%",
    },
    center: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%"
    },
    actionButton: {
        width: "80px",
        display: "block"
    }
};

export default class ComponentManager extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.padding}>
                    <div style={styles.type}></div>
                    <div style={styles.actions}>
                        <div style={styles.center}>
                            <button className="edit" style={styles.actionButton}>edit</button>
                            <button className="delete" style={Object.assign({marginTop: "10px"}, styles.actionButton)}>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}