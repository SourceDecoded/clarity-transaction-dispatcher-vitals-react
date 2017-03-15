import React, { Component } from "react";
import { connect, } from "react-redux";
import { getEntitiesCount } from "../../redux/actions";
import Counter from "../shared/Counter";

class EntitiesCounterWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        this.props.getEntitiesCount();
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
                <Counter type={"Entities"} count={this.state.count + this.props.entitiesCount} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.entitiesCount
    };
};

const mapDispatchToProps = {
    getEntitiesCount
};

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesCounterWidget);