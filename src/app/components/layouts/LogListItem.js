import React from "react";

const styles = {
    container: {
        fontSize: "1.3vh",
        color: "#fff",
        position: "relative",
        height: "30px",
        lineHeight: "30px",
        width: "100%"
    },
    message: {
        position: "absolute",
        padding: "0 14px",
        left: 0,
        top: 0,
        width: "70%",
        height: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    },
    date: {
        position: "absolute",
        padding: "0 5px",
        left: "70%",
        top: 0,
        width: "30%",
        height: "100%",
        textAlign: "right",
        overflow: "hidden"
    }
};

const _getFormattedDate = date => {
    const dateString = ((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());
    const time = date.toLocaleTimeString();

    return dateString + " " + time;
};

const LogListItem = props => {
    let formattedDate = _getFormattedDate(new Date(props.rowData.createdDate));

    return (
        <div style={styles.container}>
            <div style={styles.message}>{props.rowData.message}</div>
            <div style={styles.date}>{formattedDate}</div>
        </div>
    );
};

export default LogListItem;