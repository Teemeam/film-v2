import type { FC } from 'react';
import tags from '../lib/tags';

/* Prop types */
type Props = {
  selected: string[];
  handleClick: (tag: string) => void;
  handleReset: () => void;
};

const Menu: FC<Props> = ({ selected, handleClick, handleReset }) => {
  /**
   * Create buttons
   */
  const buttons = tags.map((tagGroup, i) => (
    <div key={`menu-group_${i}`}>
      {tagGroup.map((tag, i) => (
        <button
          key={`menu-button_${i}`}
          className={`font-montserrat font-light text-xs sm:text-sm md:text-base m-1 px-5 py-2.5 rounded-3xl ${
            selected.includes(tag.value) ? 'text-white' : 'text-green-900'
          } ${selected.includes(tag.value) ? 'bg-green-900' : 'bg-neutral-100'}`}
          aria-pressed={selected.includes(tag.value)}
          onClick={() => handleClick(tag.value)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  ));

  return (
    <div className='max-w-4xl w-11/12 mx-auto mb-10 text-center'>
      {buttons}

      {/**
       * Reset button
       */}
      <div>
        <button
          className='font-montserrat font-light text-xs sm:text-sm md:text-base m-1 px-5 py-2.5 rounded-3xl underline text-green-900'
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Menu;
