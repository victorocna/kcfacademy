import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Lightbox from './Lightbox';
import images from './screenshots';

export default function ScreenshotSlider() {
  const [isOpen, setOpen] = useState(false);
  const [screenIndex, setIndex] = useState(0);
  const handleImageClick = (index) => {
    console.log(index);
    setIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Carousel onSelect={setIndex} interval={8000} fade indicators={false}>
        {images.map((src, index) => (
          <Carousel.Item key={`carousel-item-${index}`}>
            <img
              className="d-block"
              src={src}
              onClick={() => handleImageClick(index)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {isOpen && (
        <Lightbox
          screenIndex={screenIndex}
          images={images}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => {
            console.log('movePrev');
            setIndex((screenIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            console.log('moveNext');
            setIndex((screenIndex + 1) % images.length);
          }}
        />
      )}
    </>
  );
}
