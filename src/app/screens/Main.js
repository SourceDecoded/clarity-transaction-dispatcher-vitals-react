import React, { Component } from "react";
import SidebarNavigator from "../components/layouts/SidebarNavigator";
import Dashboard from "./Dashboard";

const styles = {
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(28, 28, 28)"
    },
    sidebarNavigator: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "250px",
        backgroundColor: "rgb(35, 35, 36)"
    },
    view: {
        position: "absolute",
        left: "250px",
        right: 0,
        top: 0,
        bottom: 0,
        margin: "24px"
    }
};

class Main extends Component {
    render() {
        return (
            <div style={styles.container}>
                <SidebarNavigator style={styles.sidebarNavigator} />
                <Dashboard style={styles.view} />
            </div>
        );
    }
}

export default Main;