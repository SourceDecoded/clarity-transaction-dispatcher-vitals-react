import React, { Component } from "react";
import theme from "./../styles/theme";

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "80px",
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
        left: 0,
        right: "100px",
        height: "50px",
        lineHeight: "50px",
        paddingLeft: "10px",
        borderRadius: "3px"
    },
    actions: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "30px",
        height: "100%"
    },
    center: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%"
    }
};

export default class ComponentManager extends Component {
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
            <div style={styles.container} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <div style={styles.padding}>
                    <div style={styles.type}>{this.props.component && this.props.component.type || "Unknown"}</div>
                    <div style={styles.actions}>
                        <div style={Object.assign({
                            display: this.state.isHovered ? "block" : "none"
                        }, styles.center)}>
                            <i className="mdi-close" style={{ color: "#9a2100", fontSize: "16px", cursor: "pointer" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ComponentManager.defaultProps = {
    component: null
}