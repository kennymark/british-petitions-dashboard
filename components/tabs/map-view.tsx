import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Annotation
} from "react-simple-maps";

import constituencies from '../../data/topo_wpc.json'


const MapChart = ({ data }) => {
  return (
    <ComposableMap
      width={980}
      height={551}
      style={{ width: "100%", height: "auto", }}>
      <ZoomableGroup zoom={1}>
        <Geographies geography={constituencies}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo}
              style={{
                default: { fill: "#D6D6DA", outline: "none" },
                hover: { fill: "#F53", outline: "none" },
                pressed: { fill: "#E42", outline: "none" }
              }} />)
          }
        </Geographies>
      </ZoomableGroup>

    </ComposableMap>
  );
};

export default MapChart;
