import type { FC } from 'react';

/* Prop types */
type Props = {};

const Footer: FC<Props> = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='w-11/12 mx-auto'>
      <p className='font-montserrat font-thin text-xs text-center my-10 text-neutral-300'>
        <a href='https://kakkoteemu.fi/' target='_blank' rel='noopener noreferrer'>
          &copy; {year}
        </a>
      </p>
    </div>
  );
};

export default Footer;
