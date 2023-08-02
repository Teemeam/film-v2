import { type FC, useState, useEffect } from 'react';

/* Components */
import Menu from './Menu';
import ImageGroup from './ImageGroup';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [selected, setSelected] = useState<string[]>([]);

  /**
   * Update window width
   */
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  /**
   * Filter data
   */
  const filteredData =
    selected.length > 0
      ? data
          .map(
            (groupData) =>
              groupData.filter((dataItem) => dataItem.tags.some((tag) => selected.includes(tag)))
            // groupData.filter((dataItem) => selected.every((tag) => dataItem.tags.includes(tag)))
          )
          .filter((groupData) => groupData.length > 0)
      : data;

  /**
   * Create elements by month
   */
  const imageGroups = filteredData.map((groupData, i) => (
    <ImageGroup key={`image-group_${i}`} width={width} data={groupData} />
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

  /**
   * Clear selected
   */
  const handleReset = () => {
    setSelected([]);
  };

  return (
    <div>
      {/**
       * Menu buttons
       */}
      <Menu selected={selected} handleClick={handleClick} handleReset={handleReset} />

      {/**
       * Image groups
       */}
      <div className='mx-auto w-11/12 max-w-4xl'>{imageGroups}</div>
    </div>
  );
};
