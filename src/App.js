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


  return (
    <div className="App">
      <Navbar />
      <Switch>
        <AuthApi.Provider value={{ auth, setAuth }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/events/:eventId" component={EventPage} />
          <Protected path="/dashboard" component={DashboardPage} />
        </AuthApi.Provider>
      </Switch>
    </div>
  );
}


export default App;
