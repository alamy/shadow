import React, { useEffect, useRef } from 'react';

function MapView() {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);
  return <div id="map" ref={mapRef}></div>;
}

export default MapView;