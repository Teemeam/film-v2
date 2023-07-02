import type { FC } from 'react';

/* Prop types */
type Props = {
  data: FormattedData[];
};

const ImageGroup: FC<Props> = ({ data }) => {
  return (
    <div>
      <p className='text-orange-300'>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ImageGroup;
