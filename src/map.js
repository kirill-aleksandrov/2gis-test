import DG from "2gis-maps";

export function initMap() {
  const map = DG.map('map', {
    center: [55.75, 37.61],
    zoom: 13,
    fullscreenControl: false
  });

  map.zoomControl.setPosition('topright');

  let currentMarkerGroup = DG.featureGroup([]);
  currentMarkerGroup.addTo(map);

  map.updateMarkerGroup = (markerGroup) => {
    if (markerGroup === currentMarkerGroup) {
      return;
    }

    currentMarkerGroup.removeFrom(map);
    currentMarkerGroup = markerGroup;
    currentMarkerGroup.addTo(map);
  };

  return map;
}
