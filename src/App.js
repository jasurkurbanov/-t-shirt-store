import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About us";
import Shop from "./Pages/Shop";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="AppRouter">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/contact/" element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
