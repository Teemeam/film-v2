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

  /* console.log(
    data[0].dateLabel,
    array1,
    array1.reduce((sum, obj) => sum + obj.aspectRatio, 0)
  );
  console.log(
    data[0].dateLabel,
    array2,
    array2.reduce((sum, obj) => sum + obj.aspectRatio, 0)
  ); */

  const column1 = array1
    ? array1.map((image, i) => {
        return <ImageComponent key={`column-1-image_${i}`} data={image} />;
      })
    : undefined;

  const column2 = array2
    ? array2.map((image, i) => {
        return <ImageComponent key={`column-2-image_${i}`} data={image} />;
      })
    : undefined;

  return (
    <div>
      <div className='w-[calc(50%-6px)] mt-4 mb-2 py-4 bg-rose-800'>
        <h2 className='font-montserrat font-bold text-base ml-2 text-white'>{data[0]!.dateLabel}</h2>
      </div>

      <div className='flex flex-row gap-3'>
        <div className='w-2/4'>{column1}</div>
        <div className='w-2/4'>{column2}</div>
      </div>
    </div>
  );
};

export default ImageGroup;
