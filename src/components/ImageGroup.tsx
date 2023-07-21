import type { FC } from 'react';
import divideDataByAspectRatio from '../lib/divideDataByAspectRatio';

/* Components */
import { Image as ImageComponent } from './Image';

/* Prop types */
type Props = {
  data: FormattedData[];
};

const ImageGroup: FC<Props> = ({ data }) => {
  const [array1, array2] = divideDataByAspectRatio(data);

  /**
   * Column 1 images for desktop
   */
  const column1 = array1
    ? array1.map((dataItem, i) => {
        return <ImageComponent key={`column-1-image_${i}`} data={dataItem} />;
      })
    : undefined;

  /**
   * Column 2 images for desktop
   */
  const column2 = array2
    ? array2.map((dataItem, i) => {
        return <ImageComponent key={`column-2-image_${i}`} data={dataItem} />;
      })
    : undefined;

  /**
   * Images for mobile
   */
  const images = data.map((dataItem, i) => {
    return <ImageComponent key={`image_${i}`} data={dataItem} />;
  });

  return (
    <div>
      <div className='w-full md:w-[calc(50%-6px)] mt-4 mb-2 py-4 bg-rose-800'>
        <h2 className='font-montserrat font-bold text-base ml-2 text-white'>
          {data[0]!.dateLabel}
        </h2>
      </div>

      {/**
       * Desktop
       */}
      <div className='hidden md:flex flex-row gap-3'>
        <div className='w-2/4'>{column1}</div>
        <div className='w-2/4'>{column2}</div>
      </div>

      {/**
       * Mobile
       */}
      <div className='block md:hidden relative w-full'>{images}</div>
    </div>
  );
};

export default ImageGroup;
