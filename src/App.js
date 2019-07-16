import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
      alt: 'alt text'
    }}
    title={{
      text: 'Wondrous Look Makeup & Microblading'
    }}
    description={{
      text: 'Our website is under construction. We\'ll be here soon.',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://www.facebook.com/wondrouslook/',
        image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
      },
      {
        url: 'https://www.instagram.com/wondrouslookmakeup/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/200px-Instagram_logo_2016.svg.png',
      },
      {
        url: 'mailto:info@wondrouslook.com',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}
  />
);

export default App;