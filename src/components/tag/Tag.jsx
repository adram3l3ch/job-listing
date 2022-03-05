import React from "react";

const Tag = ({ title }) => {
    const style = {
        backgroundColor: "var(--primary-300)",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        color: "var(--primary-400)",
        fontWeight: "600",
        fontSize: "0.9rem",
    };
    return (
        <div className="tag" style={style}>
            {title}
        </div>
    );
};

export default Tag;
