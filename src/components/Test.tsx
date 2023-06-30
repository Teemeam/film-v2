import type { FC } from 'react';

/* Prop types */
type Props = {
  data: any;
};

const Test: FC<Props> = ({ data }) => {
  console.log(data);

  return null;
};

export default Test;
