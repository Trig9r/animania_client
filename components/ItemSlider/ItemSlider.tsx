/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import Slider from 'react-slick';

import { SliderNextArrow } from './SliderNextArrow';
import { SliderPrevArrow } from './SliderPrevArrow';

interface ItemSliderProps {
  children: React.ReactNode;
}

export const ItemSlider: React.FC<ItemSliderProps> = ({ children }) => {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />
  };

  return <Slider {...settings}>{children}</Slider>;
};
