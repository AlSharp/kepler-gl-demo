import React from 'react';
import KeplerGl from 'kepler.gl';
import token from '../token';

const Map = ({width, height}) => {
  return (
    <KeplerGl 
      id="kepler-map"
      width={width}
      height={height}
      mapboxApiAccessToken={token}
    />
  )
}

export default Map;