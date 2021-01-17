import "./App.css";
import Home from "./Views/Home";
import Member from "./Views/Member";
import Librarian from './Views/librarian'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/member" component={Member} />
        <Route path="/librarian" component={Librarian} />
      </Switch>
    </Router>
  );
}

export default App;
