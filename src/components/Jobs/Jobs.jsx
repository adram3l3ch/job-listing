import React from "react";
import { useGlobalContext } from "../../context";
import SingleJob from "../SingleJob/SingleJob";

const Jobs = () => {
    const { jobs } = useGlobalContext();
    return (
        <section className="jobs">
            <h2 style={{ position: "absolute", left: "-99999px" }}>Jobs</h2>
            {jobs.map((job) => (
                <SingleJob job={job} key={job.id} />
            ))}
        </section>
    );
};

export default Jobs;
