import { type FC, useState } from 'react';

/* Components */
import ImageGroup from './ImageGroup';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<FormattedData[][]>(data);

  /**
   * Create elements by month
   */
  const imageGroups = filteredData.map((groupData, i) => {
    return <ImageGroup key={`image-group_${i}`} data={groupData} />;
  });

  return (
    <div className='max-w-4xl w-11/12 mx-auto'>
      { imageGroups }
    </div>
  );
};
