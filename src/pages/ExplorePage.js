import React from 'react';
import { getEvents } from '../api';
import { useHttp } from '../hooks/useHttp';

import styled from 'styled-components';

const Page = styled.section`
    width: 100%;
`

const ExplorePage = () => {
    const {
        response: events,
        error,
        loading
    } = useHttp(getEvents);

    return (
        <Page />
    )
}