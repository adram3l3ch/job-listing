import React from "react";
import { useGlobalContext } from "../../context";
import SingleJob from "../SingleJob/SingleJob";

const Jobs = () => {
    const { jobs } = useGlobalContext();
    const style = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "1200px",
        marginInline: "auto",
    };
    return (
        <section className="jobs" style={style}>
            {jobs.map((job) => (
                <SingleJob job={job} key={job.id} />
            ))}
        </section>
    );
};

export default Jobs;
