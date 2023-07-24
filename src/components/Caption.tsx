import type { FC } from 'react';

/* Prop types */
type Props = {
  description: FormattedDescription;
};

const Caption: FC<Props> = ({ description }) => {
  return (
    <div className='mt-2.5'>
      <p className='font-montserrat font-thin text-sm mb-1'>{description.film}</p>
      <p className='font-montserrat font-thin text-sm'>{description.camera}</p>
    </div>
  );
};

export default Caption;
