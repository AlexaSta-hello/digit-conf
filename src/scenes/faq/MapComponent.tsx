import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix für Standard-Icons in Leaflet (optional, falls Icons nicht angezeigt werden)
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const position: [number, number] = [51.33102, 12.37782]; // Koordinaten für die Karte

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ 
        height: '400px', 
        width: '100%',
        position: 'relative', // Stelle sicher, dass das Stacking korrekt ist
        zIndex: 1, // Setze einen niedrigen z-index für die Karte
      }} 
      scrollWheelZoom={false}
    >
      {/* Kachel-Layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker */}
      <Marker position={position}>
        <Popup>
            <span className='font-audiowide'>DIGIT CON 2025</span><br />
            Conference Location!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
