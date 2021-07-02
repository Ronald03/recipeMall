import "../styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ users }, dispatch] = useStateValue();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/auth/success")
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error(" User has not signed in.");
      })
      .then((data) => {
        setUser(data);
        dispatch({
          type: "SET_USER",
          user: data,
        });
        //console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {console.log(users)}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            {user.authenticated ? (
              <>
                <Navbar user={user} />
                <Dashboard />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/">
            <Navbar user={user} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
