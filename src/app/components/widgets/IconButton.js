import React, { Component } from 'react';
import theme from "./../styles/theme";

const styles = {
    container: {
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        lineHeight: "50px",
        textAlign: "center",
        fontSize: "14px",
        cursor: "pointer"
    }
};

class IconButton extends Component {

    render() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style, {
                backgroundColor: this.props.color,
                color: this.props.fontColor
            })}>
                <i className={"mdi-" + this.props.icon}></i>
            </div>
        );
    }
}

export default IconButton;

IconButton.defaultProps = {
    icon: "help",
    fontColor: "rgba(255,255,255,0.75)",
    color: theme.secondaryColor.backgroundColor
}