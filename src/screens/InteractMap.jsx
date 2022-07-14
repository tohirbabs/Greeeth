import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import React, { useEffect, useRef, useState } from 'react';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapGraphics from '../components/MapGraphics';
import MapWidgets from '../components/MapWidgets';

function InteractMap() {
  const mapRef = useRef(null);
  const [view, setView] = useState(null);

  const glResult1 = new GraphicsLayer({
    id: 'glResult1',
  });

  const glResult2 = new GraphicsLayer({
    id: 'glResult2',
  });

  useEffect(() => {
    new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: 'dark-gray',
        layers: [glResult1, glResult2],
      }),
      zoom: 3,
    // eslint-disable-next-line no-shadow
    }).when((view) => setView(view));
  }, []);

  return (
    <div ref={mapRef} style={{ height: '100vh', width: '100%' }}>
      {view && (
        <>
          <MapWidgets view={view} />
          <MapGraphics view={view} />
        </>
      )}
    </div>
  );
}

export default InteractMap;
