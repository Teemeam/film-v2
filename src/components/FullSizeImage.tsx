import { type FC, useState } from 'react';

/* Prop types */
type Props = {
  isInView: boolean;
  url: string;
};

const FullSizeImage: FC<Props> = ({ isInView, url }) => {
  const [opacity, setOpacity] = useState<number>(0);

  return (
    <img
      className={`w-100 absolute left-0 top-0 block ${
        opacity === 1 ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}
      src={isInView ? url : undefined}
      alt=''
      onLoad={() => setOpacity(1)}
      onError={() => console.log('This image failed to load.')}
    />
  );
};

export default FullSizeImage;
