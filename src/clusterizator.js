import DG from '2gis-maps';

const clusterSizes = [
  5242880 , 2621440, 1310720, 655360, 327680,
  163840, 81920, 40960, 20480, 10240,
  5120, 2560, 1280, 640, 320,
  160, 80, 40, 20
];

function clusterize(coordinates, size) {
  const clusters = [];

  coordinates.forEach(latLng => {
    const containedInCluster = clusters.find(
      cluster => cluster.toBounds(size).contains(latLng)
    );

    if (!containedInCluster) {
      clusters.push(latLng);
    }
  });

  return clusters;
}

export function getClusterizedFeatureGroups(coordinates) {
  const clusters = Array(19).fill(null);

  clusters[18] = clusterize(coordinates, clusterSizes[18]);
  for (let i = 17; i >= 0; --i) {
    clusters[i] = clusterize(clusters[i + 1], clusterSizes[i]);
  }
  
  return clusters.map(cluster => DG.featureGroup(cluster.map(latLng => DG.marker(latLng))));
}
