import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomeView/HomeView';
import Navbar from './components/Navbar/Navbar';
import Protected from './components/Protected/Protected';
import SigninView from './components/Signin/SigninView';
import UserDashboard from './components/User/UserDashboard/UserDashboard';
import AuthApi from './store/AuthApi';


function App() {
  const [auth, setAuth] = useState(() => {
    if (Cookies.get('user')) return true;
    else return false
  });



  useEffect(() => {
    const authorizeApp = () => {
      if (Cookies.get('user')) {
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
        <AuthApi.Provider value={{ auth, setAuth }}>
          <Route exact path="/" component={HomeView} />
          <Route path="/signin" component={SigninView} />
          <Protected path="/dashboard" component={UserDashboard} />
        </AuthApi.Provider>
      </Switch>
    </div>
  );
}

export default App;
