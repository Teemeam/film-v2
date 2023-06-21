import type { FC } from 'react';

/* Prop types */
type Props = {
  data: CompleteData[];
};

const App: FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <p className='text-orange-300'>{JSON.stringify(data)}</p>
    </div>
  );
};

export default App;
