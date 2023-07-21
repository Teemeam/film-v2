import type { FC } from 'react';
import tags from '../lib/tags';

/* Prop types */
type Props = {
  selected: string[];
  handleClick: (tag: string) => void;
};

const Menu: FC<Props> = ({ selected, handleClick }) => {
  /**
   * Create buttons
   */
  const buttons = tags.map((tagGroup, i) => (
    <div key={`menu-group_${i}`} className='mb-3'>
      {tagGroup.map((tag, i) => (
        <button
          key={`menu-button_${i}`}
          className={`font-montserrat font-normal text-xs md:text-sm m-1 px-5 py-3 rounded-3xl ${
            selected.includes(tag.value) ? 'text-white' : 'text-black'
          } ${selected.includes(tag.value) ? tag.bgColorSelected : tag.bgColor} uppercase`}
          aria-pressed={selected.includes(tag.value)}
          onClick={() => handleClick(tag.value)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  ));

  return <div className='max-w-4xl w-11/12 mx-auto text-center'>{buttons}</div>;
};

export default Menu;
