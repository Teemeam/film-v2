import type { FC } from 'react';
import { Blurhash } from 'react-blurhash';

/* Prop types */
type Props = {
  blurhash: string;
};

export const BlurhashImage: FC<Props> = ({ blurhash }) => {
  return (
    <Blurhash
      className='absolute top-0 left-0'
      hash={blurhash}
      width={'100%'}
      height={'100%'}
      resolutionX={32}
      resolutionY={32}
      punch={1}
    />
  );
};
