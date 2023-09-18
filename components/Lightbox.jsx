import Lightbox from 'react-image-lightbox';

export default function LightboxComponent({
  images,
  onCloseRequest,
  onMovePrevRequest,
  onMoveNextRequest,
  screenIndex,
}) {
  return (
    <Lightbox
      mainSrc={images[screenIndex].src}
      nextSrc={images[(screenIndex + 1) % images.length].src}
      prevSrc={images[(screenIndex + images.length - 1) % images.length].src}
      onCloseRequest={onCloseRequest}
      onMovePrevRequest={onMovePrevRequest}
      onMoveNextRequest={onMoveNextRequest}
    />
  );
}
