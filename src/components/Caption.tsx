import type { FC } from 'react';

/* Prop types */
type Props = {
  description: FormattedDescription;
};

export const Caption: FC<Props> = ({ description }) => {
  return (
    <div>
      <p className='font-montserrat font-thin text-sm mb-1'>{description.film}</p>
      <p className='font-montserrat font-thin text-sm'>{description.camera}</p>
    </div>
  );
};
