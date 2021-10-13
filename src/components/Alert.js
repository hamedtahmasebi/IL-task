import React from "react";

const Alert = ({ msg }) => {
    return (
        <div className="alert">
            <span class="material-icons">error_outline</span>
            <span>{msg}</span>
        </div>
    );
};

export default Alert;
