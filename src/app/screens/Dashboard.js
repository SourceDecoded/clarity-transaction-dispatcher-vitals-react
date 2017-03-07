import React, { Component } from "react";
import io from "socket.io-client";
import { CustomRenderAnimation, Timeline, PercentageTimeline } from "clarity-animation";
import { connect, } from "react-redux";
import { getLatestUptime, getComponentsCount, getEntitiesCount } from "../redux/actions";
import { socketMonitorServer } from "../../configs/EnvironmentVariables";
import { dashboard as styles } from "../css";
import TransactionGraph from "../components/screens/dashboard/TransactionGraph";
import Uptime from "../components/screens/dashboard/Uptime";
import TotalCard from "../components/screens/dashboard/TotalCard";

//TODO: Set min-width and min-height (1200 x 800)

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uptimePercentage: 0,
            totalEntities: 0,
            totalComponents: 0,
            latestUptime: {
                startDate: null,
                days: null,
                hours: null,
                dateString: null
            },
            graphData: {
                weekly: {
                    header: {
                        type: "Transactions",
                        total: 590
                    },
                    columns: [
                        { label: "2/26", total: 20 }, { label: "2/27", total: 50 }, { label: "2/28", total: 80 },
                        { label: "3/1", total: 140 }, { label: "3/2", total: 110 }, { label: "3/3", total: 65 }, { label: "3/4", total: 125 }
                    ],
                    scale: [50, 100, 150]
                }
            }
        }

        this.socket = io(socketMonitorServer);
    }

    _getCounts() {
        this.props.getComponentsCount();
        this.props.getEntitiesCount();
    }

    _init() {
        this.props.getLatestUptime();
        this._getCounts();
    }

    _initializeAnimations() {
        var overshoot = new CustomRenderAnimation({
            renderer: (values) => {
                this.setState({
                    uptimePercentage: values.percentage
                });
            },
            properties: {
                percentage: {
                    from: 0,
                    to: 100
                }
            },
            easing: "linear",
            duration: 1000
        });

        var value = new CustomRenderAnimation({
            renderer: (values) => {
                this.setState({
                    uptimePercentage: values.percentage
                });
            },
            properties: {
                percentage: {
                    from: 100,
                    to: 4
                }
            },
            easing: "easeOutExpo",
            duration: 2000
        });

        // var timeline = new Timeline();
        // timeline.add(
        //     {
        //         animation: overshoot,
        //         offset: 0
        //     }, {
        //         animation: value,
        //         offset: 1000
        //     }
        // );

        // setTimeout(function(){
        //     timeline.play();
        // }, 1500);

        var timeline = new PercentageTimeline(10000);
        timeline.add(
            {
                animation: overshoot,
                startAt: 0,
                endAt: 0.5
            }, {
                animation: value,
                startAt: 0.5,
                endAt: 1
            }
        );
        timeline.play();
    }

    componentWillMount() {
        this._init();

        this.socket.on("allTransactions", data => {
            this._getCounts();
        });
    }
    componentDidMount() {
        this._initializeAnimations();
    };

    componentWillReceiveProps(nextProps) {
        //TODO: Move this functionality to inside of Uptime component.
        if (this.state.latestUptime !== nextProps.uptime ||
            this.state.totalEntities !== nextProps.entitiesCount ||
            this.state.totalComponents !== nextProps.componentsCount) {

            const startDate = new Date(nextProps.uptime.startDate);
            const currentDate = new Date();
            const totalHours = Math.floor((currentDate - startDate) / 1000 / 60 / 60);

            this.setState({
                latestUptime: {
                    startDate,
                    days: Math.floor(totalHours / 24),
                    hours: totalHours % 24,
                    dateString: startDate.toDateString() + " " + startDate.toLocaleTimeString()
                },
                totalComponents: nextProps.componentsCount,
                totalEntities: nextProps.entitiesCount
            });
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>
                    <TransactionGraph style={styles.transactionGraph} data={this.state.graphData} />
                    <div style={styles.uptimeContainer}>
                        <Uptime style={styles.uptime} percentage={this.state.uptimePercentage} latestUptime={this.state.latestUptime} />
                    </div>
                    <div style={styles.entitiesGraphContainer}>
                        <div style={styles.entitiesGraph}></div>
                    </div>
                    <div style={styles.componentsGraphContainer}>
                        <div style={styles.componentsGraph}></div>
                    </div>
                    <div style={styles.entitiesTotalContainer}>
                        <TotalCard style={styles.entitiesTotal} config={{ total: this.state.totalEntities, type: "Entities" }} />
                    </div>
                    <div style={styles.componentsTotalContainer}>
                        <TotalCard style={styles.componentsTotal} config={{ total: this.state.totalComponents, type: "Components" }} />
                    </div>
                    <div style={styles.loggerContainer}>
                        <div style={styles.logger}></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uptime: state.uptime,
        componentsCount: state.componentsCount,
        entitiesCount: state.entitiesCount
    };
};

const mapDispatchToProps = {
    getLatestUptime,
    getComponentsCount,
    getEntitiesCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);