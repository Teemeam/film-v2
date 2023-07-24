import type { FC } from 'react';

/* Header */
import header from '../assets/img/header1b.svg';

/* Prop types */
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className='w-full'>
      <div className='max-w-xl w-10/12 mx-auto'>
        <h1 className='mt-10 md:mt-20 mb-8 md:mb-14'>
          <img className='block w-full' src={header} alt='Teemu Kakko Film Photo Showcase' />
        </h1>
      </div>
    </div>
  );
};

export default Header;
