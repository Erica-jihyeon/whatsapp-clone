import React, { useState } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
//npm install react-router-dom
//switch error? => npm install react-router-dom@5
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  // const [user, setUser] = useState('Erica');
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            {/* default */}
            <Sidebar />

            <Switch >
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              {/* <Route path="/">
              <Chat />
            </Route> */}
            </Switch>
          </Router>
        </div>
      )}

    </div>
  );
}

export default App;
