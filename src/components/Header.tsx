import type { FC } from 'react';

/* Prop types */
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className='w-full'>
      <div className='sm:w-auto w-11/12 sm:mx-10 mx-auto'>
        <h1 className='font-montserrat font-black text-lg my-5'>Teemu Kakko Film Photo Showcase</h1>
      </div>
    </div>
  );
};

export default Header;