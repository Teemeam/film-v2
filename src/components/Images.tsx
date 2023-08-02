import { type FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

/* Components */
import Menu from './Menu';
import ImageGroup from './ImageGroup';

/* Prop types */
type Props = {
  data: FormattedData[][];
};

export const Images: FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [renderBuffer, setRenderBuffer] = useState<number>(5);
  const [isInView, setIsInView] = useState<boolean>(false);

  /**
   * Determine if loading text is in the viewport
   */
  const [loadingRef, inView] = useInView({
    threshold: 0,
  });

  /**
   * Increase the render buffer if needed
   */
  if (inView !== isInView) {
    if (inView) {
      if (renderBuffer < data.length) {
        setRenderBuffer(renderBuffer + 10);
      }
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }

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
  const imageGroups = filteredData
    .map((groupData, i) => <ImageGroup key={`image-group_${i}`} data={groupData} />)
    .slice(0, renderBuffer);

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

      {/**
       * Loading text
       */}
      <p
        ref={loadingRef}
        className={`mx-auto w-11/12 max-w-4xl text-center font-montserrat text-sm font-thin ${
          renderBuffer >= filteredData.length ? 'hidden' : 'block'
        }`}
      >
        Loading...
      </p>
    </div>
  );
};
