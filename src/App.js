import Jobs from "./components/Jobs/Jobs";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <h1 style={{ position: "absolute", left: "-99999px" }}>Job Listing</h1>
            </header>
            <main className="app__main">
                <Searchbar />
                <Jobs />
            </main>
        </div>
    );
}

export default App;
