import { useEffect } from 'react';
import Home from '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';

function MapWidgets({ view }) {
  useEffect(() => {
    view.ui.add(
      new Home({
        view,
      }),
      'top-left',
    );

    view.ui.add(
      new ScaleBar({
        view,
      }),
      'bottom-left',
    );
  }, []);

  return null;
}

export default MapWidgets;
