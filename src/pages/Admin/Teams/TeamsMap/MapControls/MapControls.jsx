import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import zoomInIconUrl from '../../../../../assets/map+icon.svg'; 
import zoomOutIconUrl from '../../../../../assets/map-icon.svg'; 
import resetIconUrl from '../../../../../assets/maprefreshicon.svg'; 

export const MapControls = () => {
    const map = useMap();

  useEffect(() => {
    const addCustomControlIcon = (iconUrl, onClick, position) => {
      const icon = L.divIcon({
        className: 'custom-control-icon',
        html: `<img src="${iconUrl}" style="width: 55px; height: 55px;">`,
        iconSize: [55, 55],
      });

      const marker = L.marker(map.getCenter(), { icon, interactive: true })
        .on('click', onClick)
        .addTo(map);

      marker._icon.style.pointerEvents = 'auto';
      marker._icon.style.cursor = 'pointer';
      marker._icon.style.position = 'absolute';
      marker._icon.style.top = position.top;
      marker._icon.style.left = position.left;

      return marker;
    };

    const zoomInMarker = addCustomControlIcon(zoomInIconUrl, () => map.zoomIn(), { top: '-250px', left: '400px' });
    const zoomOutMarker = addCustomControlIcon(zoomOutIconUrl, () => map.zoomOut(), { top: '-210px', left: '400px' });
    const resetViewMarker = addCustomControlIcon(resetIconUrl, () => map.setView([39.8283, -98.5795], 4), { top: '260px', left: '400px' });
    map.scrollWheelZoom.disable(); 
    map.touchZoom.disable();
    map.dragging.disable();
    return () => {
      zoomInMarker.remove();
      zoomOutMarker.remove();
      resetViewMarker.remove();
    };
  }, [map]);

  return null;
};



