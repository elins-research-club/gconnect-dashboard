import { MapContainer, TileLayer, Circle, ScaleControl } from "react-leaflet";
import tileLayer from "../utils/tileLayer";
import "leaflet/dist/leaflet.css";

const MapWrapper = () => {
  const center = [-7.7701778, 110.377862];

  return (
    <div className="h-full w-full">
      <MapContainer 
        center={center} 
        zoom={16} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}  // Ensure the map has full height and width
      >
        <TileLayer {...tileLayer} />
        <ScaleControl imperial={false} />

        <Circle
          center={center}
          weight={2}
          color={'red'}
          fillColor={'red'}
          fillOpacity={0.1}
          radius={50}
        />
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
