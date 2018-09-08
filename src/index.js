import './main.css';
import {initMap} from './map';

const map = initMap();

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = document.getElementById('search-query').value;
  const url = `http://catalog.api.2gis.ru/2.0/catalog/marker/search?q=${query}&page_size=1000&region_id=32&key=ruhebf8058`;

  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
});
