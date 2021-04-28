import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./pages/Main";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route  path="/" component={props => <Main {...props} />} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
