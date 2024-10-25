import { MapContainer, TileLayer, Circle, ScaleControl, Marker, Popup, Tooltip } from "react-leaflet";
import tileLayer from "../utils/tileLayer";
import "leaflet/dist/leaflet.css";

const MapWrapper = () => {
  const position = [-7.945192, 110.423425];

  return (
    <div className="h-full w-full">
      <MapContainer 
        center={position} 
        zoom={16} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}  // Ensure the map has full height and width
      >
        <TileLayer {...tileLayer} />
        <ScaleControl imperial={false} />
        <Marker position={position}>
          <Popup>G-Connect Node 1 <br /> 19 Oktober 2024</Popup>
          <Tooltip>G-Connect Node 1</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
