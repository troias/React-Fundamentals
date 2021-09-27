import "./App.css";
import Todo from "./components/Todo";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favourites from "./Pages/Favourites";
import MeetupContextProvider from './contextStore/meetupContext'
import { Switch, Route } from "react-router-dom";
import Layout from './components/layout/Layout'

function App() {
  return (

      <Layout>
        <MeetupContextProvider>
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
      </MeetupContextProvider>
      </Layout>
    
  );
}

export default App;
