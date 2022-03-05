import React from "react";
import { useGlobalContext } from "../../context";

const Tag = ({ title }) => {
    const { setTags } = useGlobalContext();
    const addTag = () => {
        setTags((tags) => (tags.includes(title) ? tags : [...tags, title]));
    };
    return (
        <div className="tag" onClick={addTag}>
            {title}
        </div>
    );
};

export default Tag;
