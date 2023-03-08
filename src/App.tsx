import Cards from './pages/Cards';

import { DATA } from './util/data';

const App = () => {
  return (
    <>
      <Cards cardItems={DATA} />
    </>
  );
};

export default App;
