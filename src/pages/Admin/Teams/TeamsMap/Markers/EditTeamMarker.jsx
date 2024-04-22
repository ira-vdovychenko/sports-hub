import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import logoIcon from "../../../../../assets/logo-marker.svg";
import "leaflet/dist/leaflet.css";

export const EditTeamMarker = ({ selectedTeamForEdit }) => {
  if (!selectedTeamForEdit) return null;

  const hasLogo = selectedTeamForEdit.logo;
  const iconSize = [55, 39];
  const iconAnchor = [0, 70];

  const customMarkerIcon = hasLogo
    ? L.divIcon({
        html: `
  <div style="position: relative; top: -15%; left: -10%; width: ${iconSize[0]}px; height: ${iconSize[1]}px; fill="transparent" overflow: hidden; border-radius: 0px;">
    <svg width="87" height="78" viewBox="0 0 87 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12V78L13.3846 56H75C81.6274 56 87 50.6274 87 44V0H12C5.37258 0 0 5.37258 0 12Z" fill="#D72130"/>
      <path d="M4.68359 15.666V51.3327H70.6451C76.7203 51.3327 81.6451 46.4078 81.6451 40.3327V4.66602H15.6836C9.60846 4.66602 4.68359 9.59089 4.68359 15.666Z" fill="white"/>
      <image href="${selectedTeamForEdit.logo}" width="60%" height="55%" x="17" y="5"/>
    </svg>
  </div>
`,
        iconSize: iconSize,
        iconAnchor: iconAnchor,
      })
    : L.icon({
        iconUrl: logoIcon,
        iconSize: [87, 78],
        iconAnchor: [0, 70],
      });
  return (
    <Marker
      position={[selectedTeamForEdit.Latitude, selectedTeamForEdit.Longitude]}
      icon={customMarkerIcon}
    />
  );
};
