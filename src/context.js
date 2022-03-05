import { createContext, useContext, useEffect, useState } from "react";
import data from "./data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [jobs, setJobs] = useState([...data]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (tags.length) {
            setJobs(
                data.filter((job) =>
                    tags.every((tag) =>
                        [...job.languages, ...job.tools, job.role, job.level].includes(
                            tag
                        )
                    )
                )
            );
        } else {
            setJobs([...data]);
        }
    }, [tags]);

    return (
        <AppContext.Provider
            value={{
                jobs,
                setJobs,
                tags,
                setTags,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
