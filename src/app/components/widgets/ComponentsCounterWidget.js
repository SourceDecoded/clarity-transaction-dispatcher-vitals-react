import React, { Component } from "react";
import Counter from "../shared/Counter";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    counterContainer: {
        position: "absolute",
        height: "80%",
        left: 0,
        right: 0,
        top: 0,
        margin: "auto"
    },
    labelContainer: {
        position: "absolute",
        height: "20%",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center"
    },
    label: {
        color: "rgb(85, 139, 47",
        fontSize: "1.5vh",
        position: "absolute",
        top: "35%",
        width: "100%"
    }
};

class ComponentsCounterWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>
                    <div style={styles.counterContainer}>
                        <Counter count={this.state.count + this.props.componentsCount} />
                    </div>
                    <div style={styles.labelContainer}>
                        <div style={styles.label}>Total Components</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentsCounterWidget;