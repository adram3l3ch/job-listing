import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { useGlobalContext } from "../../context";
import close from "../../images/icon-remove.svg";
import "./searchbar.css";

const Searchbar = () => {
    const { tags, setTags } = useGlobalContext();
    const [input, setInput] = useState("");
    const _tags = data.reduce((acc, job) => {
        const { role, level, languages, tools } = job;
        return [role, level, ...languages, ...tools]
            .filter((tag) => !acc.includes(tag))
            .concat(acc);
    }, []);

    useEffect(() => {
        if (input) {
            if (_tags.includes(input) && !tags.includes(input)) {
                setTags((tags) => [...tags, input]);
                setInput("");
            }
        }
    }, [input, _tags, tags, setTags]);

    return (
        <form className="form">
            <div className="filters">
                {tags.map((tag) => (
                    <div className="filter" key={tag}>
                        <div className="left">{tag}</div>
                        <button
                            className="right"
                            onClick={() => {
                                setTags(tags.filter((t) => t !== tag));
                            }}
                        >
                            <img src={close} alt="remove" />
                        </button>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                list="tags"
            />
            <datalist id="tags">
                {_tags.map((tag) => (
                    <option value={tag} key={tag}>
                        {tag}
                    </option>
                ))}
            </datalist>
            <button onClick={() => setTags([])} type="reset">
                Clear
            </button>
        </form>
    );
};

export default Searchbar;
