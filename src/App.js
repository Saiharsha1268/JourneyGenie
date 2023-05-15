import "./App.css";
import NavBar from "./components/NavBar";
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";
import TagLine from "./components/TagLine";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WayPointsState from "./context/WayPointsState";
function App() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Images-For-Desktop.jpg')`,
        margin: "0",
        padding: "0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
      }}
    >
      <WayPointsState>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div
                  className="container-fluid d-flex"
                  style={{
                    height: "100vh",
                    width: "100%",
                    paddingTop: "100px",
                  }}
                >
                  <TagLine />
                  <LocationSearch />
                </div>
              }
            />
            <Route
              exact
              path="/waypoints"
              element={
                <div
                  className="container-fluid d-flex"
                  style={{
                    height: "100vh",
                    width: "100%",
                    paddingTop: "63px",
                  }}
                >
                  <LocationSearch />
                  <Map />
                </div>
              }
            />
          </Routes>
        </Router>
      </WayPointsState>
    </div>
  );
}

export default App;
