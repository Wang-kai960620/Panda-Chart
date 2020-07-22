import React, {lazy,Suspense} from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Loading} from "./Components/Loading";
import {NoMatch} from "./Views/NoMatch";


const Home = React.lazy(() => import( "./Views/Home").then(({Home}) => ({default: Home})));
const About = lazy(() => import("./Views/About").then(({About}) => ({default: About})))
const History = lazy(() => import("./Views/History").then(({History}) => ({default: History})))



function App() {
  return (
    <div>
      <Router>

      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/history'>
            <History/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route path='*'>
            <NoMatch/>
          </Route>
        </Switch>
      </Suspense>
      </Router>

    </div>
  );
}

export default App;
