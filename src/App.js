import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
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
import RegisterPage from './pages/RegisterPage';
import { saveEventToUser, getEvents } from './api/index';
import aos from 'aos';

function App() {
  const [auth, setAuth] = useState(() => {
    if (Cookies.get('user')) return true;
    else return false
  });
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    aos.init({ duration: 350 });
  }, []);

  useEffect(() => {
    const authorizeApp = () => {
      let user = Cookies.get('user');
      if (user) {
        setAuth(true)
        setUserName(user.split('?')[1])
        setUserId(user.split('?')[0])
      } else {
        setAuth(false)
      }
    }
    const getSaved = async () => {
      let { data } = await getEvents();
      if (data.saved) setSavedEvents(data.saved)
    }
    authorizeApp()
    getSaved();
  }, [auth])

  const logOut = () => {
    Cookies.remove('user')
    setAuth(false)
  }

  const authorizeApp = () => {
    let user = Cookies.get('user');
    if (user) {
      setAuth(true)
      setUserName(user.split('?')[1])
      setUserId(user.split('?')[0])
    } else {
      setAuth(false)
    }
  }

  const isEventInSaved = (id) => {
    for (const obj of savedEvents) {
      if (parseInt(obj.event_id) === parseInt(id)) return true
    }
    return false
  }

  const getSaved = async () => {
    let { data } = await getEvents();
    if (data.saved) setSavedEvents(data.saved)
  }

  const addToSavedEvents = async (id) => {
    if (!auth) {
      history.push('/signin')
      return
    } else {
      try {
        if (!isEventInSaved(id)) {
          const { data } = await saveEventToUser(parseInt(id), parseInt(userId));
          getSaved();
          if (data.saved) {
            setSavedEvents(data.saved);
          }
        } else {
          return
        }
      } catch (error) {
        return history.push('/signin')
      }
    }
  }

  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, userName, setAuth, authorizeApp, savedEvents, addToSavedEvents }}>
        <Navbar disconnect={logOut} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} disconnect={logOut} />
          <Route path="/register" component={RegisterPage} />
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
