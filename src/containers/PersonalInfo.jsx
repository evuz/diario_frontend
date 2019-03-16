import React from 'react';
import MenuInfo from '../components/MenuInfo';

const socialMedia = [
  { link: 'https://www.github.com', type: 'github' },
  { link: 'https://www.twitter.com', type: 'twitter' },
  { link: 'https://www.linkedin.com', type: 'linkedin' },
]
const summary =
  "Cat ipsum dolor sit amet, trip owner up in kitchen i want food lick human with sandpaper tongue who's the baby. ";
const name = 'John Doe';
const photo = 'http://lorempixel.com/240/240/cats';

function PersonalInfo() {
  return <MenuInfo name={name} photo={photo} summary={summary} socialMedia={socialMedia} />;
}

export default PersonalInfo;
