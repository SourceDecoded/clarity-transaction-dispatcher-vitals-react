import React from "react";
import Pulse from "react-icons/lib/io/ios-pulse-strong";

const styles = {
    header: {
        height: "120px",
        width: "100%",
        boxSizing: "border-box"
    },
    tab: {
        height: "50px",
        paddingLeft: "20px",
        width: "100%",
        backgroundColor: "rgba(28, 28, 28, .6)",
        color: "rgba(255, 255, 255, 0.85)",
        boxSizing: "border-box"
    },
    tabTitle: {
        lineHeight: "50px",
        fontSize: "13px",
        position: "absolute",
        left: "65px"
    },
    tabIconContainer: {
        lineHeight: "50px",
        position: "absolute"
    },
    selectedTabHighlight: {
        position: "absolute",
        left: 0,
        height: "50px",
        width: "6px",
        backgroundColor: "#44c7c3"
    }
};

const SidebarNavigator = props => {
    return (
        <div style={props.style}>
            <div style={styles.header}></div>
            <div style={styles.tab}>
                <div style={styles.selectedTabHighlight}></div>
                <div style={styles.tabIconContainer}>
                    <Pulse size={26} />
                </div>
                <div style={styles.tabTitle}>DASHBOARD</div>
            </div>
        </div>
    );
};

export default SidebarNavigator;