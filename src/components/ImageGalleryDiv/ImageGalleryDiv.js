import React, { useEffect, useState } from 'react';
import { images } from '../../utils/data';
import styled from 'styled-components';

const BackgroundGallery = styled.section`
    background: ${props => `url(${props.bg}) no-repeat center center`};
    background-size: cover;
    transition: background 0.3s ease-out;
`

const ImageGalleryDiv = () => {
    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        const changeBgImage = () => {
            if (currImage < images.length - 1) {
                setCurrImage(prev => prev + 1);
            } else {
                setCurrImage(0)
            };
        }
        const bgInterval = setInterval(() => {
            changeBgImage();
        }, 10000);
        return () => clearInterval(bgInterval);
    })

    return <BackgroundGallery className="d-none d-md-block col-12 col-md-6" bg={images[currImage]} />
}

export default ImageGalleryDiv


