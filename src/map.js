import DG from "2gis-maps";

export function initMap() {
  const map = DG.map('map', {
    center: [54.98, 82.89],
    zoom: 13,
    fullscreenControl: false
  });

  map.zoomControl.setPosition('topright');
}
