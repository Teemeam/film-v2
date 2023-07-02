import type { FC } from 'react';

/* Prop types */
type Props = {
  data: FormattedData;
};

export const Image: FC<Props> = ({ data }) => {
  return (
    <div className='overflow-hidden'>
      <p className='text-orange-300'>{JSON.stringify(data)}</p>
    </div>
  );
};
