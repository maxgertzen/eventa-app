// import logo from './logo.svg';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomeView/HomeView';
import Navbar from './components/Navbar/Navbar';
import SigninView from './components/Signin/SigninView';

function App() {
  return (
    <div className="App">
      <Navbar>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signin'>Signin</Link></li>
      </Navbar>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/signin" component={SigninView} />
      </Switch>
    </div>
  );
}

export default App;
