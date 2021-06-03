//Redux
//redux-thunk nos permite utilizar funciones asincrionas en redux
import { Provider } from 'react-redux'
import store from './store'
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


//React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <Switch>
                  <Route exact path ='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/projects' component={Projects}/>

        </Switch>
        <Footer/>
      </Provider>
   </Router>
  );
}

export default App;
