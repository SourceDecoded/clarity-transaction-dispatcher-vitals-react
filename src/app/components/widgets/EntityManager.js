import React, { Component } from "react";
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
        height: "100px",
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
        backgroundColor: theme.primaryLayer.backgroundColor,
        overflowY: "scroll"
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
                    <div style={styles.header}></div>
                    <div style={styles.content}></div>
                    <div style={styles.components}>
                        <div style={{height: "1000px"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}