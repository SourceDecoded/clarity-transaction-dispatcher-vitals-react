import React, { Component } from "react";
import SingleSelect from "./SingleSelect";
import theme from "./../styles/theme";
import Switch from "./Switch";

const styles = {
    container: {
        position: "relative"
    },
    header: {
        position: "relative",
        height: theme.input.height
    },
    name: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100px",
        height: theme.input.height,
        lineHeight: theme.input.height,
        color: "rgba(255,255,255,0.75)",
        fontSize: theme.input.fontSize,
        padding: "0 5px"
    },
    typeSelector: {
        position: "absolute",
        top: 0,
        left: "100px",
        width: "100px",
        height: theme.input.height,
        lineHeight: theme.input.height,
        padding: "0 5px"
    },
    value: {
        position: "absolute",
        top: 0,
        left: "200px",
        right: 0,
        bottom: 0,
        padding: "0 5px",
        textAlign: "center"
    }
};

export default class PropertyManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type
        };

        this.renderers = {
            "null": this.renderNullType.bind(this),
            "boolean": this.renderBooleanType.bind(this),
            "date": this.renderDateType.bind(this),
            "string": this.renderStringType.bind(this),
            "number": this.renderNumberType.bind(this)
        };

        this.inputOptions = Object.keys(this.renderers);

        this.onTypeChange = this.onTypeChange.bind(this);
    }

    onTypeChange(value) {
        this.setState({
            type: value
        });
    }

    render() {
        return this.renderers[this.state.type]();
    }

    renderNullType() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={styles.header}>
                    <div style={styles.name}>{this.props.name}</div>
                    <div style={styles.typeSelector}>
                        <SingleSelect style={{ width: "100%" }} values={this.inputOptions} value={this.state.type} onChange={this.onTypeChange} />
                    </div>
                    <div style={styles.value}>
                        Null
                    </div>
                </div>
            </div>
        );
    }

    renderBooleanType() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={styles.header}>
                    <div style={styles.name}>{this.props.name}</div>
                    <div style={styles.typeSelector}>
                        <SingleSelect style={{ width: "100%" }} values={this.inputOptions} value={this.state.type} onChange={this.onTypeChange} />
                    </div>
                    <div style={styles.value}>
                        <Switch style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        );
    }

    renderDateType() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={styles.header}>
                    <div style={styles.name}>{this.props.name}</div>
                    <div style={styles.typeSelector}>
                        <SingleSelect style={{ width: "100%" }} values={this.inputOptions} value={this.state.type} onChange={this.onTypeChange} />
                    </div>
                    <div style={styles.value}>
                        <input style={Object.assign({}, theme.input, { width: "100%" })} />
                    </div>
                </div>
            </div>
        );
    }

    renderStringType() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={styles.header}>
                    <div style={styles.name}>{this.props.name}</div>
                    <div style={styles.typeSelector}>
                        <SingleSelect style={{ width: "100%" }} values={this.inputOptions} value={this.state.type} onChange={this.onTypeChange} />
                    </div>
                    <div style={styles.value}>
                        <input style={Object.assign({}, theme.input, { width: "100%" })} />
                    </div>
                </div>
            </div>
        );
    }

    renderNumberType() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={styles.header}>
                    <div style={styles.name}>{this.props.name}</div>
                    <div style={styles.typeSelector}>
                        <SingleSelect style={{ width: "100%" }} values={this.inputOptions} value={this.state.type} onChange={this.onTypeChange} />
                    </div>
                    <div style={styles.value}>
                        <Switch style={{ width: "50%" }} />
                    </div>
                </div>
            </div>
        );
    }

}

PropertyManager.defaultProps = {
    name: "Name",
    type: null
};