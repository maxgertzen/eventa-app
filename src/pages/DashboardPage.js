import React, { useContext } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import SideNav from '../components/SideNav/SideNav';
import EventsManagePage from './EventsManagePage';
import AuthApi from '../store/AuthApi';

const DashboardPage = () => {
    const { userName } = useContext(AuthApi);
    let { path, url } = useRouteMatch();

    return (
        <article className="container-fluid h-80">
            <div className="row">
                <SideNav url={url} userName={userName} />
                <Switch>
                    <Route exact path={`${path}`}>
                        <article className="col-10 d-flex justify-content-center align-items-center">
                            <h4>Hello {userName}</h4>
                        </article>
                    </Route>
                    <Route path={`${path}/events`}>
                        <EventsManagePage />
                    </Route>
                    <Route path={`${path}/profile`} component={UserProfilePage} />
                </Switch>
            </div>
        </article>
    )
}

export default DashboardPage