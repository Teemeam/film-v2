import { type FC, useState } from 'react';

/* Components */
import Menu from './Menu';
import ImageGroup from './ImageGroup';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState<string[]>([]);

  /**
   * Filter data
   */
  const filteredData =
    selected.length > 0
      ? data
          .map((groupData) =>
            groupData.filter((dataItem) => dataItem.tags.some((tag) => selected.includes(tag)))
          )
          .filter((groupData) => groupData.length > 0)
      : data;

  /**
   * Create elements by month
   */
  const imageGroups = filteredData.map((groupData, i) => (
    <ImageGroup key={`image-group_${i}`} data={groupData} />
  ));

  /**
   * Handle menu button click
   */
  const handleClick = (tag: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(tag)
        ? prevSelected.filter((item) => item !== tag)
        : [...prevSelected, tag]
    );
  };

  return (
    <div>
      {/**
       * Menu buttons
       */}
      <Menu handleClick={handleClick} />

      {/**
       * Image groups
       */}
      <div className='max-w-4xl w-11/12 mx-auto'>{imageGroups}</div>
    </div>
  );
};
