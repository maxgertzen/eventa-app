import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomeView/HomeView';
import Navbar from './components/Navbar/Navbar';
import Protected from './components/Protected/Protected';
import SigninView from './components/Signin/SigninView';
import UserDashboard from './components/User/UserDashboard/UserDashboard';

function App() {
  const [auth, setAuth] = useState(false);


  useEffect(() => {
    const authorizeApp = () => {
      if (Cookies.get('user') && !auth) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
    authorizeApp()
  }, [auth])


  return (
    <div className="App">
      <Navbar>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signin'>Signin</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
      </Navbar>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/signin" component={SigninView} auth={auth} setAuth={setAuth} />
        <Protected path="/dashboard" auth={auth} component={UserDashboard} />
      </Switch>
    </div>
  );
}

export default App;
