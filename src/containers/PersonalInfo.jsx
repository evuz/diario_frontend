import React from 'react';
import MenuInfo from '../components/MenuInfo';

const socialMedia = [
  { link: 'https://www.github.com/evuz', type: 'github' },
  { link: 'https://www.twitter.com/JesusGomBell', type: 'twitter' },
  { link: 'https://www.linkedin.com', type: 'linkedin' },
]
const summary =
  "Hago de mi trabajo un hobby, intentando aprender todo lo posible de este maravilloso mundo. Procuro que no pase un día sin aprender algo nuevo";
const name = 'Jesús Gómez';
const photo = 'https://www.gravatar.com/avatar/33e4476999a2d0449f9c67f0b464a538?s=400';

function PersonalInfo() {
  return <MenuInfo name={name} photo={photo} summary={summary} socialMedia={socialMedia} />;
}

export default PersonalInfo;
