import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .leaflet-touch .leaflet-control-attribution,
  .leaflet-touch .leaflet-control-layers,
  .leaflet-touch .leaflet-bar {
      box-shadow: none;
  }

  .leaflet-container .leaflet-control-attribution {
      background: none;
      margin: 0;
  }

  .leaflet-control {
      display: none;
  }

  .leaflet-popup-pane {
      display: none;
  }

  .leaflet-control-scale-line {
      display: none;
  }
`;

export default GlobalStyle;
