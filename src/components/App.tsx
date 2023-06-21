import type { FC } from 'react';

/* Prop types */
type Props = {
  data: CompleteData[];
};

const App: FC<Props> = ({ data }) => {
  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
