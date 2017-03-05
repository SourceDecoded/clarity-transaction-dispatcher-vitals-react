import React from "react";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    header: {
        color: "rgba(255, 255, 255, 0.85098)",
        fontSize: "1.7vh",
        textAlign: "center"
    },
    centerContent: {
        height: "70%",
        width: "70%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto"
    },
    donutContainer: {
        height: "80%",
        width: "100%"
    },
    donutInfoContainer: {
        height: "20%",
        width: "100%",
        textAlign: "center"
    },
    donutInfo: {
        color: "rgb(117, 58, 152",
        fontSize: "12px",
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    donutText: {
        fontSize: "12px",
        fill: "rgba(255, 255, 255, 0.85098)",
        transform: "translateY(0.25em)"
    },
    donutTotal: {
        fontSize: "8px",
        lineHeight: 1,
        textAnchor: "middle",
        transform: "translateY(-0.25em)"
    },
    donutLabel: {
        fontSize: "4px",
        textAnchor: "middle",
        transform: "translateY(0.7em)"
    }
};

const Uptime = props => {
    return (
        <div style={props.style}>
            <div style={styles.container}>
                <div style={styles.header}>UPTIME</div>
                <div style={styles.centerContent}>
                    <div style={styles.donutContainer}>
                        <svg width={"100%"} height={"100%"} viewBox={"0 0 40 42"}>
                            <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"}></circle>
                            <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"} stroke={"rgba(28, 28, 28, 0.6)"} strokeWidth={"5"}></circle>
                            <circle cx={"20"} cy={"21"} r={"15.91549430918954"} fill={"transparent"} stroke={"rgb(106, 27, 154)"} strokeWidth={"5"} strokeDasharray={"15 85"} strokeDashoffset={"25"}></circle>

                            <g style={styles.donutText}>
                                <text style={styles.donutTotal} x="50%" y="50%">
                                    10
                                </text>
                                <text style={styles.donutLabel} x="50%" y="50%">
                                    DAYS
                                </text>
                            </g>
                        </svg>
                    </div>
                    <div style={styles.donutInfoContainer}>
                        <div style={styles.donutInfo}>
                            Sun Mar 05 2017 11:32:42
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uptime;