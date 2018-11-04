import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Swiper from "./components/Swiper/";
import Summary from "./components/Summary";
import List from "./components/List";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dialog from "./components/Dialog";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route path="/" component={Appbar} />

            <Route path="/" exact component={Swiper} />
            <Route path="/list" exact component={List} />
            <Route path="/summary/:summaryID" exact component={Summary} />
            <Dialog />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
