import React, { Component } from "react";
import io from "socket.io-client";
import { connect, } from "react-redux";
import { socketMonitorServer } from "../../configs/EnvironmentVariables";
import { getComponentsCount, getEntitiesCount } from "../redux/actions";

import MultiGraphWidget from "../components/widgets/MultiGraphWidget";
import UptimeWidget from "../components/widgets/UptimeWidget";
import EntitiesTransactionGraphWidget from "../components/widgets/EntitiesTransactionGraphWidget";
import ComponentsTransactionGraphWidget from "../components/widgets/ComponentsTransactionGraphWidget";
import EntitiesCounterWidget from "../components/widgets/EntitiesCounterWidget";
import ComponentsCounterWidget from "../components/widgets/ComponentsCounterWidget";
import LoggerWidget from "../components/widgets/LoggerWidget";

//TODO: Set min-width and min-height (1200 x 800)

export const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    widget: {
        backgroundColor: "rgb(35, 35, 36)",
        height: "100%",
        padding: "24px"
    },
    multiGraphWidget: {
        position: "absolute",
        left: 0,
        height: "40%",
        width: "65%"
    },
    uptimeWidget: {
        position: "absolute",
        right: 0,
        paddingLeft: "24px",
        width: "35%",
        height: "40%"
    },
    entitiesCounterWidget: {
        position: "absolute",
        top: "40%",
        paddingTop: "24px",
        left: 0,
        width: "calc(32.5% - 12px)",
        height: "30%"
    },
    componentsCounterWidget: {
        position: "absolute",
        top: "40%",
        paddingTop: "24px",
        paddingLeft: "24px",
        left: "calc(32.5% - 12px)",
        width: "calc(32.5% + 12px)",
        height: "30%"
    },
    entitiesTransactionGraphWidget: {
        position: "absolute",
        top: "70%",
        paddingTop: "24px",
        left: 0,
        width: "calc(32.5% - 12px)",
        height: "30%"
    },
    componentsTransactionGraphWidget: {
        position: "absolute",
        top: "70%",
        paddingTop: "24px",
        paddingLeft: "24px",
        left: "calc(32.5% - 12px)",
        width: "calc(32.5% + 12px)",
        height: "30%"
    },
    loggerWidget: {
        position: "absolute",
        top: "40%",
        right: 0,
        paddingTop: "24px",
        paddingLeft: "24px",
        width: "35%",
        height: "60%"
    }
};

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entitiesCount: 0,
            componentsCount: 0,
            todaysTransactionCount: 0,
            entitiesTransactionCounts: {
                added: 0,
                removed: 0,
                updated: 0,
                retrieved: 0
            },
            componentsTransactionCounts: {
                added: 0,
                removed: 0,
                updated: 0,
                retrieved: 0
            }
        }

        this.socket = io(socketMonitorServer);
        this._entityAddedEvent = this._entityAddedEvent.bind(this);
        this._entityUpdatedEvent = this._entityUpdatedEvent.bind(this);
        this._entityRemovedEvent = this._entityRemovedEvent.bind(this);
        this._entityRetrievedEvent = this._entityRetrievedEvent.bind(this);
        this._entityContentUpdatedEvent = this._entityContentUpdatedEvent.bind(this);
        this._componentAddedEvent = this._componentAddedEvent.bind(this);
        this._componentUpdatedEvent = this._componentUpdatedEvent.bind(this);
        this._componentRemovedEvent = this._componentRemovedEvent.bind(this);
        this._componentRetrievedEvent = this._componentRetrievedEvent.bind(this);
    }

    _entityAddedEvent(transaction) {
        this.setState((prevState) => {
            return {
                entitiesCount: prevState.entitiesCount + 1,
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                entitiesTransactionCounts: Object.assign({}, prevState.entitiesTransactionCounts, { added: prevState.entitiesTransactionCounts.added + 1 })
            }
        });
    }

    _entityUpdatedEvent(transaction) {
        this.setState((prevState) => {
            return {
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                entitiesTransactionCounts: Object.assign({}, prevState.entitiesTransactionCounts, { updated: prevState.entitiesTransactionCounts.updated + 1 })
            }
        });
    }

    _entityRemovedEvent(transaction) {
        this.setState((prevState) => {
            return {
                entitiesCount: prevState.entitiesCount - 1,
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                entitiesTransactionCounts: Object.assign({}, prevState.entitiesTransactionCounts, { removed: prevState.entitiesTransactionCounts.removed + 1 })
            }
        });
    }

    _entityRetrievedEvent(transaction) {
        this.setState((prevState) => {
            return {
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                entitiesTransactionCounts: Object.assign({}, prevState.entitiesTransactionCounts, { retrieved: prevState.entitiesTransactionCounts.retrieved + 1 })
            }
        });
    }

    _entityContentUpdatedEvent(transaction) {
        this.setState((prevState) => {
            return {
                todaysTransactionCount: prevState.todaysTransactionCount + 1
            }
        });
    }

    _componentAddedEvent(transaction) {
        this.setState((prevState) => {
            return {
                componentsCount: prevState.componentsCount + 1,
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                componentsTransactionCounts: Object.assign({}, prevState.componentsTransactionCounts, { added: prevState.componentsTransactionCounts.added + 1 })
            }
        });
    }

    _componentUpdatedEvent(transaction) {
        this.setState((prevState) => {
            return {
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                componentsTransactionCounts: Object.assign({}, prevState.componentsTransactionCounts, { updated: prevState.componentsTransactionCounts.updated + 1 })
            }
        });
    }

    _componentRemovedEvent(transaction) {
        this.setState((prevState) => {
            return {
                componentsCount: prevState.componentsCount - 1,
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                componentsTransactionCounts: Object.assign({}, prevState.componentsTransactionCounts, { removed: prevState.componentsTransactionCounts.removed + 1 })
            }
        });
    }

    _componentRetrievedEvent(transaction) {
        this.setState((prevState) => {
            return {
                todaysTransactionCount: prevState.todaysTransactionCount + 1,
                componentsTransactionCounts: Object.assign({}, prevState.componentsTransactionCounts, { retrieved: prevState.componentsTransactionCounts.retrieved + 1 })
            }
        });
    }

    componentWillMount() {
        this.socket.on("allTransactions", data => {
            const events = {
                "entityAdded": this._entityAddedEvent,
                "entityUpdated": this._entityUpdatedEvent,
                "entityRemoved": this._entityRemovedEvent,
                "entityRetrieved": this._entityRetrievedEvent,
                "entityContentUpdated": this._entityContentUpdatedEvent,
                "entityComponentAdded": this._componentAddedEvent,
                "entityComponentUpdated": this._componentUpdatedEvent,
                "entityComponentRemoved": this._componentRemovedEvent,
                "entityComponentRetrieved": this._componentRetrievedEvent
            };

            if (events[data.transaction.type]) {
                events[data.transaction.type](data.transaction);
            }

            console.log(data.transaction);
        });
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>
                    <div style={styles.multiGraphWidget}>
                        <MultiGraphWidget style={styles.widget} todaysTransactionCount={this.state.todaysTransactionCount} />
                    </div>

                    <div style={styles.uptimeWidget}>
                        <UptimeWidget style={styles.widget} />
                    </div>

                    <div style={styles.entitiesCounterWidget}>
                        <EntitiesCounterWidget style={styles.widget} entitiesCount={this.state.entitiesCount} />
                    </div>

                    <div style={styles.componentsCounterWidget}>
                        <ComponentsCounterWidget style={styles.widget} componentsCount={this.state.componentsCount} />
                    </div>

                    <div style={styles.entitiesTransactionGraphWidget}>
                        <EntitiesTransactionGraphWidget style={styles.widget} entitiesTransactionCounts={this.state.entitiesTransactionCounts} />
                    </div>

                    <div style={styles.componentsTransactionGraphWidget}>
                        <ComponentsTransactionGraphWidget style={styles.widget} componentsTransactionCounts={this.state.componentsTransactionCounts} />
                    </div>

                    <div style={styles.loggerWidget}>
                        <LoggerWidget style={styles.widget} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        componentsCount: state.componentsCount,
        entitiesCount: state.entitiesCount
    };
};

const mapDispatchToProps = {
    getComponentsCount,
    getEntitiesCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);