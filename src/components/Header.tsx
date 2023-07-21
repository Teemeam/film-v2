import type { FC } from 'react';

/* Prop types */
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className='w-full'>
      <div className='max-w-4xl w-11/12 mx-auto'>
        <h1 className='font-montserrat font-black text-xl md:text-2xl mt-10 md:mt-20 mb-10 text-center text-green-900'>
          Teemu Kakko Film Photo Showcase
        </h1>
      </div>
    </div>
  );
};

export default Header;
