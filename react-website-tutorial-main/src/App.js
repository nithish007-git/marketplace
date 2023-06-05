import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Arts from "./pages/arts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<nithish></nithish>

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} /> artistians
          <Route path="/about" exact component={About} /> signup
          <Route path="/contact" exact component={Contact} />book
          <Route path="/arts" exact component={Arts} />arts
        </Switch>

      </Router>
    </div>
  );
}

export default App;
