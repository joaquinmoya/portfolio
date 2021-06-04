
//CSS
import './App.css';
//Components
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
//Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
                  <Route exact path ='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/projects' component={Projects}/>

        </Switch>
        <Footer/>
   </Router>
  );
}

export default App;
