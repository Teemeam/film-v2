import type { FC } from 'react';

/* Prop types */
type Props = {};

const LoadingText: FC<Props> = () => {
  return (
    <p className='mx-auto w-11/12 max-w-4xl text-center font-montserrat text-sm font-thin'>
      Loading...
    </p>
  );
};

export default LoadingText;
