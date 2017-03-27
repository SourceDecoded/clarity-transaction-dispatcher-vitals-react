import React, { Component } from "react";
import theme from "./../styles/theme";

const styles = {
    container: Object.assign({
        position: "relative",
        cursor: "pointer",
        userSelect: "none"
    }, theme.input),
    placeholder: Object.assign({
        width: "100%",
        height: "100%",
        outline: "none",
        textTransform: "uppercase"
    }),
    options: Object.assign({
        zIndex: "1",
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        maxHeight: "100px",
        height: "auto",
        overflow: "auto",
        textTransform: "uppercase"
    }, theme.tertiaryLayer),
    option: {
        padding: theme.input.padding,
        height: "25px",
        lineHeight: "25px",
        cursor: 'pointer'
    },
    arrow: {
        width: "0",
        height: "0",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: "5px solid " + theme.defaultFont.color,
        position: "absolute",
        right: "5px",
        top: "50%",
        transform: "translate(0,-50%)"
    }
};

export default class SingleSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            selectedIndex: null,
            hoveredOption: null,
        };

        this.shouldScrollToSelected = false;
        this.value = this.props.value;
        this.optionsElement;
        this.changeCallback = typeof this.props.onChange === "function" ? this.props.onChange : () => { };
        this.mouseEnterOption = this.mouseEnterOption.bind(this);
        this.mouseLeaveOption = this.mouseLeaveOption.bind(this);
        this.clickOption = this.clickOption.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.openOptions = this.openOptions.bind(this);
        this.closeOptions = this.closeOptions.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    clickOption(event) {
        this.state.selectedIndex = event.target.getAttribute("data-index");
        this.value = this.props.values[this.state.selectedIndex];

        this.changeCallback(this.value);

        this.setState({
            selectedIndex: event.target.getAttribute("data-index")
        });
    }

    closeOptions() {
        this.setState({
            isFocused: false
        });
    }

    onKeyDown(event) {
        var index = this.state.selectedIndex;
        var shouldScrollToSelected = false;

        if (event.which == 38) {
            if (index == null) {
                index = this.props.values.length - 1;
            } else {
                index = index - 1 < 0 ? this.props.values.length - 1 : index - 1;
            }
        } else if (event.which == 40) {
            if (index == null) {
                index = 0;
            } else {
                index = index + 1 >= this.props.values.length ? 0 : index + 1;
            }
        } else if (event.which == 13) {
            this.closeOptions();
        }

        this.value = this.props.values[index] || null;

        if (this.state.selectedIndex !== index) {
            this.changeCallback(this.value);
            this.shouldScrollToSelected = true;
        }

        this.setState({
            selectedIndex: index
        });

    }

    openOptions() {
        this.setState({
            isFocused: true
        });
    }

    mouseEnterOption(event) {
        this.setState({
            hoveredOption: event.target.getAttribute("data-index")
        });
    }

    mouseLeaveOption(event) {
        this.setState({
            hoveredOption: null
        });
    }

    render() {
        var value = this.value;

        var optionsStyles = {
            display: this.state.isFocused ? "block" : "none"
        };

        if (this.optionsElement != null && this.shouldScrollToSelected) {
            this.optionsElement.scrollTop = parseInt(styles.option.height, 10) * this.state.selectedIndex;
            this.shouldScrollToSelected = false;
        }

        return (
            <div style={Object.assign(styles.container, this.props.style)}>
                <div tabIndex="0" onClick={this.toggleOptions} onBlur={this.closeOptions} style={Object.assign(styles.placeholder)} onKeyDown={this.onKeyDown}>
                    <div style={Object.assign({
                        width: "100%",
                        padding: theme.input.padding
                    }, theme.center)}>{value || "--SELECT--"}</div>
                    <div style={styles.arrow}></div>
                </div>
                <div ref={(div) => { this.optionsElement = div; }} style={Object.assign({}, styles.options, optionsStyles)}>
                    {this.renderValues(this.props.values)}
                </div>
            </div>
        );
    }

    renderValues(values) {
        return values.map((value, index) => {
            var highlight = (this.state.hoveredOption == null && this.state.selectedIndex === index) ||
                this.state.hoveredOption === index.toString();

            var style = Object.assign({}, styles.option, {
                backgroundColor: highlight ? theme.secondaryColor.backgroundColor : ""
            });

            return (
                <div data-index={index} onMouseDown={this.clickOption} onMouseEnter={this.mouseEnterOption} onMouseLeave={this.mouseLeaveOption} style={style}>{value}</div>
            );
        });
    }

    toggleOptions() {
        if (this.state.isFocused) {
            this.closeOptions();
        } else {
            this.openOptions();
        }
    }

}

SingleSelect.defaultProps = {
    values: [],
    value: null
};