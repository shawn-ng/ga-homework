import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Buzzwords from "./sections/Buzzwords";
import Nats from "./sections/Nats";
import Profile from "./sections/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Natter</h1>
          <nav>
            <ul>
              <li>
                <Link to="/Buzzwords">Buzzwords</Link>
              </li>
              <li>
                <Link to="/Nats">Nats</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/buzzwords">
              <Buzzwords />
            </Route>
            <Route path="/nats">
              <Nats />
            </Route>
            <Route path="/profile/:username">
              <SelectedProfile />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
const SelectedProfile = () => {
  const { username } = useParams();

  return <Profile username={username} />;
};
export default App;
