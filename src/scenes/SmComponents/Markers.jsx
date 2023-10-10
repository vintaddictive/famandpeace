import React from "react";
import CustomMarker from "./CustomMarker"; // Предполагается, что вы создали файл CustomMarker.jsx

const Markers = ({ markers }) => {
  return markers.map((marker, index) => (
    <CustomMarker key={index} lat={marker.lat} lng={marker.lng} />
  ));
};

export default Markers;
