import { type FC, useState } from 'react';
import tags from '../lib/tags';

/* Prop types */
type Props = {
  selected: string[];
  handleClick: (tag: string) => void;
  handleReset: () => void;
};

const Menu: FC<Props> = ({ selected, handleClick, handleReset }) => {
  const [showCameras, setShowCameras] = useState<boolean>(false);

  /**
   * Create buttons
   */
  const buttons = tags.map((tagGroup, groupIndex) => (
    <div
      key={`menu-group_${groupIndex}`}
      className={`${groupIndex === 1 && !showCameras ? 'hidden' : 'block'}`}
    >
      {tagGroup.map((tag, tagIndex) => (
        <button
          key={`menu-button_${tagIndex}`}
          className={`m-1 rounded-3xl px-5 py-2.5 font-montserrat text-xs font-light sm:text-sm md:text-base ${
            selected.includes(tag.value) ? 'text-white' : 'text-green-900'
          } ${
            selected.includes(tag.value) ? 'bg-green-900' : 'bg-neutral-100 hover:bg-neutral-200'
          }`}
          aria-pressed={selected.includes(tag.value)}
          onClick={() => handleClick(tag.value)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  ));

  return (
    <div className='mx-auto mb-5 w-11/12 max-w-4xl text-center md:mb-10'>
      {/**
       * Buttons
       */}
      {buttons}

      {/**
       * Show cameras button
       */}
      <div>
        <button
          className='m-1 px-5 py-2.5 font-montserrat text-xs font-light text-green-900 underline sm:text-sm md:text-base'
          onClick={() => setShowCameras(!showCameras)}
        >
          {showCameras ? <span>Hide cameras &#9650;</span> : <span>Show cameras &#9660;</span>}
        </button>
      </div>

      {/**
       * Reset button
       */}
      <div>
        <button
          className='m-1 px-5 py-2.5 font-montserrat text-xs font-light text-green-900 underline sm:text-sm md:text-base'
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Menu;
