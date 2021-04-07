import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RandomKitty from "./pages/RandomKitty";
import Cats from "./pages/Cats";
import Header from "./components/Header";


function App() {

  return (
    <Router>
        <Header/>
      <Switch>
        <Route exact path="/random" component={RandomKitty}/>
        <Route exact path="/cats" component={Cats}/>
      </Switch>
    </Router>
  );
}

export default App;
