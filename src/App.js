import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './News'

import {
  BrowserRouter as Router, Route, Switch

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact key="business" path="/business">
              <News pagesize={6} country="in" category="business" newstype="Business" />

            </Route>

            <Route exact key="entertainment" path="/entertainment">
              <News pagesize={6} country="in" category="entertainment" newstype="Entertainment" />
            </Route>

            <Route exact key="general" path="/general">
              <News pagesize={6} country="in" category="general" newstype="General" />
            </Route>

            <Route exact key="health" path="/health">
              <News pagesize={6} country="in" category="health" newstype="Health" />
            </Route>

            <Route exact key="science" path="/science">
              <News pagesize={6} country="in" category="science" newstype="Science" />
            </Route>

            <Route exact key="sports" path="/sports">
              <News pagesize={6} country="in" category="sports" newstype="Sports" />
            </Route>

            <Route exact key="technology" path="/technology">
              <News pagesize={6} country="in" category="technology" newstype="Technology" />
            </Route>

          </Switch>

        </Router>


      </div>
    )
  }
}

