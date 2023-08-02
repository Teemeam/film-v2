import type { FC } from 'react';

/* Header */
import header from '../assets/img/header1b.svg';

/* Prop types */
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto mb-8 mt-10 w-10/12 max-w-xl md:mb-14 md:mt-20'>
        <div className='h-0 w-full pb-[20.37%]'>
          <h1>
            <img
              className='block h-full w-full'
              src={header}
              alt='Teemu Kakko Film Photo Showcase'
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
