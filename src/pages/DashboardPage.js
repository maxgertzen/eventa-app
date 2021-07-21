import React, { useContext, useState, useEffect } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import SavedEventsPage from './SavedEventsPage';
import SideNav from '../components/SideNav/SideNav';
import EventsManagePage from './EventsManagePage';
import AuthApi from '../store/AuthApi';
import { getUserEvents, getUserDetails } from '../api/index';
import CustomCircleButton from '../components/CustomCircleButton/CustomCircleButton';
import { FiPlusSquare, FiClipboard } from 'react-icons/fi';
const DashboardPage = () => {
    const [eventsData, setEventsData] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const { userName } = useContext(AuthApi);
    let { path, url } = useRouteMatch();

    useEffect(() => {
        const callApi = async () => {
            try {
                const { data } = await getUserEvents()
                setEventsData(data);
                const response = await getUserDetails();
                setUserInfo(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        callApi()
    }, [])

    const getUpdatedUserData = async () => {
        try {
            const response = await getUserDetails();
            setUserInfo(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <article className="container-fluid text-white dashboard">
            <div className="row h-100 align-items-sm-start align-items-lg-stretch d-flex">
                <SideNav url={url} userName={userName} />
                <Switch>
                    <Route exact path={`${path}`}>
                        <article className="col-10 d-flex flex-column justify-content-start justify-content-lg-center align-items-center m-auto my-5">
                            <h4>Hello {userName}</h4>
                            <h6>You have {eventsData.count || 'no'} future events</h6>
                            <div className="d-flex" style={{ gap: '15px' }}>
                                <Link to="/dashboard/addevent"><CustomCircleButton size={30} title="Create Event"><FiPlusSquare /></CustomCircleButton></Link>
                                <Link to="/dashboard/events"><CustomCircleButton size={30} title="Dashboard"><FiClipboard /></CustomCircleButton></Link>
                            </div>
                        </article>
                    </Route>
                    <Route path={`${path}/events`}>
                        <EventsManagePage userEvents={eventsData.userEvents} setUserEvents={setEventsData} />
                    </Route>
                    <Route path={`${path}/profile`}><UserProfilePage info={userInfo} notifyUserChanges={getUpdatedUserData} /></Route>
                    <Route path={`${path}/saved`}><SavedEventsPage /></Route>
                </Switch>
            </div>
        </article>
    )
}

export default DashboardPage