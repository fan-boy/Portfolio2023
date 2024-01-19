"use client"

import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Type } from '../Typography/Type';

const TEXTS = ['who codes', 'who loves sushi', 'and a gamer', 'and a tech geek','and a traveller','and a XR buff','and a hiker','who cooks'];

const TextLoop = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}><Type variant={"h3"}> {TEXTS[index % TEXTS.length]} </Type></TextTransition>
    </h1>
  );
};

export default TextLoop