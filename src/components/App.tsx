import type { FC } from 'react';

type Props = {
  data: Data;
};

const App: FC<Props> = ({ data }) => {
  console.log(data);

  return <div>Toimii</div>;
};

export default App;
