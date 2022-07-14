import React, { useEffect, useState, useRef } from 'react';
import Graphic from '@arcgis/core/Graphic';

// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

function MapGraphics({ view }) {
  const formRef = useRef();
  const [state, setState] = useState({
    name: '',
    address: '',
  });
  faker.locale = 'ar';

  const loactions = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 10; index++) {
    loactions.push({
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    });
  }

  useEffect(() => {
    const glResult1 = view.map.findLayerById('glResult1');

    if (glResult1) {
      // eslint-disable-next-line array-callback-return
      loactions.map((location) => {
        const graph = new Graphic({
          geometry: {
            type: 'point',
            latitude: location.latitude,
            longitude: location.longitude,
          },
          symbol: {
            type: 'simple-marker',
            color: 'red',
            size: 14,
          },
          attributes: {
            title: location.name,
            content: location.address,
          },
        });
        glResult1.add(graph);
      });
    }

    view.ui.add(formRef.current, 'top-right');
    view.on('click', (event) => {
      view.hitTest(event).then((resp) => {
        if (resp.results.length > 0) {
          setState({
            name: resp.results[0].graphic.attributes.title,
            address: resp.results[0].graphic.attributes.content,
          });
        }
      });
    });
  }, []);

  return (
    <div
      ref={formRef}
      className="esri-widget"
      style={{ margin: 5, padding: 5 }}
    >
      <input type="text" value={state.name} className="esri-input" />
      <br />
      <br />
      <input type="text" value={state.address} className="esri-input" />
    </div>
  );
}

export default MapGraphics;
