import type { FC } from 'react';

/* Components */
import ImageGroup from './ImageGroup';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  console.log(data);

  const imageGroups = data.map((groupData, i) => {
    return <ImageGroup key={`image-group_${i}`} data={groupData} />;
  });

  return (
    <div className='overflow-hidden'>
      { imageGroups }
    </div>
  );
};
