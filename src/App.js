import "./App.css";
import Todo from "./components/Todo";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favourites from "./Pages/Favourites";

import { Switch, Route } from "react-router-dom";
import Layout from './components/layout/Layout'

function App() {
  return (

      <Layout>

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
      </Layout>
    
  );
}

export default App;
