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
      <div className='mb-2.5 w-full rounded-t-3xl bg-green-900 py-4 md:mb-3 md:w-[calc(50%-6px)]'>
        <h2 className='mx-auto w-11/12 text-center font-montserrat text-base font-bold text-white'>
          {data[0]!.dateLabel}
        </h2>
      </div>

      {/**
       * Desktop
       */}
      <div className='hidden flex-row gap-3 md:flex'>
        <div className='w-2/4'>{column1}</div>
        <div className='w-2/4'>{column2}</div>
      </div>

      {/**
       * Mobile
       */}
      <div className='relative block w-full md:hidden'>{images}</div>
    </div>
  );
};

export default ImageGroup;
