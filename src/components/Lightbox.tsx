import type { FC } from 'react';

/* Prop types */
type Props = {
  selectedImage: FormattedData | null;
  handleSelectedImage: (data: FormattedData | null) => void;
};

const Lightbox: FC<Props> = ({ selectedImage, handleSelectedImage }) => {
  return (
    <div
      className={`${
        selectedImage ? 'block' : 'hidden'
      } fixed top-0 left-0 w-full h-full bg-green-900`}
      onClick={() => handleSelectedImage(null)}
    >
      {/**
       *
       */}
      <div className='w-full h-full'>
        <img className='block w-full h-full object-contain' src={selectedImage?.url} />
      </div>

      {/**
       *
       */}
      <div className='absolute bottom-0 w-full py-5 bg-gradient-to-b from-transparent to-green-900'>
        <div className='w-11/12 mx-auto'>
          <p className='font-montserrat font-semibold text-sm text-center text-white'>
            {selectedImage?.description.film}
          </p>
          <p className='font-montserrat font-semibold text-sm text-center text-white'>
            {selectedImage?.description.camera}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
