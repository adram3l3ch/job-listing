import React from "react";
import data from "../../data.json";
import SingleJob from "../SingleJob/SingleJob";

const Jobs = () => {
    const style = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "1200px",
        marginInline: "auto",
    };
    return (
        <section className="jobs" style={style}>
            {data.map((job) => (
                <SingleJob job={job} key={job.id} />
            ))}
        </section>
    );
};

export default Jobs;
