import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const defaultLocation = {
  lat: -26.032738,
  lng: 28.037021
}

const center = {...defaultLocation};

function getLocation() {
  if (navigator) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position: any) {
  center.lat = position.coords.latitude;
  center.lng = position.coords.longitude;
}

export default function MapLocation() 
{
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY || ''
    ,
  });

  const [map, setMap] = useState(null);

  getLocation();

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
