import React, { Component } from "react";
import services from "../../services";
import DonutGraph from "../graphs/DonutGraph";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    donutGraphContainer: {
        position: "absolute",
        height: "80%",
        left: 0,
        right: 0,
        top: 0,
        margin: "auto"
    },
    infoContainer: {
        position: "absolute",
        height: "20%",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center"
    },
    info: {
        color: "rgb(117, 58, 152",
        fontSize: "1.4vh",
        position: "absolute",
        bottom: "50%",
        width: "100%"
    }
};

class UptimeWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            days: 0,
            hours: 0,
            startDateString: ""
        }
    }

    componentWillMount() {
        services.uptimeService.getLatestUptimeAsync().then(uptime => {
            const startDate = new Date(uptime.startDate);
            const currentDate = new Date();
            const totalUptimeHours = Math.floor((currentDate - startDate) / 1000 / 60 / 60);

            this.setState({
                startDate,
                days: Math.floor(totalUptimeHours / 24),
                hours: totalUptimeHours % 24,
                startDateString: startDate.toDateString() + " " + startDate.toLocaleTimeString()
            });
        })
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={styles.container}>
                    <div style={styles.donutGraphContainer}>
                        <DonutGraph percentage={(this.state.hours / 24) * 100} total={this.state.days} label={"DAYS"} />
                    </div>
                    <div style={styles.infoContainer}>
                        <div style={styles.info}>{this.state.startDateString}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UptimeWidget;