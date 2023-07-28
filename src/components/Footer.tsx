import type { FC } from 'react';

/* Prop types */
type Props = {};

const Footer: FC<Props> = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='mx-auto w-11/12'>
      <p className='my-10 text-center font-montserrat text-xs font-thin text-neutral-300'>
        <a href='https://kakkoteemu.fi/' target='_blank' rel='noopener noreferrer'>
          &copy; {year}
        </a>
      </p>
    </div>
  );
};

export default Footer;
