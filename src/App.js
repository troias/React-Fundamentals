import "./App.css";
import Todo from "./components/Todo";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favourites from "./Pages/Favourites";

import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "black",
          height: "5rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/to-do">ToDo</Link>
          </li>
          <li>
            <Link to="/newmeetups">NewMeetups</Link>
          </li>
          <li>
            <Link to="/newmeetups">NewMeetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/to-do">
          <Todo />
        </Route>
        <Route path="/newmeetups">
          <NewMeetup />
        </Route>
        <Route path="/all-meetups">
          <AllMeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </>
  );
}

export default App;
