import { type FC, useState } from 'react';

/* Components */
import Menu from './Menu';
import ImageGroup from './ImageGroup';
import Lightbox from './LightBox';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<FormattedData | null>(null);

  /**
   *
   */
  const handleSelectedImage = (data: FormattedData | null) => {
    setSelectedImage(data);
  };

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
    <ImageGroup
      key={`image-group_${i}`}
      data={groupData}
      handleSelectedImage={handleSelectedImage}
    />
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
      <div className='max-w-4xl w-11/12 mx-auto'>{imageGroups}</div>

      {/**
       * Lightbox
      <Lightbox selectedImage={selectedImage} handleSelectedImage={handleSelectedImage} /> */}
    </div>
  );
};
