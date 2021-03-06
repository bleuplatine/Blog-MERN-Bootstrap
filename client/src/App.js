import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import NavigBar from './components/NavigBar';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import FootBar from './components/FootBar';

function App() {

  return (
    <Router>
      <div>
        <NavigBar />
        <Switch>
        
          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <FootBar />
      </div>

    </Router>
  );
}

export default App;
