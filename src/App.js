import React from "react"
import { BrowserRouter as Router,Route, Switch } from "react-router-dom"
import { Header, Home} from "./components"
import { Destination, Crew, Technology} from "../src/pages"

export default function App(){
  return(
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Destination">
          <Destination />
        </Route>
        <Route path="/Crew">
          <Crew />
        </Route>
        <Route path="/Technology">
          <Technology />
        </Route>
      </Switch>
    </Router>
  )
}