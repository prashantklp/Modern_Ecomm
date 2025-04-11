import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCaroselData from './MainCaroseldata';

const MainCarosel = () => {
  const items = MainCaroselData.map((item) => (
    <div key={item.id} className="item" data-value={item.id}>
      <img
        src={item.image}
        alt={item.alt}
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '10px',
          objectFit: 'cover'
        }}
      />
    </div>
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      infinite
      autoPlayInterval={1000}
      disableButtonsControls
    />
  );
};

export default MainCarosel;
