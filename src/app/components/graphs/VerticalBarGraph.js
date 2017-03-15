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
    },
    scaleRowLine: {
        position: "absolute",
        right: 0,
        left: 0,
        zIndex: 1
    }
};

class VerticalBarGraph extends Component {
    constructor(props) {
        super(props);

        this.columnWidth = 0;
        this.largestScaleValue = 0;
        this.rowHeight = 0;

        this._createBarElements = this._createBarElements.bind(this);
        this._createLabelElements = this._createLabelElements.bind(this);
        this._createScaleLabelElements = this._createScaleLabelElements.bind(this);
        this._createScaleRowLineElements = this._createScaleRowLineElements.bind(this);
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
                        <div style={Object.assign({}, styles.column, { width: this.columnWidth + "%", backgroundColor: this.props.theme.emptyBarBackgroundColor, left })} key={index}>
                            <div style={Object.assign({}, styles.bar, { backgroundColor: this.props.theme.barBackgroundColor, height })}></div>
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

                    return <div style={Object.assign({}, styles.label, { width: this.columnWidth + "%", color: this.props.theme.labelColor, left })} key={index}>{item.label}</div>
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

                    return <div style={Object.assign({}, styles.scaleValue, { color: this.props.theme.labelColor, top: topPosition + "%" })} key={index}>{scale}</div>
                })}
            </div>
        );
    }

    _createScaleRowLineElements(scales) {
        let topPosition = 100;

        return (
            <div>
                <div style={Object.assign({}, styles.scaleRowLine, { borderTop: `3px solid ${this.props.theme.scaleLineColor}`, bottom: 0 })}></div>

                {scales.map((scale, index) => {
                    topPosition -= this.rowHeight;

                    return <div style={Object.assign({}, styles.scaleRowLine, { borderTop: `3px solid ${this.props.theme.scaleLineColor}`, top: topPosition + "%" })} key={index}></div>
                })}
            </div>
        );
    }

    render() {
        const scales = this.props.scales;
        const items = this.props.items;
        this.rowHeight = 100 / scales.length;
        this.largestScaleValue = scales.length > 0 ? scales.slice(-1)[0] : 0;
        this.columnWidth = 100 / ((items.length * 2) - 1);

        return (
            <div style={styles.container}>
                <div style={styles.scaleContainer}>
                    {this._createScaleLabelElements(scales)}
                </div>
                <div style={styles.labelContainer}>
                    {this._createLabelElements(items)}
                </div>
                <div style={styles.barContainer}>
                    {this._createBarElements(items)}
                    {this._createScaleRowLineElements(scales)}
                </div>
            </div>
        );
    }
}

export default VerticalBarGraph;