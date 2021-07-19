import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const images = {
    'music': '/music.jpeg',
    'visualarts': '/visualarts.jpeg',
    'theatre': 'theatre.jpg',
    'film': 'film.jpeg',
    'technology': 'technology.jpeg',
    'parties': 'party.jpeg'
}

const CatCard = styled.div`
    width: 300px;
    height: 300px;
    background: ${props => `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${props.img})`};
    background-size: cover;
    position: relative;
    opacity: 0.9;
    box-shadow: 0 .5rem .5rem rgba(0,0,0,.3);
    
    :hover {
        transition: all 0.2s;
        opacity: 1;
        h2 {
            transition: all 0.2s;
            opacity: 1
        }
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        color: white !important;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        transform: translate(-50%, -50%);
        opacity: 0.5;
    }
`


const CategoryCard = ({ categoryData }) => {
    return (
        <Link to={`/explore?category=${categoryData.name.toLowerCase().split(' ').join('')}`} style={{ color: 'unset', textDecoration: 'none' }}>
            <CatCard img={`${images[categoryData.name.toLowerCase().split(' ').join('')]}`}>
                <h2>{categoryData.name}</h2>
            </CatCard>
        </Link>
    )
}

export default CategoryCard;