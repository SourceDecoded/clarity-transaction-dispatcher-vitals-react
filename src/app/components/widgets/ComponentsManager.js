import React, { Component } from 'react';
import theme from "./../styles/theme";
import ComponentManager from "./ComponentManager";

const styles = {
    container: {
        position: "relavtive",
    },
    content: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: "50px",
        backgroundColor: theme.primaryLayer.backgroundColor,
        overflowY: "scroll"
    },
    footer: {
        position: "absolute",
        backgroundColor: theme.secondaryLayer.backgroundColor,
        width: "100%",
        height: "73px",
        lineHeight: "73px",
        textAlign: "center",
        bottom: 0,
        left: 0,
        boxShadow: "inset 0 -3px 5px rgba(0,0,0,0.3)",
    }
};

class ComponentsManager extends Component {
    render() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={styles.content}>
                    <ComponentManager />
                </div>
                <div style={styles.footer}>
                    <button>Add Component</button>
                </div>
            </div>
        );
    }
}

export default ComponentsManager;
