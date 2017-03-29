import React, { Component } from "react";
import EntityManager from "../components/widgets/EntityManager";
import Switch from "../components/widgets/Switch";
import SingleSelect from "../components/widgets/SingleSelect";
import PropertyManager from "../components/widgets/PropertyManager";
import theme from "../components/styles/theme";

const styles = {
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.primaryLayer.backgroundColor,
        padding: "10px"
    },
    component: {
        marginTop: "10px",
        display: "block"
    }
};

var values = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

class Main extends Component {
    render() {
        return (
            <div style={styles.container}>
                <EntityManager style={styles.component} />
            </div>
        );
    }
}

export default Main;