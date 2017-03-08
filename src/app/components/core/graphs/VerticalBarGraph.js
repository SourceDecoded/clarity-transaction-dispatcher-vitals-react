import React, { Component } from "react";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    scaleContainer: {
        position: "absolute",
        left: 0,
        height: "90%",
        width: "10%"
    },
    labelContainer: {
        position: "absolute",
        height: "10%",
        left: "10%",
        bottom: 0,
        right: 0
    },
    barContainer: {
        position: "absolute",
        height: "90%",
        left: "10%",
        bottom: "10%",
        right: 0
    },
    scaleValue: {
        position: "absolute",
        width: "100%",
        fontSize: "1.2vh"
    },
    label: {
        textAlign: "center",
        fontSize: "1.2vh",
        position: "absolute",
        bottom: 0
    },
    column: {
        position: "absolute",
        height: "100%",
        bottom: 0
    },
    bar: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        zIndex: 2
    }
};

class VerticalBarGraph extends Component {
    constructor(props) {
        super(props);

        this.columnWidth = 0;
        this.largestScaleValue = 0;
        this.rowHeight = 0;
    }

    _createBarElements(items) {
        let leftPosition = 0;

        return (
            <div>
                {items.map((item, index) => {
                    const height = ((item.value / this.largestScaleValue) * 100) + "%";
                    const left = leftPosition + "%";
                    leftPosition += this.columnWidth * 2;

                    return (
                        <div style={Object.assign({}, styles.column, { width: this.columnWidth + "%", backgroundColor: item.emptyBackgroundColor, left })} key={index}>
                            <div style={Object.assign({}, styles.bar, { backgroundColor: item.backgroundColor, height })}></div>
                        </div>
                    )
                })}
            </div>
        );
    }

    _createLabelElements(items) {
        let leftPosition = 0;

        return (
            <div>
                {items.map((item, index) => {
                    const left = leftPosition + "%";
                    leftPosition += this.columnWidth * 2;

                    return <div style={Object.assign({}, styles.label, { width: this.columnWidth + "%", color: item.color, left })} key={index}>{item.label}</div>
                })}
            </div>
        );

    }

    _createScaleLabelElements(scales) {
        let topPosition = 100;

        return (
            <div>
                {scales.map((scale, index) => {
                    topPosition -= this.rowHeight;

                    return <div style={Object.assign({}, styles.scaleValue, { color: scale.color, top: topPosition + "%" })} key={index}>{scale.value}</div>
                })}
            </div>
        );
    }

    render() {
        const config = this.props.config;
        this.rowHeight = 100 / config.scales.length;
        this.largestScaleValue = config.scales.slice(-1)[0].value;
        this.columnWidth = 100 / ((config.items.length * 2) - 1);

        return (
            <div style={styles.container}>
                <div style={styles.scaleContainer}>
                    {this._createScaleLabelElements(this.props.config.scales)}
                </div>
                <div style={styles.labelContainer}>
                    {this._createLabelElements(this.props.config.items)}
                </div>
                <div style={styles.barContainer}>
                    {this._createBarElements(this.props.config.items)}
                </div>
            </div>
        );
    }
}

export default VerticalBarGraph;