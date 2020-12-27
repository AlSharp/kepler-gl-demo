import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import KeplerMap from './KeplerGl/Map';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Kepler.gl Map</h1>
        <div>
          <KeplerMap width={1200} height={900} />
        </div>
      </div>
    </Provider>
  )
}

export default App;