import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Search from "./pages/Search";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route  path="/" component={props => <Main {...props} />} />
          <Route  path="/search" component={props => <Search {...props} />} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
