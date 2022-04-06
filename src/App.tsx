import mapboxgl from "mapbox-gl";
import React from "react";
import Map, { NavigationControl, ViewportProps } from "react-map-gl";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {
  const initialViewport: ViewportProps = {
    latitude: -18.88281,
    longitude: 47.520817,
    zoom: 14
  };

  const [viewport, setViewport] = React.useState<ViewportProps>(initialViewport);

  return (
    <div className="App">
      <h1>Demo react-map-gl-v6</h1>
      <div className="MapContainer">
        <Map
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          attributionControl={true}
          onViewportChange={(nextViewport: ViewportProps) => setViewport(nextViewport)}
        >
          <NavigationControl className="MapNavigationControl" />
        </Map>
      </div>
    </div>
  );
}

export default App;
