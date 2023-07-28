import type { FC } from 'react';

/* Header */
import header from '../assets/img/header1b.svg';

/* Prop types */
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto w-10/12 max-w-xl'>
        <h1 className='mb-8 mt-10 md:mb-14 md:mt-20'>
          <img className='block w-full' src={header} alt='Teemu Kakko Film Photo Showcase' />
        </h1>
      </div>
    </div>
  );
};

export default Header;
