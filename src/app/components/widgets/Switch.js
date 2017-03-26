import React, { Component } from "react";
import theme from "./../styles/theme";
import { CustomRenderAnimation } from "clarity-animation";

const half = {
    width: "50%",
    height: "100%"
};

const styles = {
    container: Object.assign({
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        msUserSelect: "none"
    }, theme.secondaryLayer, theme.input, {
            width: "75px"
        }),
    handle: Object.assign({
        position: "absolute",
        top: "-3%",
        left: "-2%",
        width: "54%",
        height: "106%",
    }, theme.container, theme.quaternaryLayer),
    on: Object.assign({
        position: "absolute",
        opacity: "0.85",
        top: "0",
        left: "0",
        textTransform: "uppercase",
        borderRadius: "3px 0 0 3px",
        color: "rgba(255,255,255,0.85)"
    }, half, theme.secondaryColor),
    off: Object.assign({
        position: "absolute",
        top: "0",
        left: "50%",
        textTransform: "uppercase",
        borderRadius: "0 3px 3px 0",
        color: "rgba(255,255,255,0.75)"
    }, half, theme.tertiaryLayer),
    centerText: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%"
    }
};

export default class PropertyManager extends Component {
    constructor(props) {
        super(props);
        this.value = false;
        this.handlePosition = {
            left: "-1%",
        };

        this.handleAnimation = new CustomRenderAnimation({
            target: this.handlePosition,
            renderer: (values) => {
                this.handlePosition = values;
                this.forceUpdate();
            },
            properties: {
                left: {
                    from: "-2%",
                    to: "49%"
                }
            },
            easing: "linear",
            duration: 200
        });

        this.changeCallback = typeof this.props.onChange === "function" ? this.props.onChange : () => { };
        this.toggle = this.toggle.bind(this);
    }

    turnOn() {
        this.value = true;
        this.changeCallback(this.value);
        this.handleAnimation.pause().seek(0).play();
    }

    turnOff() {
        this.value = false;
        this.changeCallback(this.value);
        this.handleAnimation.pause().seek(1).reverse();
    }

    toggle() {
        if (this.value) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    }

    render() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)} onClick={this.toggle}>
                <div style={styles.on} >
                    <div style={styles.centerText}>on</div>
                </div>
                <div style={styles.off}>
                    <div style={styles.centerText}>Off</div>
                </div>
                <div style={Object.assign({}, styles.handle, this.handlePosition)}></div>
            </div>
        );
    }
}