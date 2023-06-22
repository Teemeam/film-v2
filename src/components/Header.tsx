import type { FC } from 'react';

/* Prop types */
type Props = {};

const Header: FC<Props> = () => {
  return (
    <div>
      <h1 className='text-red-800'>Otsikko</h1>
    </div>
  );
};

export default Header;
