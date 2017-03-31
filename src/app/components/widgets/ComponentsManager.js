import React, { Component } from 'react';
import theme from "./../styles/theme";
import ComponentManager from "./ComponentManager";
import IconButton from "./IconButton";

const styles = {
    container: {
        position: "relavtive",
    },
    content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: theme.primaryLayer.backgroundColor,
        overflowY: "scroll"
    },
    add: {
        position: "absolute",
        bottom: "15px",
        right: "25px"
    }
};

class ComponentsManager extends Component {
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
            <div style={Object.assign({}, styles.container, this.props.style)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <div style={styles.content}>
                    <ComponentManager />
                </div>
                <IconButton icon="plus" style={Object.assign({
                    display: this.state.isHovered ? "block" : "none"
                }, styles.add)} />
                    
            </div>
        );
    }
}

export default ComponentsManager;
