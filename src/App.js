import React from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
//npm install react-router-dom
//switch error? => npm install react-router-dom@5
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
