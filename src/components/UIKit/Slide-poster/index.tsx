import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';

const SlidePoster: React.FC<Settings> = ({ ...rest }) => {
    return <Slider {...rest} />;
};

export default SlidePoster;
