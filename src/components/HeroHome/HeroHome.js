import React from 'react';
import styled from 'styled-components';
import ArrowAnimatedDown from '../ArrowDown/ArrowAnimatedDown';
import { Link } from 'react-router-dom';
const Hero = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('/heroimage.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height:92vh;
    position: relative;

    h1 {
        text-align: center;
        position: absolute;
        top: 50%;
        left:50%;
        color: white;
        font-size: 148px; 
        transform: translate(-50%,-100%);
        animation: fadeIn linear 1s;
    }

    h6 {
        text-align: center;
        position: absolute;
        top: 50%;
        left:50%;
        color: white;
        font-size: 40px;
        transform: translate(-50%,-20%);
        white-space: nowrap;
        animation: fadeIn linear 4.5s;
    }
    
    #explore-btn {
        text-align: center;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,200%);
        letter-spacing: 4px; 
    }

    @media (max-width: 760px) {
        h1 {
            font-size: 100px;
        }
        h6 {
            font-size: 30px;
        }
    }
    
    @keyframes fadeIn {
      from {
          opacity: 0;
      }
      to {
         opacity: 1;
      }
    }
`

const HeroHome = () => {



    return (
        <main className="row h-100 gx-0 px-0">
            <div className="mx-auto gx-0 px-0">
                <Hero>
                    <h1>Eventa</h1>
                    <h6>Discover. Create. Connect.</h6>
                    <Link to="/explore" className="btn btn-radius bg-gradient btn-success text-uppercase" id="explore-btn" style={{ width: '180px' }}>Explore</Link>
                    <ArrowAnimatedDown href="#categories" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,600%)'
                    }}>
                        <span></span>
                        <span></span>
                    </ArrowAnimatedDown>
                </Hero>
            </div>
        </main>
    )
}

export default HeroHome