import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const TeamsMarker = ({teams, locations, filteredTeams, isFiltering}) => {

    const createCustomIcon = (count) => {
        const iconHtml = `
        <svg width="60" height="60" viewBox="0 0 86 86" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="dropshadow" x="-30%" y="-30%" width="150%" height="170%">
            
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="0" dy="3" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <circle cx="43" cy="43" r="40" fill="white" stroke="white" stroke-width="3" filter="url(#dropshadow)"/>
        <circle cx="43" cy="43" r="33" fill="#3A465A"/>
        <text x="42" y="45" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="'Lato', sans-serif">${count}</text>
    </svg>
      `;
        return L.divIcon({
          html: iconHtml,
          className: "",
          iconSize: [62, 62],
          iconAnchor: [43, 43],
        });
      };

      const teamsToUse = isFiltering ? filteredTeams :  teams;

      return (
        <>
          {locations.map((location, index) => {
            const teamsInLocation = teamsToUse.filter(team => team.LocationID === location.LocationID);
            const count = teamsInLocation.length;
            
            if (count > 0) {
              return (
                <Marker
                  key={index}
                  position={[location.Latitude, location.Longitude]}
                  icon={createCustomIcon(count)}
                />
              );
            } else {
              return null;
            }
          })}
        </>
      );
    };