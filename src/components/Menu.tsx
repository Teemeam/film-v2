import type { FC } from 'react';

/* Prop types */
type Props = {
  handleClick: (tag: string) => void;
};

const Menu: FC<Props> = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick('vr35')}>Kodak VR35 K4a</button>
      <button onClick={() => handleClick('brownie')}>
        Kodak Brownie No. 2 Cartridge Hawk-Eye Model B
      </button>
    </div>
  );
};

export default Menu;
