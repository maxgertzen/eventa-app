import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomeView/HomeView';
import Navbar from './components/Navbar/Navbar';
import Protected from './components/Protected/Protected';
import SigninView from './components/Signin/SigninView';
import UserDashboard from './components/User/UserDashboard/UserDashboard';
import ExplorePage from './pages/ExplorePage';
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
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/signin' className="nav-link">Signin</Link>
        <Link to='/dashboard' className="nav-link">Dashboard</Link>
        <Link to='/explore' className="nav-link">Explore</Link>
      </Navbar>
      <Switch>
        <AuthApi.Provider value={{ auth, setAuth }}>
          <Route exact path="/" component={HomeView} />
          <Route path="/signin" component={SigninView} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/events/show/:eventId" component={EventPage} />
          <Protected path="/dashboard" component={UserDashboard} />
        </AuthApi.Provider>
      </Switch>
    </div>
  );
}

export default App;
