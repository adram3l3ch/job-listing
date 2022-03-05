import React from "react";
import { useGlobalContext } from "../../context";
import SingleJob from "../SingleJob/SingleJob";

const Jobs = () => {
    const { jobs } = useGlobalContext();
    return (
        <section className="jobs">
            {jobs.map((job) => (
                <SingleJob job={job} key={job.id} />
            ))}
        </section>
    );
};

export default Jobs;
