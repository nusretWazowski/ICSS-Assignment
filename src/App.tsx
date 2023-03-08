import Cards from './pages/cards/Cards';

import { DATA } from './util/data';

const App = () => {
  return (
    <>
      <Cards cardItems={DATA} />
    </>
  );
};

export default App;
