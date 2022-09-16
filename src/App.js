import "./App.css";
import Logo from "./logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import CreateSurvey from "./components/CreateSurvey";
import Published from "./components/Published";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [squestions, setSquestions] = useState([]);

  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <Router>
          <Link to="/">
            <img className="col-md-6 img-fluid m-4" alt="logo" src={Logo} />
          </Link>
          <Routes>
            <Route path="/" element={<Menu />} exact />
            <Route
              path="/create"
              element={
                <CreateSurvey
                  squestions={squestions}
                  setSquestions={setSquestions}
                />
              }
              exact
            />
            <Route
              path="/published"
              element={<Published questions={squestions} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
