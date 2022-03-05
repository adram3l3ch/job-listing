import React from "react";
import Tag from "../tag/Tag";
import "./singlejob.css";

const SingleJob = ({ job }) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    let img = job.company.replace(/[" ".]/g, "").toLowerCase();
    return (
        <article className={job.featured ? "job border" : "job"}>
            <div className="job__left">
                <div className="job__left__image">
                    <img
                        src={require("../../images")[img]}
                        alt="company"
                        className="job__company"
                    />
                </div>
                <div className="job__left__info">
                    <header className="job__left__info__header">
                        <h3 className="company__title">{job.company}</h3>
                        {job.new && <div className="_tag new">new</div>}
                        {job.featured && <div className="_tag featured">featured</div>}
                    </header>
                    <h2 className="job__title">{job.position}</h2>
                    <footer className="job__left__info__footer">
                        <p>{job.postedAt}</p>
                        <p>{job.contract}</p>
                        <p>{job.location}</p>
                    </footer>
                </div>
            </div>
            <div className="job__right">
                {tags.map((tag) => (
                    <Tag title={tag} />
                ))}
            </div>
        </article>
    );
};

export default SingleJob;
