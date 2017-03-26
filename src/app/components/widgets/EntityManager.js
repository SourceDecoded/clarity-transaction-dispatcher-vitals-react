import React, { Component } from "react";
import styles from "./../styles/theme";

const containerStyles = Object.assign(
    {},
    styles.container,
    styles.defaultFont,
    {
        width: "100%",
        height: "600px",
        padding: "15px"
    }
);

const containerPaddingStyles = {
    width: "100%",
    height: "100%"
};

const headerStyles = Object.assign({

}, styles.defaultFont);

const contentStyles = Object.assign({

}, styles.defaultFont);

const componentsContainerStyles = Object.assign({

}, styles.defaultFont);

export default class EntityManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={containerStyles}>
                <div style={containerPaddingStyles}>
                    <div style={headerStyles}></div>
                    <div style={contentStyles}></div>
                    <div style={componentsContainerStyles}></div>
                </div>
            </div>
        );
    }
}