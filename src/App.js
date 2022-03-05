import Jobs from "./components/Jobs/Jobs";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
    return (
        <div className="app">
            <header className="app__header"></header>
            <main className="app__main">
                <Searchbar />
                <Jobs />
            </main>
        </div>
    );
}

export default App;
