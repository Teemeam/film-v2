import { type FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

/* Components */
import BlurhashImage from './BlurhashImage';
import FullSizeImage from './FullSizeImage';
import Caption from './Caption';

/* Prop types */
type Props = {
  width: number;
  data: FormattedData;
};

export const Image: FC<Props> = ({ width, data }) => {
  const [isInView, setIsInView] = useState<boolean>(false);

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

  return (
    <div ref={imageRef} className='mb-5'>
      <a
        href={data.flickrUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Open image on Flickr.'
      >
        <div className={`relative h-0 bg-neutral-100 pb-[${(100 / data.aspectRatio).toFixed(1)}%]`}>
          {/**
           * Blurhash image
           */}
          <BlurhashImage blurhash={data.blurhash} />

          {/**
           * Full-size image
           */}
          <FullSizeImage
            isInView={isInView}
            url={`${data.urlBase}_${width > 767 ? 'h' : 'b'}.jpg`}
          />
        </div>
      </a>

      {/**
       * Caption
       */}
      <Caption description={data.description} />
    </div>
  );
};
