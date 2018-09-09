import './main.css';
import DG from "2gis-maps";
import {initMap} from './map';
import {getClusterizedFeatureGroups} from './clusterizator';

function url(query) {
  return "http://catalog.api.2gis.ru/2.0/catalog/marker/search" +
    `?q=${query}` +
    "&page_size=1000" +
    "&region_id=32" +
    "&key=ruhebf8058"
}

const map = initMap();

let clusterizedMarkers = Array(19).fill(DG.featureGroup([]));

map.on('zoom', () => {
  map.updateMarkerGroup(clusterizedMarkers[map.getZoom()]);
});

document.getElementById('search-form').addEventListener('submit', event => {
  event.preventDefault();

  const query = document.getElementById('search-query').value;

  fetch(url(query))
    .then(response => response.json())
    .then(json => {
      const data = json.result.items;
      const coordinates = data.map(item => DG.latLng([item.lat, item.lon]));
      clusterizedMarkers = getClusterizedFeatureGroups(coordinates);
      console.log(clusterizedMarkers);

      map.updateMarkerGroup(clusterizedMarkers[map.getZoom()]);

      map.fitBounds(clusterizedMarkers[18].getBounds());
    })
});
