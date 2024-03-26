import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import CreatePost from "./components/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
