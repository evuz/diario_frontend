import React from 'react';
import MenuInfo from '../components/MenuInfo';

function PersonalInfo() {
  const summary =
    "Cat ipsum dolor sit amet, trip owner up in kitchen i want food lick human with sandpaper tongue who's the baby. ";
  const name = 'John Doe';
  const photo = 'http://lorempixel.com/240/240/cats';
  return <MenuInfo name={name} photo={photo} summary={summary} />;
}

export default PersonalInfo;
