import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import Protected from './components/Protected/Protected';
import SigninPage from './pages/SigninPage';
import EventPage from './pages/EventPage';
import ExplorePage from './pages/ExplorePage';
import AuthApi from './store/AuthApi';
import AddEventPage from './pages/AddEventPage';
import DashboardPage from './pages/DashboardPage';

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

  const logOut = () => {
    Cookies.remove('user')
    setAuth(false)
  }

  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Navbar disconnect={logOut} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} disconnect={logOut} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/events/:eventId" component={EventPage} />
          <Protected path="/addevent" component={AddEventPage} />
          <Protected path="/dashboard" component={DashboardPage} />
        </Switch>
      </AuthApi.Provider>
    </div>
  );
}


export default App;
