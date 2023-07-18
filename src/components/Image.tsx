import { type FC, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

/* Prop types */
type Props = {
  data: FormattedData;
};

export const Image: FC<Props> = ({ data }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);

  /**
   * Determine if the image is in the viewport
   */
  const [imageRef, inView] = useInView({
    threshold: 0,
  });

  /**
   * Update the state when the visibility changes
   */
  if (inView !== isInView) {
    if (inView) {
      setIsInView(true);
    }
  }

  /**
   * Handle the image loaded
   */
  const handleImageLoaded = () => {
    setOpacity(1);
  };

  /**
   * Handle the image error
   */
  const handleImageError = () => {
    console.log('This image failed to load.');
  };

  return (
    <div ref={imageRef}>
      <div className={`relative h-0 pb-[${100 / data.aspectRatio}%]`}>
        {/**
         * Blurhash image
         */}
        <Blurhash
          className='absolute top-0 left-0'
          hash={data.blurhash}
          width={'100%'}
          height={'100%'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />

        {/**
         * Full-size image
         */}
        <img
          className={`absolute block top-0 left-0 w-100 transition-opacity duration-500 ${
            opacity === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          src={isInView ? data.url : undefined}
          alt=''
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
      </div>
    </div>
  );
};
