import React from "react";
import { useDispatch } from "react-redux";
import { Marker, useMapEvents } from "react-leaflet";
import { setMapLocation, addLocation } from "../../../../../redux/actions/teamActions";
import { v4 as uuidv4 } from 'uuid';
import L from "leaflet";
import markerIcon from "../../../../../assets/locationmarker.svg";
import "leaflet/dist/leaflet.css";

export const LocationMarker = ({ mapLocation }) => {
  const dispatch = useDispatch();

  const MAP_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [15.5, 28], 
    iconAnchor: [20, 40], 
  });
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAP_TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.features && data.features.length > 0) {
            let city = "";
            let state = "";

            city = data.features.find((feature) => feature.place_type.includes("place"))?.text || "";
            state = data.features.find((feature) => feature.place_type.includes("region"))?.text || "";

            const placeName = city && state ? `${city}, ${state}` : city || state;
              const locationId = uuidv4();
              dispatch(setMapLocation({ LocationID: locationId, Latitude: lat, Longitude: lng, LocationName: placeName }));
              dispatch(addLocation({ LocationID: locationId, Latitude: lat, Longitude: lng, LocationName: placeName }));
            } else {
            console.error("No location data found");
          }
        })
        .catch((error) =>
          console.error("Error fetching location data:", error)
        );
      map.flyTo([lat, lng], map.getZoom());
    },
  });

  return mapLocation ? (
    <Marker position={[mapLocation.Latitude, mapLocation.Longitude]} icon={customMarkerIcon} />
  ) : null;
};
