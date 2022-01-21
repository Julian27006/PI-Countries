import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreacionActividades from './components/CreacionActividades';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/activity' component={CreacionActividades}></Route>
      <Route exact path='/home/:id' component={Detail}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;