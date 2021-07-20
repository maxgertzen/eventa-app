import React, { useContext, useState, useEffect } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import SideNav from '../components/SideNav/SideNav';
import EventsManagePage from './EventsManagePage';
import AuthApi from '../store/AuthApi';
import { getUserEvents, getUserDetails } from '../api/index';

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
                console.log(response)
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
            <div className="row">
                <SideNav url={url} userName={userName} />
                <Switch>
                    <Route exact path={`${path}`}>
                        <article className="col-10 d-flex flex-column justify-content-center align-items-center">
                            <h4>Hello {userName}</h4>
                            <h6>You have {eventsData.count || 'no'} future events</h6>
                        </article>
                    </Route>
                    <Route path={`${path}/events`}>
                        <EventsManagePage userEvents={eventsData.userEvents} setUserEvents={setEventsData} />
                    </Route>
                    <Route path={`${path}/profile`}><UserProfilePage info={userInfo} notifyUserChanges={getUpdatedUserData} /></Route>
                </Switch>
            </div>
        </article>
    )
}

export default DashboardPage