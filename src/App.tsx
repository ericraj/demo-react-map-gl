import mapboxgl from "mapbox-gl";
import React from "react";
import Map, { NavigationControl, ViewState } from "react-map-gl";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function App() {
  const initialViewState: Partial<ViewState> = {
    latitude: -18.88281,
    longitude: 47.520817,
    zoom: 14
  };

  const [viewState] = React.useState<Partial<ViewState>>(initialViewState);

  return (
    <div className="App">
      <h1>Demo react-map-gl-v7</h1>
      <div className="MapContainer">
        <Map
          initialViewState={{ ...viewState }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >
          <NavigationControl position="top-right" />
        </Map>
      </div>
    </div>
  );
}

export default App;
