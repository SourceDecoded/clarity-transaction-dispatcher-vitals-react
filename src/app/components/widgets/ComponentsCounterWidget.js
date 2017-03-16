import React, { Component } from "react";
import { connect, } from "react-redux";
import { getComponentsCount } from "../../redux/actions";
import Counter from "../shared/Counter";

class ComponentsCounterWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        this.props.getComponentsCount();
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.count !== nextProps.count) {
            this.setState({
                count: nextProps.count
            });
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <Counter count={this.state.count + this.props.componentsCount} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.componentsCount
    };
};

const mapDispatchToProps = {
    getComponentsCount
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsCounterWidget);