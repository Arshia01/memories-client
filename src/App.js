import React from "react";
import {Container} from "@material-ui/core"
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //for creating multi page app

function App() {

  return(
    <BrowserRouter>
       <Container maxwidth="lg" >
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" exact component={Auth} />
          </Switch>
       </Container>
    </BrowserRouter>
  )
}

export default App;