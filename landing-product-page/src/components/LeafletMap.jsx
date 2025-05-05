import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

export default function LeafletMap() {
  return (
    <section id="map" className="map-section">
      <div className="map-wrapper">
        <h2 className="map-title">Tu jesteśmy!</h2>
        <MapContainer
          center={[52.422910383809544, 16.908202898240244]}
          zoom={12}
          scrollWheelZoom={false}
          className="leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[52.422910383809544, 16.908202898240244]}
            icon={customIcon}
          >
            <Popup>60-614 Poznań, Sołacz</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
