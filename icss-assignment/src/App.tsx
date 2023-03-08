import Cards from './components/pages/Cards';

import { DATA } from './util/data';

const App = () => {
  return (
    <div>
      <Cards cardItems={DATA} />
    </div>
  );
};

export default App;
