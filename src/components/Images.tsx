import type { FC } from 'react';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div className='overflow-hidden'>
      <p className='text-orange-300'>{JSON.stringify(data)}</p>
    </div>
  );
};
