import React from "react";

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "15%",
        textAlign: "left",
        color: "rgba(255, 255, 255, 0.85098)"
    },
    headerType: {
        fontSize: "1.2vh",
    },
    headerTotal: {
        fontSize: "1.8vh",
    },
    main: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "85%"
    },
    labelContainer: {
        position: "absolute",
        height: "8%",
        left: "0",
        bottom: 0,
        right: 0
    },
    label: {
        textAlign: "center",
        width: "7.142857142857143%",
        color: "rgba(239, 108, 0, .8)",
        fontSize: "1.4vh",
        position: "absolute",
        bottom: 0
    },
    scaleLabelContainer: {
        position: "absolute",
        height: "100%",
        left: 0,
        width: "2%"
    },
    scaleLabel: {
        position: "absolute",
        textAlign: "right",
        width: "100%",
        fontSize: "1.4vh",
        color: "rgba(239, 108, 0, .8)"
    },
    column: {
        position: "absolute",
        bottom: "8%",
        height: "92%",
        backgroundColor: "rgba(42, 42, 43, 0.55)",
        width: "7.142857142857143%"
    },
    column1: {
        left: "6.142857142857143%"
    },
    column2: {
        left: "20.42857142857143%"
    },
    column3: {
        left: "34.71428571428572%"

    },
    column4: {
        left: "49.00000000000001%"

    },
    column5: {
        left: "63.2857142857143%"

    },
    column6: {
        left: "77.57142857142859%"

    },
    column7: {
        left: "91.85714285714288%"
    },
    bar: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        backgroundColor: "rgb(239, 108, 0)",
        zIndex: 2
    },
    row: {
        position: "absolute",
        right: 0,
        left: "5.142857142857143%",
        zIndex: 1,
        borderTop: "3px solid rgba(25, 25, 25, .3)"
    },
    row4: {
        top: 0,
    },
    row3: {
        top: "29%"
    },
    row2: {
        top: "58%"
    },
    row1: {
        bottom: "8%"
    }
};

const WeeklyGraph = props => {
    const header = props.data.header;
    const scale = props.data.scale;
    const column1 = props.data.columns[0];
    const column2 = props.data.columns[1];
    const column3 = props.data.columns[2];
    const column4 = props.data.columns[3];
    const column5 = props.data.columns[4];
    const column6 = props.data.columns[5];
    const column7 = props.data.columns[6];

    return (
        <div style={props.style}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.headerType}>{(header.type).toUpperCase()}</div>
                    <div style={styles.headerTotal}>{header.total}</div>
                </div>
                <div style={styles.main}>
                    <div style={styles.labelContainer}>
                        <div style={Object.assign({}, styles.label, styles.column1)}>{column1.label}</div>
                        <div style={Object.assign({}, styles.label, styles.column2)}>{column2.label}</div>
                        <div style={Object.assign({}, styles.label, styles.column3)}>{column3.label}</div>
                        <div style={Object.assign({}, styles.label, styles.column4)}>{column4.label}</div>
                        <div style={Object.assign({}, styles.label, styles.column5)}>{column5.label}</div>
                        <div style={Object.assign({}, styles.label, styles.column6)}>{column6.label}</div>
                        <div style={Object.assign({}, styles.label, styles.column7)}>{column7.label}</div>
                    </div>

                    <div style={styles.scaleLabelContainer}>
                        <div style={Object.assign({}, styles.scaleLabel, styles.row4)}>{scale[2]}</div>
                        <div style={Object.assign({}, styles.scaleLabel, styles.row3)}>{scale[1]}</div>
                        <div style={Object.assign({}, styles.scaleLabel, styles.row2)}>{scale[0]}</div>
                        <div style={Object.assign({}, styles.scaleLabel, styles.row1)}>{0}</div>
                    </div>

                    <div style={Object.assign({}, styles.row, styles.row4)}></div>
                    <div style={Object.assign({}, styles.row, styles.row3)}></div>
                    <div style={Object.assign({}, styles.row, styles.row2)}></div>
                    <div style={Object.assign({}, styles.row, styles.row1)}></div>

                    <div style={Object.assign({}, styles.column, styles.column1)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column1.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                    <div style={Object.assign({}, styles.column, styles.column2)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column2.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                    <div style={Object.assign({}, styles.column, styles.column3)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column3.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                    <div style={Object.assign({}, styles.column, styles.column4)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column4.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                    <div style={Object.assign({}, styles.column, styles.column5)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column5.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                    <div style={Object.assign({}, styles.column, styles.column6)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column6.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                    <div style={Object.assign({}, styles.column, styles.column7)}>
                        <div style={Object.assign({}, styles.bar, { height: ((column7.total / scale[2]) * 100) + "%" })}></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeeklyGraph;