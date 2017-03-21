import React, { Component } from "react";
import { ListView, ListViewDataSource } from "clarity-react-infinite-list";
import { connect, } from "react-redux";
import { getLogs } from "../../redux/actions";
import LogListItem from "../layouts/LogListItem";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    listView: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        overflowY: "scroll",
        WebkitOverflowScrolling: "touch"
    }
};

class LoggerWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListViewDataSource(50),
            lastLogId: 0
        };

        this._renderRow = this._renderRow.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this._loadingComponent = this._loadingComponent.bind(this);
    }

    _renderRow(rowData, rowId) {
        return (
            <LogListItem key={rowId} rowData={rowData} />
        );
    }

    _onEndReached() {
        
    }

    _loadingComponent() {

    }

    componentWillMount() {
        this.props.getLogs(this.state.lastLogId, 50);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logs[nextProps.logs.length - 1] && this.state.lastLogId !== nextProps.logs[nextProps.logs.length - 1]._id) {
            this.setState({
                dataSource: this.state.dataSource.appendRows(nextProps.logs),
                lastLogId: nextProps.logs[nextProps.logs.length - 1]._id,
            });
        }

        if (this.props.streamedLog !== nextProps.streamedLog) {
            this.setState({
                dataSource: this.state.dataSource.prependRows(nextProps.streamedLog)
            });
            console.log(nextProps.streamedLog);
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>
                    <ListView style={styles.listView}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        onEndReached={this._onEndReached}
                        loadingComponent={this._loadingComponent}
                        onEndReachedThreshold={2000}
                        ref={listView => this.listView = listView} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logs
    };
};

const mapDispatchToProps = {
    getLogs
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggerWidget);