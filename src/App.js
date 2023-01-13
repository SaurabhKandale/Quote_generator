import { Route, Routes } from "react-router";
import Bookmark from "./Components/Bookmark/Bookmark";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
