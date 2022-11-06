import React from 'react';
import UnderConstruction from '../lib';
import logo from './udilia-logo-white.svg';

const App = () => (
  <UnderConstruction
    background={{
      image: require("../images/Infopetencc.png"),
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: logo,
      alt: 'logo',
      style: {
        width: '80px'
      }
    }}
    description={{
      text: 'Este sitio está en construcción, favor volver luego !',
      style: {
        maxWidth: '440px',
      }
    }}
    subscribe={{
      placeholder: 'Puedes darnos tu opinión aquí',
      buttonText: 'Enviar',
      onSubmit: (value) => {
        console.log('usuario ha escrito :', value);
      }
    }}
    /*links={[
      {
        url: 'https://www.facebook.com/',
        image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
      },
      {
        url: 'https://www.twitter.com/',
        image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
      },
      {
        url: 'https://www.linkedin.com/',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:someone@example.com',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}*/
  />
);

export default App;
