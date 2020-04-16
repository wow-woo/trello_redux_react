import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/pages/Home.jsx";
import NavBar from "./components/layout/NavBar";

const AppContainer = styled.div`
  background-color: rgba(2, 2, 2, 0.7);
  height: 100%;
  padding: 2% 0 15% 2%;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
