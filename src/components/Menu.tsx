import type { FC } from 'react';
import tags from '../lib/tags';

/* Components */
import MenuButton from './MenuButton';

/* Prop types */
type Props = {
  selected: string[];
  handleClick: (tag: string) => void;
  handleReset: () => void;
};

const Menu: FC<Props> = ({ selected, handleClick, handleReset }) => {
  return (
    <div className='mx-auto mb-5 w-11/12 max-w-4xl text-center md:mb-10'>
      {/**
       * Film buttons
       */}
      <div>
        <details open>
          <summary className='mx-auto my-1 max-w-xs cursor-pointer px-5 py-2.5 font-montserrat text-xs font-bold text-green-900 sm:text-sm md:text-base'>
            Film
          </summary>
          <div>
            {tags[0]?.map((tag, i) => (
              <MenuButton
                key={`f-button_${i}`}
                tag={tag}
                isPressed={selected.includes(tag.value)}
                handleClick={handleClick}
              />
            ))}
          </div>
        </details>
      </div>

      {/**
       * Camera buttons
       */}
      <div>
        <details>
          <summary className='mx-auto my-1 max-w-xs cursor-pointer px-5 py-2.5 font-montserrat text-xs font-bold text-green-900 sm:text-sm md:text-base'>
            Cameras
          </summary>
          <div>
            {tags[1]?.map((tag, i) => (
              <MenuButton
                key={`c-button_${i}`}
                tag={tag}
                isPressed={selected.includes(tag.value)}
                handleClick={handleClick}
              />
            ))}
          </div>
        </details>
      </div>

      {/**
       * Reset button
       */}
      <div>
        <button
          className='mx-1 mb-1 mt-3 rounded-3xl bg-neutral-300 px-5 py-2.5 font-montserrat text-xs font-light text-green-900 hover:bg-neutral-400 sm:text-sm md:text-base'
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Menu;
