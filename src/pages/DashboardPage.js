import React from 'react'
import CreateEventForm from '../components/Forms/CreateEventForm';
import { addEvent } from '../api/index';
import Cookies from 'js-cookie';

const DashboardPage = () => {
    const createEvent = (newEvent) => {
        let user = Cookies.get('user')
        if (user) {
            addEvent(newEvent, user.split('?')[0])
        }

    }

    return (
        <section>
            <h1>Create Event</h1>
            <CreateEventForm />
        </section>
    )
}

export default DashboardPage
