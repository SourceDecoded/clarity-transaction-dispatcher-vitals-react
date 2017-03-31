import React, { Component } from 'react';
import { CustomRenderAnimation, PercentageTimeline } from "clarity-animation";

const styles = {
    container: {
        position: "relative",
        width: "100px",
        height: "100px",
        color: "rgba(255,255,255,0.75)"
    },
    largeCircle: {
        borderRadius: "50%",
        position: "absolute",
        width: "60%",
        height: "60%",
        backgroundColor: "#3d66cd",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        boxSizing: "border-box",
        border: "3px solid #7998e7"
    },
    smallCircle: {
        borderRadius: "50%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        backgroundColor: "#7998e7",
    },
    smallCirclesContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        transformOrigin: "50% 50%",
        width: "20%",
        height: "20%",
        top: "50%",
        left: "50%"
    },
    text: {
        position: "absolute",
        bottom: 0,
        left: 0,
        textAlign: "center",
        width: "100%",
        fontSize: "11px"
    }
};

class Loading extends Component {
    constructor(props) {
        super(props);

        this.largeCircleStyles = {};
        this.firstSmallCircleStyles = {};
        this.secondSmallCircleStyles = {};
        this.smallCirclesContainerStyles = {};

        var firstJiggle = new CustomRenderAnimation({
            render: (values) => {
                this.largeCircleStyles.transform = `scale(${values.scaleX}, ${values.scaleY}) translate(-50%, -50%)`;
                this.largeCircleStyles.transformOrigin = "0% 0%"
            },
            properties: {
                scaleY: {
                    from: 0.6,
                    to: 0.9
                },
                scaleX: {
                    from: 1.25,
                    to: 0.9
                }
            },
            easing: "easeOutElastic"
        });

        var lastJiggle = new CustomRenderAnimation({
            render: (values) => {
                this.largeCircleStyles.transform = `scale(${values.scaleX}, ${values.scaleY}) translate(-50%, -50%)`;
                this.largeCircleStyles.transformOrigin = "0% 0%"
            },
            properties: {
                scaleY: {
                    from: 1.15,
                    to: 1
                },
                scaleX: {
                    from: 0.8,
                    to: 1
                }
            },
            easing: "easeOutElastic"
        });

        var escape = new CustomRenderAnimation({
            render: (values) => {
                this.firstSmallCircleStyles.left = values.left;
                this.secondSmallCircleStyles.left = "-" + values.left
            },
            properties: {
                left: {
                    from: "0px",
                    to: "50px"
                }
            },
            easing: "easeOutExpo"
        });

        var returning = new CustomRenderAnimation({
            render: (values) => {
                this.firstSmallCircleStyles.left = values.left;
                this.secondSmallCircleStyles.left = "-" + values.left
            },
            properties: {
                left: {
                    from: "50px",
                    to: "0px"
                }
            },
            easing: "easeInQuad"
        });

        var orbit = new CustomRenderAnimation({
            render: (values) => {
                this.smallCirclesContainerStyles.transform = `translate(-50%, -50%) rotate(${values.rotateZ})`;
                this.smallCirclesContainerStyles.transformOrigin = "50% 50%";
            },
            properties: {
                rotateZ: {
                    from: "0deg",
                    to: "720deg"
                }
            },
            easing: "easeOutExpo"
        });



        var timeline = new PercentageTimeline(6000);
        timeline.observe("tick", () => {
            this.forceUpdate()
        });

        timeline.add(
            {
                animation: firstJiggle,
                startAt: 0,
                endAt: 0.15
            }, {
                animation: escape,
                startAt: 0,
                endAt: 0.10
            }, {
                animation: orbit,
                startAt: 0.10,
                endAt: 0.5
            }, {
                animation: returning,
                startAt: 0.5,
                endAt: 0.56
            }, {
                animation: lastJiggle,
                startAt: 0.54,
                endAt: 0.75
            },
        );

        this.timeline = timeline;
        this.timeline.repeat = Infinity;
    }

    componentDidMount() {
        this.timeline.play();
    }

    componentWillUnmount() {
        this.timeline.stop();
    }

    render() {
        return (
            <div style={Object.assign({}, styles.container, this.props.style)}>
                <div style={{ transform: "rotate(-35deg)", width: "100%", height: "100%" }}>
                    <div style={Object.assign({}, styles.smallCirclesContainer, this.smallCirclesContainerStyles)}>
                        <div style={Object.assign({}, styles.smallCircle, this.firstSmallCircleStyles)}></div>
                        <div style={Object.assign({}, styles.smallCircle, this.secondSmallCircleStyles)}></div>
                    </div>
                    <div style={Object.assign({}, styles.largeCircle, this.largeCircleStyles)}></div>
                </div>
                <div style={Object.assign({}, styles.text)}>{this.props.text || "LOADING"}</div>
            </div>
        );
    }
}

export default Loading;